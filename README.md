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

## Related source code in `itoksk/summer-ai-materials` (PUBLIC)

The microgpt site that this lab is built on already publishes its source files in **[itoksk/summer-ai-materials](https://github.com/itoksk/summer-ai-materials)**. To keep this umbrella focused on starters, the heavy Python and Colab notebooks live there — not duplicated here. Direct links so you can find them in one click:

### Scripts (`materials/scripts/`)
- [`microgpt.py`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/microgpt.py) — full ~200-line GPT in pure Python (referenced by `microgpt-quickstart/`)
- [`microgpt_lab.py`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/microgpt_lab.py) — training & chat loop on top of microgpt (used by `/works/train-microgpt-your-words`)
- [`gem_to_corpus.py`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/gem_to_corpus.py) — turn a Gem-generated corpus into `input_me.txt` for an AI Twin
- [`image_gen.py`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/image_gen.py) — the 4-dial Stable Diffusion snippet (mirrored in `image-gen-quickstart/`)

### Colab notebooks (`materials/notebooks/`)
- [`microgpt_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/microgpt_colab.ipynb) — microgpt on Colab
- [`image_gen_advanced.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/image_gen_advanced.ipynb) ([EN](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/image_gen_advanced_en.ipynb)) — Stable Diffusion lab
- [`nanobanana_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/nanobanana_colab.ipynb) — Nano Banana Pro image-gen
- [`tetris_hand_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/tetris_hand_colab.ipynb) — Tetris × MediaPipe hand-tracking
- [`yolo_world_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/yolo_world_colab.ipynb) — YOLO World object detection
- [`personality_match_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/personality_match_colab.ipynb) ([EN](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/personality_match_colab_en.ipynb)) — personality matching ML
- [`survivor_machine_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/survivor_machine_colab.ipynb) ([EN](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/survivor_machine_colab_en.ipynb)) — survivor-machine ML
- [`titanic_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/titanic_colab.ipynb) ([EN](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/titanic_colab_en.ipynb)) — Titanic classic ML
- [`heatstroke_colab.ipynb`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/heatstroke_colab.ipynb) ([EN](https://github.com/itoksk/summer-ai-materials/blob/main/materials/notebooks/heatstroke_colab_en.ipynb)) — heatstroke prediction

### Gem system prompts (`materials/gems/`)
- [`hearing-gem.md`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/gems/hearing-gem.md) — My Data Interviewer
- [`twin-gem.md`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/gems/twin-gem.md) — AI Twin
- [`lyrics-gem.md`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/gems/lyrics-gem.md) — Theme Song Writer
- [`kabeuchi-gem.md`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/gems/kabeuchi-gem.md) — Hackathon Mentor (壁打ち)
- [`character-gem.md`](https://github.com/itoksk/summer-ai-materials/blob/main/materials/gems/character-gem.md) — Character Studio

### GAS samples (`materials/gas/`)
- [`survivor-machine/`](https://github.com/itoksk/summer-ai-materials/tree/main/materials/gas/survivor-machine) — survivor-machine GAS pieces

### Other public repos this site/lab points at

- [`itoksk/tetris-hand`](https://github.com/itoksk/tetris-hand) — original Tetris × hand-tracking
- [`itoksk/tetris-hand-en`](https://github.com/itoksk/tetris-hand-en) — English edition
- [`shigetasensei/tetris-hand-en`](https://github.com/shigetasensei/tetris-hand-en) — fork with body / eyes / recorded-pose modes
- [`itoksk/gemma-finetune-lab`](https://github.com/itoksk/gemma-finetune-lab) — Fine-tune Gemma on your own data
- [`itoksk/vibe-local-image`](https://github.com/itoksk/vibe-local-image) — vibe-local image-gen add-on

## License

MIT. See [LICENSE](LICENSE). Contributions welcome via PR.
