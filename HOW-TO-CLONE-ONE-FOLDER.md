# How to clone just one folder

The umbrella repo is **[`itoksk/ai-build-lab-starters`](https://github.com/itoksk/ai-build-lab-starters)**. You usually only want ONE folder from it (e.g. `gas-data-backend/`). Here are the three ways, from simplest to most flexible. Replace `<subfolder>` with the folder you want.

---

## 1. `npx degit` — just the files, no git history (recommended)

Best when you want a **fresh starter** to build on. `degit` copies the folder's current files and nothing else (no `.git`, no history).

```bash
npx degit itoksk/ai-build-lab-starters/<subfolder> my-project
cd my-project
```

Example:

```bash
npx degit itoksk/ai-build-lab-starters/vibe-templates my-vibe-app
cd my-vibe-app
```

No install needed — `npx` fetches `degit` on the fly. Requires Node.js.

---

## 2. Full clone, then `cd` into the folder

Simplest if you don't mind downloading everything. You get the whole repo with history, then just work inside one folder.

```bash
gh repo clone itoksk/ai-build-lab-starters
# or: git clone https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters/<subfolder>
```

---

## 3. Sparse-checkout — one folder WITH git history

Best when you want to **track changes** to just one folder (commit, pull updates) without downloading every other folder's blobs.

```bash
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone
git sparse-checkout set <subfolder>
git checkout
```

After this, only `<subfolder>` is materialized on disk. To add another folder later:

```bash
git sparse-checkout set <subfolder> <another-subfolder>
```

To go back to the full repo:

```bash
git sparse-checkout disable
```

---

## Folder names

`gas-data-backend` · `vibe-templates` · `merge-two-apps` · `sns-post-customize` · `microgpt-quickstart` · `image-gen-quickstart` · `tetris-hand-pointer` · `prompt-library` · `magic-phrases` · `golden-rules` · `tech-stack-cheat-sheet` · `troubleshooting-templates`
