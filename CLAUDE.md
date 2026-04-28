# Ember & Shore Therapy Website

## What this is
Static single-page website for **Ember & Shore Therapy, PLLC** — a licensed marriage & family therapy practice in Minnesota run by **Lea Semler**. No build system, no framework. Just three files.

## Files
- `index.html` — entire site, one page
- `styles.css` — all styles
- `script.js` — mobile nav toggle, FAQ accordion, contact form, scroll effects
- `EmberShoreLogo.png`, `favicon.png`, `hero-bg.jpg`, `IMG_*.jpg` — images

## Page sections (in order)
1. **Header/Nav** — fixed, transparent then frosted-glass on scroll
2. **Hero** — headline, CTA button, campfire photo
3. **Brand Meaning** — Ember & Shore explained
4. **About** — practice overview
5. **Who We Help** — target clients
6. **Services** — individual, couples, family therapy
7. **Fees & Insurance** — rates and accepted insurance
8. **FAQ** — accordion
9. **Contact** — contact form
10. **Meet Lea** — therapist bio

## Scheduling link
All "Schedule Now" / "Contact Me" CTAs link to Headway:
`https://care.headway.co/providers/lea-semler?utm_source=pem&utm_medium=direct_link&utm_campaign=198253`

## Design tokens (CSS variables in styles.css)
- `--color-ember` — burnt orange (primary brand color)
- `--color-shore` — muted teal (secondary brand color)
- `--color-cream` / `--color-sand` — warm off-white backgrounds
- Fonts: **Playfair Display** (headings/display), **DM Sans** (body)

## Mobile nav
Hamburger menu kicks in via media query. The nav becomes a full-screen overlay. `white-space: nowrap` on nav links prevents items from wrapping at intermediate window widths.

## Deployment
Hosted on GitHub. Push to `main` branch to deploy.
Repo: `github.com/jscrossing-del/Ember-and-Shore-Website`

## Owner
Jeremiah Semler — building/maintaining this site for Lea Semler (therapist/family member).
