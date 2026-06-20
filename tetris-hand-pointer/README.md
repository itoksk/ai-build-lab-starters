# tetris-hand-pointer — play Tetris with your bare hands

> Live: https://ai-build-lab.pages.dev/works/tetris-hand-fork-it and https://ai-build-lab.pages.dev/works/mediapipe-hands

A browser Tetris you steer with your **hand** (MediaPipe tracks 21 points on your hand and those coordinates drive the game). There's no code copied here — the full apps live in their own repos. This folder is a pointer so you fork the right one.

## The two repos

| Repo | What it is |
|---|---|
| **[shigetasensei/tetris-hand-en](https://github.com/shigetasensei/tetris-hand-en)** | **Fork this one.** Extended version: Hand + Body + Eyes modes, custom-recorded poses, Vercel auto-deploy, GPU→CPU fallback, a `test/` folder. |
| **[itoksk/tetris-hand-en](https://github.com/itoksk/tetris-hand-en)** | The original (hand mode only). |
| Live demo | https://tetris-hand-en.vercel.app — play it first, no install |

## The GitHub flow (the whole point of the Work)

1. **Play first** — open https://tetris-hand-en.vercel.app and cycle the Hand / Pose / Eye modes.
2. **Fork** `shigetasensei/tetris-hand-en` to your account (or `gh repo fork shigetasensei/tetris-hand-en --clone`).
3. **Codespaces**: on your fork, Code → Codespaces → Create. Then in the terminal:
   ```bash
   npm install && npm run dev
   ```
   Open the forwarded URL and click **Allow** for the camera.
4. **Change one thing** (piece color, fall speed, a gesture threshold) and push:
   ```bash
   git add -A && git commit -m "my first tetris change" && git push
   ```
5. **(Optional) Ship it**: vercel.com → New Project → Import your fork → Deploy → you get `your-name-tetris.vercel.app`.

### Hacking the gesture thresholds (mediapipe-hands angle)

Open `src/hand/tracker.js`. A gesture is just a threshold on coordinates — e.g. a raised index finger is `(indexBase.y - indexTip.y) > RAISE_THRESHOLD`, and a tilt is `wrist.x` drifting past `0.5 ± TILT_THRESHOLD`. Change a number, rebuild, and you've invented your own control. See https://ai-build-lab.pages.dev/works/mediapipe-hands

## License

MIT (see repo root) for this pointer. The Tetris apps have their own licenses — check each repo. Contributions welcome via PR.
