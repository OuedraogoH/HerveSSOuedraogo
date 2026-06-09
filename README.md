# Hervé Ouédraogo — Personal Website

A complete, ready-to-publish personal website. It is a **static site with no
build step**: it works opened directly in a browser and on any static host.

```
index.html              Homepage (bilingual EN/FR) — hero, about, Moments gallery,
                        focus areas, career journey, impact, insights, work–life
                        balance, publications, contact
cv.html                 Full curriculum vitae + "Download PDF" button
css/styles.css          All styling
js/main.js              Language toggle, navigation, animations, EN/FR dictionary
assets/img/             Portrait, gallery photos, work–life photos, favicon, share image
assets/cv/              CV PDF (generated — replace with your own if preferred)
robots.txt · sitemap.xml · netlify.toml · .gitignore
```

Everything is in place and the site is fully functional as delivered. The four
placeholders below are optional polish you can set before or after going live.

---

## 1. Replace these placeholders (search & replace in a text editor)

| Placeholder | Replace with | Files |
|---|---|---|
| `[[PUBLIC_EMAIL]]` | the email to show publicly | `index.html` |
| `[[LINKEDIN_URL]]` | your LinkedIn profile URL | `index.html` |
| `[[FORMSPREE_ENDPOINT]]` | a Formspree form URL (see §4) — or delete the `<form>` block to keep email-only | `index.html` |
| `www.herveouedraogo.com` | your real domain | `index.html`, `cv.html`, `robots.txt`, `sitemap.xml` |

> Until you set them, the email/LinkedIn links and the form simply won't submit —
> nothing breaks visually.

---

## 2. Deploy with GitHub + Netlify (recommended)

**a. Put the site on GitHub**
1. Create a free account at github.com and a new **empty** repository, e.g.
   `herve-ouedraogo-website` (Public or Private both work).
2. Upload the files: on the repo page choose **Add file → Upload files**, drag in
   the entire contents of this folder (the files, not the parent folder), and
   **Commit changes**.
   *Command-line alternative:*
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/herve-ouedraogo-website.git
   git push -u origin main
   ```

**b. Connect Netlify**
1. Sign in at app.netlify.com (you can log in **with GitHub**).
2. **Add new site → Import an existing project → GitHub**, authorize, and pick
   your repository.
3. Build settings: leave **Build command empty** and **Publish directory** as `.`
   (a dot). `netlify.toml` already sets this. Click **Deploy**.
4. Your site goes live at a `*.netlify.app` address within a minute. Every time
   you push to GitHub, Netlify redeploys automatically.

**c. Custom domain (optional)**
1. In Netlify: **Domain settings → Add a domain** and enter your domain.
2. Either point your registrar's nameservers to Netlify, or add the DNS records
   Netlify shows. HTTPS is provisioned automatically (free Let's Encrypt).
3. Update `www.herveouedraogo.com` in the four files above to match.

---

## 3. Edit the photos later

All images live in `assets/img/`. To swap one, replace the file keeping the same
name, or change the `src` in `index.html`. Two extra, already-optimized options
are included if you want them in the work–life section:

- `life-farm-animals.jpg` — your daughter feeding farm animals (ties to the
  agrifood theme; her face is visible — your choice for a public page).
- `life-japan-ramen.jpg` — a light travel moment (TICAD9, Yokohama).

Add either by copying one of the `<figure>` blocks inside `.life-grid`.

---

## 4. (Optional) Make the contact form work

The form needs no server. At formspree.io, create a free form, copy the endpoint
URL (e.g. `https://formspree.io/f/abcdwxyz`) and paste it in place of
`[[FORMSPREE_ENDPOINT]]`. Submissions then arrive in your inbox.

---

## Notes

- **Bilingual:** the homepage is fully English/French (toggle in the header and
  footer); the choice is remembered between visits. The CV page is in English.
- **Dark mode:** a sun/moon toggle in the header switches themes; it follows the
  visitor's system preference by default and remembers the choice.
- **Photo lightbox:** click (or press Enter on) any photo in the Moments gallery
  to view it large; navigate with the on-screen arrows or the ← → keys, close
  with Esc or the × button.
- **Privacy:** only a professional email and LinkedIn are shown — no phone number.
  Photos of your daughter use back-views by default.
- **Compliance:** a personal-capacity disclaimer is in the footer and no official
  FAO/UN branding is used, so the site reads clearly as personal.
- **Accessibility & SEO:** semantic structure, skip link, focus states, reduced-
  motion support, descriptive alt text, meta/Open Graph/Twitter tags, JSON-LD
  Person schema, sitemap and robots are all included.
