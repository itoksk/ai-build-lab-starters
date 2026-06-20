# magic-phrases — prompt one-liners that change the answer

> Live: https://ai-build-lab.pages.dev/skills/chain-of-thought · /skills/tree-of-thoughts · /skills/five-why · /skills/role-prompting · /skills/anti-hallucination

The short, research-backed phrases you add after any question to change the answer's quality — Chain of Thought, Tree of Thoughts, 5-Why, role prompting, anti-hallucination — each with a "when to use" note. `magic-phrases.md` has them all, verbatim. They stack.

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/magic-phrases my-magic-phrases
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set magic-phrases && git checkout
```

## License

MIT (see repo root). Contributions welcome via PR.
