# Lucynda Dark Portfolio Site

## Files included
- `_quarto.yml`
- `index.qmd`
- `digital-marketing.qmd`
- `marketing-analytics.qmd`
- `presentation.qmd`
- `website-analytics.qmd`
- `resume.qmd`
- `styles.scss`
- `styles.css`

## Where to place these files
Upload or copy all files into the root of your GitHub repo:

`https://github.com/Cynyng/portfolio`

The site expects your existing `headshot.png` to stay in the repo root.

## Render command
From the repo root, run:

```bash
quarto render
```

This creates the website in the `docs/` folder.

## GitHub Pages setup
In GitHub:
1. Go to Settings
2. Click Pages
3. Choose source: Deploy from branch
4. Branch: main
5. Folder: /docs
6. Save

Your site should publish at:

`https://cynyng.github.io/portfolio/`

## Notes
- The capstone is marked as private/NDA-sensitive. Do not publish restricted screenshots, names, data, or client-specific details.
- Add your resume PDF to the repo root as `Lucynda_Young_Resume.pdf` if you want the resume download button to work.
- Render `marketing_mix_modeling_revealjs_presentation.qmd` to create the HTML presentation linked on the presentation page.
