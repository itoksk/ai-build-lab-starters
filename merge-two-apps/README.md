# merge-two-apps — splice a design and a feature into one file

> Live: https://ai-build-lab.pages.dev/works/merge-two-apps

Two working single-file demos plus the merge prompt. `app-a.html` is design-rich but feature-light (an animated aurora hero). `app-b.html` is design-light but feature-rich (a working tally counter with a history log). `MERGE_PROMPT.md` has the verbatim prompt that asks the AI to keep A's design and add B's feature, in one HTML file.

It's a rehearsal for a team build: because each app is self-contained, the AI can combine them cleanly.

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/merge-two-apps my-merge
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set merge-two-apps && git checkout
```

Open `app-a.html` and `app-b.html` in a browser to see each part, then follow `MERGE_PROMPT.md`.

## License

MIT (see repo root). Contributions welcome via PR.
