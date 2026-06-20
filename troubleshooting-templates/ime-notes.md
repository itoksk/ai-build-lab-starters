# Japanese IME notes for chat-input apps

When building chat apps, it's common for the input form to send on Enter. But Japanese input (IME) uses Enter to **confirm conversion**, so the message gets sent just by converting text. This issue is often missed by English-centric AIs and templates — always check it for apps aimed at Japanese users. Verbatim from `/troubleshooting`.

> Live: https://ai-build-lab.pages.dev/troubleshooting

## The bug

> 日本語入力中にEnterで送信される — チャットアプリで変換確定のEnterキーで送信されてしまう

Fix it by asking the AI: `「日本語入力（IME）の変換中はEnterで送信しないようにして」`

## Prompts to fix it

```
日本語入力（IME変換中）はEnterで送信しないようにして
```

```
compositionstart/compositionendイベントで変換中かどうかを判定して
```

```
全角入力を前提として、変換確定と送信を区別できるようにして
```

## Why it works

The `compositionstart` / `compositionend` events tell you when the IME is mid-conversion. Suppress the send while a composition is in progress, and Enter confirms the conversion instead of firing the message.
