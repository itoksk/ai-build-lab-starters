# image-gen-quickstart — turn the four image dials

> Live: https://ai-build-lab.pages.dev/works/image-four-dials

The real engine behind "AI image" tools is Stable Diffusion, and it has four dials you can turn by hand: **CFG** (how hard it obeys the prompt), **steps** (denoising passes), **seed** (same seed + same prompt = same image), and the **negative prompt** (what to keep out). `image_gen.py` is the exact snippet from the Work — pick a `model_id` at the top and run.

This needs a GPU. The easiest path is **Colab** (no install): open the lab notebook below, switch on the free T4 GPU (Runtime → Change runtime type → T4 GPU), and run the cells top to bottom.

- Colab lab: https://colab.research.google.com/github/itoksk/summer-ai-materials/blob/main/materials/notebooks/image_gen_advanced.ipynb
- Local / terminal version: https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/image_gen.py

| Dial | What it changes | Good value |
|---|---|---|
| CFG (guidance) | How hard the AI obeys (too high = "fried") | about 7 |
| Steps | Denoising passes — more = finer but slower | about 20–25 |
| Seed | Starting noise; same seed + same prompt = same image | any number |
| Negative prompt | A list of what to keep OUT | `blurry, text, watermark` |

> Rules: never generate a real person's face/name, don't reproduce an existing character, never pass an AI image off as human-made, and obey the model licence (CreativeML OpenRAIL-M).

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/image-gen-quickstart my-imagegen
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set image-gen-quickstart && git checkout
```

## License

MIT (see repo root). Contributions welcome via PR.
