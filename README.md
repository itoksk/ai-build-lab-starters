# ai-build-lab-starters

Starter source code + templates for every Work and Skill on **[AI BUILD LAB](https://ai-build-lab.pages.dev)** — a trilingual (日本語 / English / やさしい日本語) AI knowledge site.

Each folder maps to a page on the site. Clone the whole thing, or grab just one folder for a fresh starter. Code blocks and prompts are copied **verbatim** from the site.

## Quick start

```bash
# the whole umbrella (everything)
gh repo clone itoksk/ai-build-lab-starters

# just one folder, no git history (recommended for "I want a fresh starter")
npx degit itoksk/ai-build-lab-starters/<subfolder> my-project

# one folder WITH git history (sparse-checkout)
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone
git sparse-checkout set <subfolder>
git checkout
```

See [`HOW-TO-CLONE-ONE-FOLDER.md`](HOW-TO-CLONE-ONE-FOLDER.md) for details, and [`CHEATSHEET.md`](CHEATSHEET.md) for every install / git / Python / microgpt command in one place.

## Subfolders ↔ Site mapping

| Folder | Site page | What it is |
|---|---|---|
| [`gas-data-backend/`](./gas-data-backend) | /works/gas-data-on-spreadsheet | Spreadsheet-as-backend GAS web-app starter |
| [`vibe-templates/`](./vibe-templates) | /works/vibe-coding-mini-build | The 4 single-HTML Vibe-Coding starters + their prompts |
| [`merge-two-apps/`](./merge-two-apps) | /works/merge-two-apps | Two demo HTMLs + the merge prompt |
| [`sns-post-customize/`](./sns-post-customize) | /works/customize-an-sns-post | SNS post template + iteration prompts |
| [`microgpt-quickstart/`](./microgpt-quickstart) | /works/read-microgpt, /works/train-microgpt-your-words | Pointer to summer-ai-materials + minimal sample data |
| [`image-gen-quickstart/`](./image-gen-quickstart) | /works/image-four-dials | The 4-dial Stable Diffusion snippet |
| [`tetris-hand-pointer/`](./tetris-hand-pointer) | /works/tetris-hand-fork-it, /works/mediapipe-hands | Pointer to shigetasensei/tetris-hand-en and itoksk/tetris-hand-en |
| [`prompt-library/`](./prompt-library) | /prompts | Every prompt category as a .md file |
| [`magic-phrases/`](./magic-phrases) | /skills/{chain-of-thought, …} | Prompt magic-phrase one-liners |
| [`golden-rules/`](./golden-rules) | /skills/seven-golden-rules | The 7 golden rules + repair phrases |
| [`tech-stack-cheat-sheet/`](./tech-stack-cheat-sheet) | /skills/tech-stack-cheat-sheet | HTML/CSS/JS/Python/Node "what's it for" |
| [`troubleshooting-templates/`](./troubleshooting-templates) | /troubleshooting | Error-report / code-fix / speedup / tests prompt templates + IME notes |

## License

MIT. See [LICENSE](LICENSE). Contributions welcome via PR.
