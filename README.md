# 1st Blackheath Scout Group

The Group's website, <https://1stblackheathscoutgroup.au>. It's a static site
built with [Eleventy](https://www.11ty.dev) and [Tailwind](https://tailwindcss.com),
hosted on Netlify.

Most routine updates (leaders, meeting times, fees, hall photos) are data and
prose changes only. You shouldn't need to touch a template to keep the site
current. See [Where to change things](#where-to-change-things).

## Running it locally

You'll need [Node](https://nodejs.org) 22 (the version is pinned in
`.node-version`).

```sh
npm install
npm run dev
```

That serves the site at <http://localhost:8080> and rebuilds as you save.

To produce the production build in `dist/` (gitignored, regenerated each build):

```sh
npm run build
```

## Where to change things

| To change | Edit |
| --- | --- |
| Leaders, meeting nights and times, section ages | `src/_data/sections.yaml` |
| Contact cards on the homepage | `src/_data/contacts.yaml` |
| Hall and postal address, media contact | `src/_data/contacts_extras.yaml` |
| Top navigation menu | `src/_data/menu_items.yaml` |
| The four registration options | `src/_data/registration.yaml` |
| Hall photos, captions, booking calendar link | `src/_data/hallhire.yaml` |
| Hall hire fees | `src/_data/hallhire_rates.csv` |
| Footer "part of" organisation links | `src/_data/organisation.yaml` |
| Canonical domain, external links | `src/_data/urls.yaml` |
| Page wording | `src/_content/**/*.md` |
| ScoutHub registration links | `netlify.toml` |

Two things to know before you edit:

- **The ScoutHub membership IDs in `netlify.toml` rotate each registration
  year.** When registration reopens, the 16 redirect URLs need their
  `membership=` numbers updated from ScoutHub, or the Register buttons will
  send people to last year's forms.
- **Membership fees appear in three files** — `src/_content/index/join-footer.md`,
  `src/_content/register/new-youth.md` and `src/_content/register/renew-youth.md`.
  Change all three together or the site will contradict itself.

## Layout

```
src/_content/     Page prose, as Markdown partials pulled into templates
src/_data/        Structured content — YAML and CSV, available as globals
src/_includes/    Layouts and the Nunjucks component macros in component/ui.njk
src/*.njk         One file per page
assets/img/       Images, copied through to the build as-is
assets/fonts/     Self-hosted Nunito Sans woff2 files
assets/css/       Tailwind entry point and the theme tokens
```

## Deployment

Pushing to `main` triggers a Netlify build and deploy. The build command and
publish directory are declared in `netlify.toml`, and the Node version in
`.node-version` — Netlify reads both, so the whole deploy configuration is in
this repository. Settings in `netlify.toml` take precedence over anything set
in the Netlify dashboard.

The two inquiry forms use Netlify Forms. Submissions appear in the Netlify
dashboard and are emailed to whoever is set up to receive notifications there.

## Third-party services

| Service | Used for | Where |
| --- | --- | --- |
| Netlify | Hosting, redirects, form handling | `netlify.toml` |
| Umami | Visitor analytics (skipped in development) | `src/_includes/base.njk` |
| Outlook | Hall booking calendar, embedded | `src/_data/hallhire.yaml` |
| Volunteer.com.au | Volunteer listings widget | `src/volunteering.njk` |

### Alpine.js

Alpine drives the mobile navigation menu. It is vendored at
`assets/js/alpine.min.js` (version **3.17.2**).

To update it, overwrite the file and note the new version here.
