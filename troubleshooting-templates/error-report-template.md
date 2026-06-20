# Error report template

When you hit an error, copy the whole error message, paste it to the AI, and say "fix this." More than half of all problems are solved this way. This template (verbatim from `/troubleshooting`) makes the report effective — fill in the `○○` parts.

> Live: https://ai-build-lab.pages.dev/troubleshooting

## Checklist before you send

- Did you copy the **full** error message?
- Did you include the line number?
- Did you describe what you **expected**?
- Did you describe what **actually** happened?
- Did you attach the relevant code?

## Template

```
【エラーメッセージ】
（コンソールのエラー全文をここにコピー）

【発生した行番号】
○○行目

【期待する動作】
○○ボタンをクリックしたら、○○が表示される

【実際の動作】
○○ボタンをクリックしても、何も起きない（または○○エラーが出る）

【関連するコード】
```javascript
// 問題が起きている箇所のコード
```

【試したこと】
- ○○を確認した
- ○○を変更してみた
```

## Magic phrases for errors

- `「このエラーを修正して」` — use after pasting the error message
- `「なぜこのエラーが出るか説明して」` — when you want the root cause
- `「ログを追加して原因を特定したい」` — when you can't pinpoint the error
- `「この部分が動かない理由を考えて」` — no error, but it doesn't work as expected
