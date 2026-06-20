# Cheat-sheet — every command in one place

Install / git / Python / microgpt / vibe-local commands used across the **[AI BUILD LAB](https://ai-build-lab.pages.dev)** course (`/commands` page), copy-pasteable for Mac and Windows. Commands are verbatim from the site. Replace `<...>` placeholders with your own values.

---

## Install

Initial setup. Mac and Windows differ — use the one for your OS.

```bash
# Install Homebrew (Mac) — the universal package manager
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Mac all-in-one: node / git / ollama / python
brew install node git ollama python
brew services start ollama

# Install uv (Mac) — fast Python package manager, used for Gemma fine-tuning
brew install uv

# Install Python 3.12 (Windows)
winget install Python.Python.3.12
# If winget isn't found, install or update 'App Installer' from the Microsoft Store.

# Install Python on Mac (Homebrew)
brew install python

# Install vibe-local — local-LLM-friendly agentic CLI
curl -fsSL https://raw.githubusercontent.com/itoksk/vibe-local-private/main/install.sh | bash
export PATH="$HOME/.local/bin:$PATH"
vibe-local --help

# Install Codex CLI
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

---

## Git

The commands hammered through in class — clone → edit → push is the spine.

```bash
# Clone a repo (replace <自分のID> and <リポジトリ名> with yours)
git clone https://github.com/<自分のID>/<リポジトリ名>.git
cd <リポジトリ名>

# First-time identity setup
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Commit and push
git add -A
git commit -m "feat: 短い説明をここに"
git push origin main

# Pull the latest
git pull origin main

# Reset to remote (hard) — local changes vanish; git stash first as insurance
git fetch origin
git reset --hard origin/main

# Stash your changes
# 退避
git stash push -m "save before reset"
# 後で戻す
git stash pop

# Create a branch
git checkout -b feat/<short-name>

# See the diff
git diff
git diff --stat
git log --oneline -10

# Fork and clone in one shot (gh) — swap <owner>/<repo> for any repo
gh repo fork shigetasensei/tetris-hand-en --clone

# Spin up Codespaces from CLI
gh codespace create -R <自分のID>/<リポ名> --machine basicLinux32gb
# 立てたものを一覧
gh codespace list
# ssh で入って作業
gh codespace ssh

# Stop / delete Codespaces to save quota
# 起動中のものを止める
gh codespace stop
# まったく要らないなら削除
gh codespace delete
```

---

## Python and pip

Mac uses `python3`; Windows uses `python` or `py`. Knowing this fixes half the trouble.

```bash
# Check Python version (Mac)
python3 --version

# Check Python version (Win)
python --version
# Microsoft Store のニセが反応する時は本物のパスを探す
where.exe python

# Run a script (Mac)
python3 microgpt.py

# Run a script (Win)
python microgpt.py
# 'Python was not found' と出るなら py で
py microgpt.py

# Fix SSL cert error (Mac)
pip3 install certifi
export SSL_CERT_FILE=$(python3 -m certifi)
python3 microgpt.py

# Fix SSL cert error (Win)
pip install pip-system-certs
python microgpt.py

# Disable MS Store stub python (Win)
# 設定 → アプリ → アプリ実行エイリアス
# python.exe / python3.exe を OFF にする
```

---

## microgpt and vibe-local

Real local-LLM commands run during class.

```bash
# First run of microgpt
# Mac
python3 microgpt.py
# Windows
python microgpt.py

# Turn your own text into input_me.txt
python3 gem_to_corpus.py my_corpus.txt -o input_me.txt --augment

# Train with microgpt_lab
python3 microgpt_lab.py --input input_me.txt --steps 600 --block-size 40 --temperatures 0.8 --num-samples 10

# Start microgpt_lab in chat mode
python3 microgpt_lab.py --input input_me.txt --steps 600 --block-size 40 --chat

# Run vibe-local with 1.7B model (for ~8GB-RAM machines)
vibe-local --model qwen3:1.7b

# Run vibe-local with 8B model (for 16GB+ RAM, stronger at code)
vibe-local --model qwen3:8b

# Start and check Ollama (Mac)
brew services start ollama
ollama list
ollama --version
```

---

## Harness clones (hackathon materials)

Cloning the practice repos handed out in class. Just swap `<自分のID>`.

```bash
# Clone summer-ai-harness
git clone https://github.com/<自分のID>/harness.git
cd harness

# Clone Day2 harness
git clone https://github.com/<自分のID>/summer-ai-harnes-day2.git

# Gemma fine-tune lab
git clone https://github.com/itoksk/gemma-finetune-lab

# Clone tetris-hand
git clone https://github.com/<自分のID>/tetris-hand.git

# tetris-hand (EN)
git clone https://github.com/itoksk/tetris-hand-en
```

---

## Misc / extras

Small things that prevent big stalls.

```bash
# Reset GAS permissions — roll back a wrong GAS authorization
# ブラウザで開く
https://myaccount.google.com/permissions

# brew not found (Mac)
eval "$(/opt/homebrew/bin/brew shellenv)"
# 永続化したいなら ~/.zprofile に追記
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile

# vibe-local not found
export PATH="$HOME/.local/bin:$PATH"
# 永続化（Mac）
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zprofile

# Spin up a Next.js project in 1 min
npx create-next-app@latest my-app
cd my-app
npm run dev
# → http://localhost:3000
```
