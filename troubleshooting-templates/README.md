# troubleshooting-templates — copy-paste prompts for when you're stuck

> Live: https://ai-build-lab.pages.dev/troubleshooting

Ready-to-use prompt templates for the moments you get stuck: reporting an error, asking for a fix, speeding code up, adding tests — plus notes on the Japanese IME chat-input pitfall. All verbatim from the site. Replace the `○○` / `（…）` placeholders and send.

## Files

| File | Use it for |
|---|---|
| `error-report-template.md` | Reporting an error so the AI can actually fix it (+ checklist & magic phrases) |
| `code-fix-template.md` | Asking the AI to fix a specific problem |
| `speedup-template.md` | Asking the AI to make slow code faster |
| `tests-template.md` | Asking the AI to add tests to a function |
| `ime-notes.md` | The Enter-sends-while-converting bug in Japanese chat apps |

> First thing to try, always: copy the **whole** error message, paste it to the AI, and say "fix this." More than half of all problems are solved this way.

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/troubleshooting-templates my-templates
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set troubleshooting-templates && git checkout
```

## License

MIT (see repo root). Contributions welcome via PR.
