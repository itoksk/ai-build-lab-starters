# tech-stack-cheat-sheet — what each tool is for

> Live: https://ai-build-lab.pages.dev/skills/tech-stack-cheat-sheet

A one-page reference for what HTML, CSS, JavaScript, Python, Node.js, and MediaPipe are each good at — and not for — so you can ask the AI for the right tool and not lose time to setup and debugging. `cheat-sheet.md` has the table plus the "which stack should I use?" hearing prompt, verbatim.

The rule: start with one HTML file; reach for Next.js only when you outgrow it.

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/tech-stack-cheat-sheet my-cheatsheet
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set tech-stack-cheat-sheet && git checkout
```

## License

MIT (see repo root). Contributions welcome via PR.
