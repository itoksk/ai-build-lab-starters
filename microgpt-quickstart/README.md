# microgpt-quickstart — a complete GPT in ~200 lines

> Live: https://ai-build-lab.pages.dev/works/read-microgpt and https://ai-build-lab.pages.dev/works/train-microgpt-your-words

`microgpt.py` is a complete GPT in about 200 lines of plain, dependency-free Python (no PyTorch, no numpy) — the same machinery as GPT-2, only small. **The full file is not copied here**; it lives, canonical and up to date, in **[itoksk/summer-ai-materials](https://github.com/itoksk/summer-ai-materials)** at `materials/scripts/microgpt.py`. This folder gives you a pointer (`microgpt.py` placeholder), a tiny `input.txt` to train on, and `run.md` with the Mac / Windows / SSL gotchas.

## Get the real thing and run it

```bash
git clone https://github.com/itoksk/summer-ai-materials.git
cd summer-ai-materials/materials/scripts
python3 microgpt.py            # Mac   (Windows: python microgpt.py)
```

Then sweep the temperature dial, or train on your own words:

```bash
python3 microgpt_lab.py --input input.txt --temperatures 0.1 2.0 --num-samples 5
python3 gem_to_corpus.py my_corpus.txt -o input_me.txt --augment
python3 microgpt_lab.py --input input_me.txt --steps 600 --block-size 40 --chat
```

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/microgpt-quickstart my-microgpt
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set microgpt-quickstart && git checkout
```

See `run.md` for the SSL / cp932 / `python` vs `python3` fixes.

## License

MIT (see repo root). `microgpt.py` is derived from Andrej Karpathy's work; see the summer-ai-materials repo for its license. Contributions welcome via PR.
