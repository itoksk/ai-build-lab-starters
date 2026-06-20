const SS = SpreadsheetApp.getActiveSpreadsheet();

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('みんなのタイムライン')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getSheet_(name, headers) {
  let sheet = SS.getSheetByName(name);
  if (!sheet) {
    sheet = SS.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}
const getPostSheet_ = () => getSheet_('Posts', ['id', 'email', 'name', 'content', 'createdAt']);
const getLikeSheet_ = () => getSheet_('Likes', ['postId', 'email', 'createdAt']);

function getUser_() {
  const email = Session.getActiveUser().getEmail();
  const name = email ? email.split('@')[0] : 'ゲスト';
  return { email, name };
}

// タイムライン取得（新しい順 + いいね情報込み）
function getTimeline() {
  const me = getUser_().email;
  const posts = getPostSheet_().getDataRange().getValues();
  const likes = getLikeSheet_().getDataRange().getValues();

  const likeMap = {}; // postId -> { count, mine }
  for (let i = 1; i < likes.length; i++) {
    const [postId, email] = likes[i];
    if (!likeMap[postId]) likeMap[postId] = { count: 0, mine: false };
    likeMap[postId].count++;
    if (email === me) likeMap[postId].mine = true;
  }

  const result = [];
  for (let i = 1; i < posts.length; i++) {
    const [id, , name, content, createdAt] = posts[i];
    const l = likeMap[id] || { count: 0, mine: false };
    result.push({
      id, name, content,
      createdAt: createdAt ? new Date(createdAt).getTime() : 0,
      likeCount: l.count,
      likedByMe: l.mine
    });
  }
  return result.reverse();
}

// 投稿
function addPost(content) {
  content = String(content).trim().slice(0, 280);
  if (!content) throw new Error('内容が空です');
  const user = getUser_();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getPostSheet_().appendRow([Utilities.getUuid(), user.email, user.name, content, new Date()]);
  } finally {
    lock.releaseLock();
  }
  return getTimeline();
}

// いいねトグル（押す/取り消し）
function toggleLike(postId) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const me = getUser_().email;
    const sheet = getLikeSheet_();
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === postId && data[i][1] === me) {
        sheet.deleteRow(i + 1); // 既にいいね済み → 取り消し
        return getTimeline();
      }
    }
    sheet.appendRow([postId, me, new Date()]);
  } finally {
    lock.releaseLock();
  }
  return getTimeline();
}
