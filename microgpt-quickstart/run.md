# Running microgpt — Mac / Windows / SSL gotchas

The full `microgpt.py` lives in **[itoksk/summer-ai-materials](https://github.com/itoksk/summer-ai-materials)** (`materials/scripts/microgpt.py`). Get it and run it:

```bash
git clone https://github.com/itoksk/summer-ai-materials.git
cd summer-ai-materials/materials/scripts
python3 microgpt.py
```

By default it auto-downloads the 1,000 Pokemon names. To train on the tiny sample in this folder instead, copy this folder's `input.txt` next to `microgpt.py`. Watch the `loss` number fall — that's the model learning.

For deeper troubleshooting see https://ai-build-lab.pages.dev/troubleshooting

---

## Mac vs Windows: the command differs

```bash
# Mac
python3 microgpt.py

# Windows — if 'Python was not found', python3 hits the Microsoft Store stub
python microgpt.py
# or
py microgpt.py

# Windows: find the real Python
where.exe python
```

---

## Mac: SSL — `CERTIFICATE_VERIFY_FAILED`

```
urllib.error.URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED]
certificate verify failed: unable to get local issuer certificate (_ssl.c:1082)>
```

Homebrew's Python ships without the CA certificate bundle, so urllib can't verify HTTPS. One-line fix:

```bash
pip3 install certifi
export SSL_CERT_FILE=$(python3 -m certifi)
python3 microgpt.py
```

(On Homebrew, `Install Certificates.command` doesn't exist — the `certifi` route is more reliable.)

---

## Windows: SSL cert errors (corporate proxy, etc.)

```
urllib.error.URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED]>
```

```bash
pip install pip-system-certs
python microgpt.py
```

`pip-system-certs` makes pip/urllib trust the OS cert store — works well behind corporate networks.

---

## Windows: `UnicodeDecodeError: 'cp932'`

```
UnicodeDecodeError: 'cp932' codec can't decode byte 0x82
in position 282: illegal multibyte sequence
```

Windows' default `open()` reads as Shift-JIS (cp932), so UTF-8 files break. Edit the `.py` file's `open()` to be explicit:

```python
# microgpt.py — specify utf-8
docs = [line.strip() for line in open('input.txt', encoding='utf-8') if line.strip()]

# if stray bytes still appear, tolerate them:
docs = [line.strip() for line in open('input.txt', encoding='utf-8', errors='ignore') if line.strip()]
```

> Don't paste that Python line into PowerShell — PowerShell isn't Python and will throw syntax errors. Edit the `.py` file directly, then run `python microgpt.py`.

---

## Just reset everything (clean the repo)

```bash
git fetch origin
git reset --hard origin/main

# the above wipes local changes — save them first if needed:
git stash push -m "save before reset"
```
