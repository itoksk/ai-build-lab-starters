# prompt-library — every prompt category as a .md file

> Live: https://ai-build-lab.pages.dev/prompts

Over 100 prompts used across the 5-day course, one `.md` file per category, copied **verbatim** from the site. Click-to-copy on the site; here they're in fenced code blocks so you can grab them straight from GitHub. Paste as-is, then tweak into your own words.

## Files

| File | Category |
|---|---|
| `role.md` | Role / audience / task / constraint — the shape of a strong prompt |
| `techniques.md` | Magic phrases: CoT, ToT, 5-Why, role-prompting, anti-hallucination, … |
| `image.md` | 4-part image prompts (Subject / Style / Composition / Negative) |
| `character.md` | Consistent-character prompts |
| `language.md` | Language & chat (Ollama / vibe-local) |
| `code.md` | Debug / refactor / build / commit prompts |
| `teaching.md` | Classroom prompts: tutors, hearings, AI apps, demo openers |

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/prompt-library my-prompts
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set prompt-library && git checkout
```

## License

MIT (see repo root). Contributions welcome via PR.
