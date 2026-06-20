# Magic phrases — one-liners with "when to use"

Short phrases, proven in research, that change an answer's quality when you add them after a question. They stack. Verbatim from the Skills pages.

> Live: https://ai-build-lab.pages.dev/skills/chain-of-thought (and tree-of-thoughts, five-why, role-prompting, anti-hallucination)

| Phrase | When to use |
|---|---|
| `ステップバイステップで考えて` | **Chain of Thought** — complex problems, especially math/reasoning. The steps become visible so you can check the answer. |
| `複数のアプローチを比較して` | **Tree of Thoughts** — when the first answer isn't necessarily best. The AI lays out 2–4 options; you pick. |
| `なぜ？を3回繰り返して` | **5-Why** — to reach a root cause instead of patching the surface symptom. |
| `あなたは○○の専門家です` | **Role prompting** — set it FIRST. Specific roles ("a dietitian") beat vague ones ("an expert"). |
| `自信がない部分は「わからない」と言って` | **Anti-hallucination** — stops the AI writing guesses as facts. Still verify key numbers/names yourself. |
| `根拠は？` / `Using only my sources, …` | Demand evidence / keep answers grounded (e.g. NotebookLM). |

## They stack

Combine phrases to dig deeper:

```
ステップバイステップで考えて、なぜ？を3回繰り返して
```

## Notes

- **Chain of Thought**: a proven technique — one short phrase changes the answer's quality, and the visible steps let you check the AI's mistakes.
- **Tree of Thoughts**: comparing options beats a single-path answer. You make the final choice; the AI's job is to surface options.
- **5-Why**: fix the root cause, not the symptom, and the problem stops recurring.
- **Role prompting**: the role is the first of the four prompt levers (role / audience / task / constraint) and its effect is the easiest to see.
- **Anti-hallucination**: AIs lie confidently even when they don't know — this phrase is your safety net, but it isn't perfect.
