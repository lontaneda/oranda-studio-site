# Oranda Studio — static responsive site

Single-page responsive HTML/CSS recreation based on the supplied Oranda Studio PDF/SVG design.

## Files

- `index.html` — semantic page structure
- `styles.css` — desktop, tablet and mobile responsive layout
- `script.js` — contact-form placeholder behavior
- `assets/` — extracted and optimized design assets

## Local preview

From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Contact form

The source design does not specify an email address or form backend, so the visual form is implemented but submission is intentionally not sent anywhere yet. Connect your preferred endpoint before publishing the contact form for real use.

## Deployment

This is a pure static site and can be published directly with GitHub Pages from the repository root. No build step is required.
