# sns-post-customize — tune an SNS post into your own vibe

> Live: https://ai-build-lab.pages.dev/works/customize-an-sns-post

A one-screen SNS post template (`index.html`) — bold title, a short caption (under 60 chars), and one accent emoji slot — plus the build and iteration prompts in `prompts.md`. No programming: open it, then refine it with an AI **one change per message** until it feels like you, and screenshot the preview to post.

## Use just this folder

```bash
npx degit itoksk/ai-build-lab-starters/sns-post-customize my-sns-post
# or sparse-checkout:
git clone --filter=blob:none --no-checkout https://github.com/itoksk/ai-build-lab-starters.git
cd ai-build-lab-starters
git sparse-checkout init --cone && git sparse-checkout set sns-post-customize && git checkout
```

Open `index.html` to see the base post. Then use `prompts.md` to make it yours.

## License

MIT (see repo root). Contributions welcome via PR.
