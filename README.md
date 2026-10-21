# Vijay Kumar Singh — Portfolio

Premium, responsive portfolio built with React 19 and Vite. The site is configured for GitHub Pages at:

`https://codexai06.github.io/portfolio/`

## Highlights

- Dark, responsive editorial layout with reduced-motion support.
- Centralized portfolio content in `src/data/profile.js`.
- Bundled resume download from `src/assets/resume.pdf`.
- Accessible keyboard-friendly navigation, labels, focus states, and semantic sections.
- Verified project links:
  - [ReliefLink](https://github.com/codeXAI06/ReliefLink)
  - [Fair Maps](https://github.com/codeXAI06/Fair-Maps)
  - [AQI Prediction Web App](https://github.com/codeXAI06/aqi)

No live demo URLs were added because the project repositories do not currently expose a verified deployment URL. Update `src/data/profile.js` if a deployment is published.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The app is served under `/portfolio/` to match the GitHub Pages base path.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Confirm the `homepage` value in `package.json` matches the repository URL.
2. Build and deploy:

   ```bash
   npm run deploy
   ```

3. In GitHub, open **Settings → Pages**, select the `gh-pages` branch and `/ (root)`.
4. Open `https://codexai06.github.io/portfolio/` after the Pages workflow finishes.

The repository includes `.nojekyll` and Vite is configured with `base: '/portfolio/'`, so static asset paths work on the project site.
