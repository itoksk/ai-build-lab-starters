# Prompt techniques (magic phrases)

Short phrases proven to work. Add them after any question to change the answer's quality. They stack, too. Verbatim from the `/prompts` page.

> Live: https://ai-build-lab.pages.dev/prompts

| Phrase | When to use |
|---|---|
| `ステップバイステップで考えて` | Chain of Thought — break complex problems into steps |
| `水平思考で考えて` | Lateral thinking — creative, unconventional angles |
| `複数のアプローチを比較して` | Tree of Thoughts — compare solutions in parallel |
| `答える前に前提を確認して` | Surface hidden assumptions |
| `なぜ？を3回繰り返して` | 5-Why — Toyota-style root-cause analysis |
| `もっと具体的に` | Turn abstract answers into concrete examples |
| `例えば？` | Explain with a familiar example |
| `それで？` | So what? — continue and draw out implications |
| `逆に言うと？` | Check from the opposite angle |
| `○○だったら？` | Switch roles or standpoints |
| `10年後は？` | Shift the time axis |
| `初心者に説明するなら？` | Rephrase simply |
| `本当に？` | Prompt fact-checking and doubt |
| `反対意見は？` | Many-sided analysis |
| `根拠は？` | Demand evidence and logical backing |
| `一言で言うと？` | Extract the essence |
| `3つに絞ると？` | Force prioritization |
| `次は何をすればいい？` | Turn the conclusion into action |
| `あなたは○○の専門家です` | Role prompting — set it first |
| `自信がない部分は「わからない」と言って` | Anti-hallucination |
| `出力形式：表形式で` | Specify table / bullets / JSON |
| `○文字以内で` | Length constraint, promotes brevity |

## Combine techniques (they stack)

```
ステップバイステップで考えて、なぜ？を3回繰り返して
```
