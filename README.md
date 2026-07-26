# Vorch-IR

**Long-Form Multimodal Identity Replacement Video Generation via a Unified Framework**

This repository hosts the project page for Vorch-IR, a unified framework for video
identity replacement. It supports single- and dual-person replacement with optional
background replacement, and scales to minute-long videos — all within a single model
built on the LTX2 backbone.

## Project page

The page is a single self-contained `index.html`. All demo videos and reference
images live under [`assets/`](assets/) and are loaded via relative paths, so the
page works both locally and on GitHub Pages.

- **Local:** serve the folder and open it in a browser:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```
- **GitHub Pages:** enable Pages for this repo (Settings → Pages → deploy from a
  branch), and the page will be served at the repository's Pages URL.

## Layout

```
index.html        # project page (self-contained, relative asset paths)
assets/
  multi/          # multi-subject replacement cases (videos, frames, references)
  long/           # minute-long video cases
```

## Usage note

Demo clips are shown for non-commercial academic presentation only; copyrights
remain with their original owners. If you have any concerns about a specific clip,
please reach out and it will be removed.
