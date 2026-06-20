# gas-data-backend — A mini SNS where the spreadsheet IS the database

> Live: https://ai-build-lab.pages.dev/works/gas-data-on-spreadsheet

Build a mini SNS with **Google Apps Script** — no server, no database, no login. The database is a Google Spreadsheet you can open and watch fill up. `Session.getActiveUser()` is your entire identity system (Google verified them, so the app never sees a password), and `LockService` keeps concurrent posts safe.

This folder has three files: `Code.gs` (the whole backend — `doGet`, the auto-creating sheet helpers, `getTimeline` / `addPost` / `toggleLike`), `index.html` (a small X-style timeline front-end that POSTs via `google.script.run`), and `appsscript.json` (timezone `Asia/Tokyo`, web-app config).

## Use just this folder

```bash
# no git history — fresh starter
npx degit itoksk/ai-build-lab-starters/gas-data-backend my-gas-sns

# or with git history (sparse-checkout)
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set gas-data-backend && git checkout
```

## Deploy it (5 steps)

1. Make a new blank Google Sheet. **拡張機能 (Extensions) → Apps Script**.
2. Select all in `Code.gs`, delete it, and paste this folder's `Code.gs`. Save.
3. Click **＋** next to Files → **HTML**, name it exactly `index` (no `.html`). Delete the sample and paste this folder's `index.html`. Save.
4. (Optional) Project Settings → "Show appsscript.json" → paste this folder's `appsscript.json`.
5. **Deploy → New deployment → gear → Web app**. Execute as: **Me**. Access: **Anyone in your organization**. Authorize (the "unverified" warning is fine — it's your own code), copy the `/exec` URL, share with the class.

Opening the `/exec` URL shows **みんなのタイムライン**. The `Posts` tab of your sheet fills up live as people post.

## A note on the design (on purpose: a little naive)

`getTimeline()` reads the **entire** Posts and Likes sheets on every refresh, and a like is removed with `deleteRow` (which physically shifts rows). For a classroom that's fine and fast. At 10,000 posts it re-reads 10,000 rows every time. The "graduation": store time as text with `Utilities.formatDate`, use soft-delete instead of `deleteRow`, and read only the last N rows.

## License

MIT (see repo root). Contributions welcome via PR.
