# Notes Sathi Landing Page

A GitHub Pages-ready landing page for [Notes Sathi](https://github.com/VinaySoni-IN/Notes-Sathi).

## Deploy

Upload these files to a repository root and enable **Settings → Pages → Deploy from a branch → default branch → root**.

The project uses relative paths and contains only the final website assets; it does not include the cloned source repository, its README, or its original screenshots folder.

## ZIP bootstrap workflow

The included `.github/workflows/extract-and-deploy.yml` extracts the first ZIP placed in the repository root, copies the project files into the root, deletes the ZIP and temporary folder, removes itself, and deploys GitHub Pages. Enable Actions write permissions before using it.

## Included

- `index.html` — main landing page
- `assets/` — refreshed screenshots and icons from the latest clone
- `Profile-images/` — 512×512 profile images
- `legal.html` and `legal/` — all legal documents as HTML and original TXT
- `manifest.json` and `sw.js` — installable/offline shell
