# Branding

## The mark

<p>
  <img src="icon.png" alt="Interlinear icon" width="96" />
</p>

Three stacked rules of different lengths, inside a rounded square. It reads
as an **interlinear gloss** — a source line, a gloss line, and a translation
line, aligned on top of each other — which is exactly what the linguistics
term (and this project's name) refers to. The middle line is picked out in
the accent color, because in the product itself, the middle line is the one
that changes when you flip the locale tab: it's the "active" line.

That's the whole brief. No abstract swoosh, no unrelated geometric flourish —
the mark **is** a literal, functional diagram of what the product does. If
you can't explain your mark in one sentence that also explains your product,
it's decoration, not a mark.

## Files in this directory

| File | Use |
|---|---|
| `icon.svg` / `icon.png` | App icon, npm avatar, GitHub org avatar, favicon source |
| `wordmark.svg` / `wordmark.png` | README header, docs site header |
| `social-preview.svg` / `social-preview.png` | GitHub repo social card (Settings → General → Social preview) |

Colors and exact values live as CSS custom properties in
[`../../src/styles/global.css`](../../src/styles/global.css) — treat that
file as the source of truth if the two ever drift.

## How to design a logo for an OSS project (without hiring a designer)

This is the process that produced the mark above, generalized. It works for
almost any small dev-tool / library / site.

1. **Write the one-sentence concept before opening any design tool.**
   Not a mood board, not a color — a sentence like *"the mark should show
   [core mechanic] as a diagram."* For a diffing tool that might be two
   offset shapes; for a queue it might be a line of dots collapsing into one.
   If you can't write that sentence, you're not ready to design yet — you'll
   just end up picking a generic shape (an abstract triangle, a rocket, a
   circuit-board hexagon) that says nothing.

2. **Constrain yourself to shapes a `<svg>` can draw with primitives.**
   Rects, circles, paths, done. This isn't an aesthetic rule, it's a
   practical one: an OSS logo needs to render crisply at 16px (favicon) and
   512px (social card) with the *same file*, needs to survive being redrawn
   by a random contributor's PR, and often needs to become a loading spinner
   or an empty-state illustration later. Complex gradients, photographic
   elements, or hand-drawn line work don't survive that treatment.

3. **Pick 2 colors, not 5.** One from your existing UI (so the mark and the
   product don't feel like different brands), one accent for the "this is
   the part that matters" moment inside the concept. Everything else in the
   mark should be the neutral ink/paper tones you already use for text and
   background.

4. **Build it directly as code, not as a raster export from a design tool.**
   Write the SVG (or build it in Figma and copy the SVG export back into your
   repo). This keeps it diffable, keeps file size near-zero, and means your
   favicon, README header, and app icon are all provably *the same* mark
   instead of three slightly-different exports that drift over time.

5. **Test it small and monochrome before anything else.** Shrink it to 16×16
   and squint. Print the outline in solid black. If it turns into a smudge,
   simplify further — most first attempts have one shape too many.

6. **Typography for the wordmark: pick one geometric/technical sans
   (Space Grotesk, JetBrains Mono, IBM Plex, Söhne) and stop looking.** The
   wordmark's job is to be legible at README-header size and to not fight
   the mark for attention — it is not the place to express personality a
   second time.

### Tools that are actually enough

- **Figma** (free tier) if you want a canvas and rulers — export straight to
  SVG, then hand-clean the output (Figma's SVG export is verbose).
  Alternatively, **Excalidraw** is a fast way to block out shapes before
  committing to a design tool.
- **A text editor**, if the concept is simple enough (like this one — the
  icon above is ~10 lines of hand-written SVG, no design tool involved).
- **`rsvg-convert` / ImageMagick** for batch-exporting the PNG sizes you need
  (favicon, social card, npm) from one SVG source, so you never hand-export
  the same mark twice and get two different results.

The failure mode to avoid is reaching for an AI image generator for this:
it produces a raster image that can't be a crisp favicon, can't be
recolored to match a theme, and — more importantly — skips the one step
that actually matters, which is deciding what the mark is *supposed to
mean*. A logo generator will happily give you a nice-looking abstract
hexagon; it won't tell you why your project needed a hexagon.
