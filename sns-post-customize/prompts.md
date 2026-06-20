# SNS post — build prompt + iteration prompts

The prompts from the Customize an SNS Post Work, **verbatim** from the site. `index.html` in this folder is the kind of base template the build prompt produces. Tune it in Gemini Canvas with one change per message, then screenshot the preview to post for real.

> Live: https://ai-build-lab.pages.dev/works/customize-an-sns-post

---

## Base / build prompt (fill in topic and adjectives)

```
Build a one-screen SNS post template that shows off [topic]. Vibe: [adjective × 2]. Include a bold title, a short caption (under 60 chars), and one accent emoji slot. Output as a single HTML file.
```

---

## Iteration prompt (one change per message)

```
Make the title bigger and the overall vibe a little more relaxed. Change only that and keep everything else the same.
```

---

## More iteration examples (one change each)

You can't ask for a vibe you can't name — put the vibe into words, then send **one** change at a time:

```
Make the background a calmer deep-navy gradient. Change only that.
```

```
Make it feel more retro: a chunky serif title and a warm cream background. Nothing else.
```

```
Tighten the caption to under 40 characters and move the emoji to the top-left. Keep everything else.
```

> Tip: `Make it nice` says nothing. Words like *relaxed, serious, retro, futuristic* give the AI something to aim at.
