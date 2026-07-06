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
- **Request a Free Quote** form (Formspree-ready — see below)
- Contact section with the phone number
- Footer

All photos are the real project images supplied in this repository
(see `assets/img/`, sourced from the original `compressed (3)` folder).

Phone: **902.441.4011** (`tel:9024414011`) — clickable throughout the site,
including a sticky call bar on mobile.

## Quote form (Formspree)

The **Request a Free Quote** section (`#quote`) is wired for
[Formspree](https://formspree.io) so submissions land in your inbox and
dashboard — no server required.

**To turn it on:**

1. Create a free account at <https://formspree.io> and add a new form.
2. Copy the form's endpoint — it looks like `https://formspree.io/f/xxxxxxxx`.
3. Open `script.js` and paste it into the one setting near the top of the
   quote-form section:

   ```js
   var FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
   ```

That's it — the form then submits via Formspree with inline success and error
messages. Until an endpoint is set, the form still validates and, on submit,
asks the visitor to call **902.441.4011** instead of failing silently. It
includes a hidden honeypot field for basic spam protection.

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
script.js           # mobile menu, footer year, quote-form handling
assets/img/         # roofing photos and logo
```
