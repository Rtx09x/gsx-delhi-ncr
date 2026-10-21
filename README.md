# GSX Delhi Chapter — Delhi NCR

A responsive, open-source **development prototype**. All programme entries are visibly labeled examples. This is not an approved chapter programme or registration service.

## Run locally

Requires Node.js 22+ and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Vite + semantic HTML, modular vanilla JavaScript, and CSS. No application framework, analytics, forms, cookies, external fonts, or runtime third-party scripts. `base: './'` supports GitHub Pages project subpaths. The production output is `dist/`.

## Update content

- `index.html`: chapter introduction, verified public links, lead slot, metadata.
- `src/programme.js`: example programme content.
- `src/style.css`: responsive layout, design tokens, reduced-motion behavior.
- `src/main.js`: sample detail dialogs and mobile navigation.

Before approving a public chapter launch, replace provisional mission copy and sample events with reviewed information. Confirm team details and all official links. Never add private onboarding correspondence, certificates, community invitation links, credentials, or personal contact information.

## Pages deployment

`.github/workflows/pages.yml` builds on pushes to `main` and publishes through GitHub Actions. In repository Settings → Pages, choose GitHub Actions as the source. The workflow uses only the repository-provided token with contents read, pages write, and OIDC permissions. No paid hosting or custom domain is required.

## Design notes

The design borrows hierarchy and restraint, not brand assets or exact layouts:

- [Apple](https://www.apple.com/): concise headline, generous space, direct actions.
- [Apple motion guidance](https://developer.apple.com/design/human-interface-guidelines/motion): brief, optional, nonblocking feedback.
- [Linear design refresh](https://linear.app/now/behind-the-latest-design-refresh): quiet navigation and warmer neutrals.
- [OpenAI](https://openai.com/): clear editorial hierarchy and human task framing.
- [Reddit design discussion](https://www.reddit.com/r/web_design/comments/1d91whv/what_is_your_opinion_on_the_aesthetic_of_web_page/): qualitative opinions on excessive scroll reveals, not empirical conversion evidence.

Normal scrolling, visible content on first render, system fonts, reserved artwork dimensions, keyboard focus, native modal dialogs, Escape dismissal, and reduced-motion support are intentional.

## Verified public destinations

- [Chapter LinkedIn](https://www.linkedin.com/company/gsx-delhi-chapter/)
- [GirlScript Foundation / GS Labs](https://labs.girlscript.org/)
- [Rudra LinkedIn](https://www.linkedin.com/in/rtx09x/)
- [Rudra GitHub](https://github.com/Rtx09x)

## License

Original code: MIT. Official branding is excluded: see [BRANDING.md](BRANDING.md).
