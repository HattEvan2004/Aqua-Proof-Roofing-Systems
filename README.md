# Aqua-Proof Roofing Systems

Marketing website for **Aqua-Proof Roofing Systems** — commercial and residential
roofing with over 30 years of experience.

## About the site

A fast, fully responsive static website (plain HTML, CSS, and a small amount of
vanilla JavaScript — no build step required). The design uses the Aqua-Proof
logo colours: bright roofing green, deep teal, near-black, white, and light grey.

### Sections
- Header with logo, navigation, and a click-to-call button
- Hero — *Commercial & Residential Roofing Built to Last*
- Trust row (experience, commercial & residential, flat & sloped, reliable systems)
- Services — Flat Roofing and Sloped Roofing cards
- About Aqua-Proof
- Project photo gallery (real job-site photos)
- Call-to-action band
- Contact section with the phone number
- Footer

All photos are the real project images supplied in this repository
(see `assets/img/`, sourced from the original `compressed (3)` folder).

Phone: **902.441.4011** (`tel:9024414011`) — clickable throughout the site,
including a sticky call bar on mobile.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html          # page markup
styles.css          # brand system + responsive layout
script.js           # mobile menu + footer year
assets/img/         # roofing photos and logo
```
