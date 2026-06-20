# Tech-stack cheat-sheet

A tech stack is just the set of tools you build with. Know what each is good at — and not for — so you can ask the AI for the right tool. Verbatim from the Skill page.

> Live: https://ai-build-lab.pages.dev/skills/tech-stack-cheat-sheet

| Tool | What it's FOR | What it's NOT for |
|---|---|---|
| **HTML** | The page skeleton — text, buttons, images | Computing or storing anything |
| **CSS** | The look — colors, spacing, layout, animation | Computing or storing anything |
| **JavaScript** | Behavior — clicks, timers, fetch, logic | Heavy data or AI math |
| **Python** | Data, math, AI/ML, scripts | Running inside a normal web page (needs Colab or a server) |
| **Node.js** | Running JS outside the browser; powers Next.js | A one-page app (overkill) |
| **MediaPipe** | Real-time hand/face/pose vision | A one-page app (overkill) |

## The rule

Don't reach for the big tool too early. **Start with one HTML file**, and move to Next.js only when you outgrow it (many pages, saving data, a backend).

## Hearing prompt: which stack should I use?

```
I want to build: [describe your idea in one sentence]. I'm a beginner who codes with AI help. First, ask me 3 to 5 short questions to understand what I really need. Then recommend the SIMPLEST tech stack that works — prefer a single HTML file if that is enough. Only if I truly need more (many pages, saving data, a backend), suggest something like Next.js, explain WHY in one line, and list the folders I would have. Keep it beginner-friendly and avoid jargon.
```

## Start a Next.js app (only when one HTML file isn't enough)

```bash
# create a new Next.js app (accept the defaults it asks for)
npx create-next-app@latest my-app
cd my-app
npm run dev
# then open http://localhost:3000 in your browser
```
