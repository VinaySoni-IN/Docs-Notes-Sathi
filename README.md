# Notes Sathi Landing Page

A responsive GitHub Pages-ready landing page for [Notes Sathi](https://github.com/VinaySoni-IN/Notes-Sathi).

## Deploy directly

Upload the contents of this folder to the root of a GitHub repository, then enable **Settings → Pages → Deploy from a branch** and choose the default branch and root folder.

## ZIP extractor and deployer

The included `.github/workflows/extract-and-deploy.yml` is a one-time bootstrap workflow. If a ZIP file is placed in the repository root, it:

1. Extracts the first root ZIP.
2. Copies its project files to the repository root.
3. Deletes the extracted temporary folder.
4. Deletes the ZIP archive.
5. Deletes itself after the first successful run.
6. Deploys the resulting root to GitHub Pages.

For this workflow to commit and remove itself, the repository must allow GitHub Actions to write repository contents under **Settings → Actions → General → Workflow permissions**.

> Keep a copy of the workflow locally before running it. It intentionally self-deletes after bootstrap.

## Files

- `index.html` — main landing page
- `legal.html` — legal hub
- `legal/` — every legal document as HTML and original TXT
- `assets/` — Notes Sathi app screenshots and icon assets
- `Profile-images/` — square 512×512 profile images
- `manifest.json` — PWA metadata
- `sw.js` — offline shell cache
- `.github/workflows/extract-and-deploy.yml` — one-time ZIP extractor and Pages deployer
