# Add-tests template

A ready-to-use prompt template (verbatim from `/troubleshooting`). Replace the `○○` / `（…）` parts and send.

> Live: https://ai-build-lab.pages.dev/troubleshooting

```
以下の関数にテストを追加してください。

【対象の関数】
```
（コードを貼り付け）
```

【テストケース】
- 正常系: ○○の場合、○○が返る
- 異常系: ○○の場合、エラーになる
- 境界値: ○○の場合

【テスト環境】
- GASの場合: 手動テスト用の関数を作成
- Webアプリ: console.log でテスト結果を出力
```
