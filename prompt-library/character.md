# Consistent-character prompts

To keep one character across scenes, fix every spec, then change only the action. Negatives stop a second character appearing. Verbatim from the `/prompts` page.

> Live: https://ai-build-lab.pages.dev/prompts

## Consistent chibi character

```
ONLY ONE chibi character: a single chibi-style [character type], [all fixed specs spelled out], [the concrete action], [sitting or standing], [shot], single subject focus, [setting] with [lighting], blurred background, clean flat-colour illustration, 2.5-3 head-tall chibi proportions.
Negative prompt: two people, crowd, group, duplicate character, extra limbs, text, watermark.
```

## Lock your character's specs

Include all of this every time to keep the same character:

```
My character: a cat-kid with pink twin-tails, black cat ears and a fluffy tail, big round green eyes, a yellow hoodie and white sneakers.
```

## Same character, new scene

Keep the specs, change only the action:

```
Now show my character walking through a sunny town, eating an ice cream.
```

## If two characters appear

```
ONLY ONE character, single subject focus
```

(Also add the negative: `two people, crowd, group`.)
