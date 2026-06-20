# vibe-templates — the 4 single-HTML Vibe-Coding starters

> Live: https://ai-build-lab.pages.dev/works/vibe-coding-mini-build

The four starter apps you build in the Mini Build Work, each as **one self-contained HTML file** (open in a browser, see something working): a SUKI/"show one thing I love" page, a 3-question quiz, a fortune-teller, and a tiny keyboard game. `prompts.md` holds the exact generating prompts (verbatim) plus the full 4-step workflow.

Use these as a starting point, then iterate **one change per message** in your AI of choice.

## Files

| File | What it is |
|---|---|
| `suki-page.html` | "Show one thing I love" page — bold title, 3 highlights, image slot |
| `quiz.html` | 3-question multiple-choice quiz with a celebration at the end |
| `fortune.html` | One-button fortune-teller with random results + animation |
| `mini-game.html` | Tiny keyboard game (dodge the falling dots) |
| `prompts.md` | The 4 build prompts, verbatim, + the 4-step workflow |

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/vibe-templates my-vibe-app
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set vibe-templates && git checkout
```

Then just double-click any `.html` to run it — no build step, no dependencies.

## License

MIT (see repo root). Contributions welcome via PR.
