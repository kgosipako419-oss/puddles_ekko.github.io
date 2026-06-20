# KGOSI — Project Portfolio

A live gateway to all my GitHub projects.

**Live site:** https://kgosipako419-oss.github.io/puddles_ekko.github.io/

The page pulls my repositories straight from the GitHub API, so it **updates
itself automatically** whenever I create a new repo or edit a description — no
need to touch this code again.

## How to make it look its best

The portfolio shows whatever GitHub knows about each repo. To get the most out
of it, on each repository's GitHub page:

1. **Add a description** (the "About" box, top-right) — this becomes the card text.
2. **Add topics/tags** — they show up as little pills on each card.
3. **Set the "Website" field** to a live demo URL — that adds a **Live Demo** button.

## Customising

All the personal settings live at the top of [`app.js`](app.js) in the `CONFIG`
object:

- `username` — your GitHub username.
- `email` — used by the "Email Me" button.
- `tagline` — the subtitle under your name.
- `hide` — repo names to leave out of the list.
- `hideForks` — set to `false` if you want forked repos shown too.

## Running locally

Because it calls the GitHub API, just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

It's already a GitHub Pages site. Push to `main`, then in the repo go to
**Settings → Pages** and set the source to the `main` branch (root). The site
goes live at the URL above within a minute or two.
