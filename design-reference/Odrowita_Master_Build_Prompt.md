# ODROWITA — Master Build Prompt (v3 — Final Design Reconstruction)
**Use this document as the direct prompt for Claude Code, together with the 5 attached page PDFs (`home.pdf`, `about.pdf`, `service.pdf`, `whypoland.pdf`, `contactus.pdf`).**

**This is a reconstruction task, not a fresh design task.** The PDFs are the final, client-approved designs. Your job is to rebuild them pixel-faithfully in plain HTML/CSS/JS — exact copy, exact section order, exact numbers, exact layout — not to reinterpret or "improve" them. Where this document and a PDF ever conflict, **the PDF wins.**

**Logo note:** The PDFs show a placeholder triangle/mountain icon next to "ODROWITA." The real logo is provided separately as `design-reference/logo/logo.jpeg` (and should be re-exported as SVG if possible) — use the real logo file in the build, not the placeholder mark shown in the PDF screenshots.

---

## 1. GLOBAL DESIGN SYSTEM

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0B1D3A` | Headlines, dark sections, primary text on light bg |
| `--navy-deep` | `#081527` | Darkest navy — full-bleed dark section base |
| `--gold` | `#C8A76A` | Accent only — eyebrows, numerals, dividers, one highlighted word per headline, primary button fill |
| `--white` | `#FFFFFF` | Base background |
| `--offwhite` | `#F7F5F0` | Card fills (value cards, CTA bands, form panel) |
| `--charcoal` | `#2A2F36` | Body text |
| `--muted` | `#767B85` | Secondary/supporting text |
| `--line` | `#EDEBE5` | Hairline dividers |

No gradients except the functional navy scrim over hero photos (for text legibility). No glossy/glassmorphism effects.

### Typography
Poppins throughout (Google Fonts). SemiBold/Bold for headings, Regular/Medium for body.
- H1 (page hero headline): ~52–58px desktop, tight line-height (~1.1), letter-spacing slightly tight
- H2 (section headline): ~34–38px desktop
- Eyebrow label: ~12px, uppercase, letter-spacing ~0.15em, weight 600, color `--gold`
- Body: ~16–17px, line-height ~1.7, color `--muted` for supporting copy
- Numerals (stats, service list numbers): gold, distinct from body weight — read as design elements

### Recurring Components (used identically across pages — build once, reuse)

**Nav bar** — logo left (icon + "ODROWITA" / "DORADZTWO BIZNESOWE" two-line lockup), center-right links (Home / About / Services / Why Poland), "Contact Us" solid navy button far right. Active page link has a thin gold underline beneath it. On light-background pages nav sits directly on white; on image-hero pages (Home, Why Poland) nav overlays transparently on the photo.

**CTA band** — offwhite rounded-corner container, appears near the bottom of every page before the footer. Left: thin gold vertical accent line + H2 headline (2 lines). Right: one line of supporting copy + a solid navy "Contact Us" button. Copy and headline change per page (see page specs below).

**Footer** — full-bleed navy. Main row: logo + "Strategy. Trust. Growth." tagline (gold underline beneath) on the left; "SITEMAP" column (Home/About/Services/Why Poland/Contact) center; "CONTACT" column (Szczecin, Poland / info@yourdomain.com / +48 XXX XXX XXX) right. Bottom bar below a hairline divider: legal name + city on the left, copyright + tagline on the right, both small and muted-white.

**Contact-page footer variant:** adds one extra centered row *above* the standard footer — "Odrowita Doradztwo Biznesowe Sp. z o.o." (bold, larger) and "Professional Business Consultancy · Szczecin, Poland" beneath it, centered, on its own navy band, before the standard 3-column footer begins. This is the one page where the full legal name gets primary visual emphasis, per brand usage rules.

**Stat block pattern** — small line-icon above, large gold/white number, small uppercase muted label beneath. Used in the Home stat-strip (3 items, horizontal, inside the hero's bottom dark bar), the Home Why-Poland teaser (3 items), and the Why Poland page's main stat section (4 items, on full dark navy background).

**Numbered list pattern** (Services list, Core Values list) — gold two-digit numeral left, bold title, muted description right, thin hairline divider between rows. On the Services page specifically, there's a slightly heavier **gold divider line** between item 03 and item 04, splitting the six into two visual groups of three — replicate this exact detail.

---

## 2. IMAGERY

### Confirmed images (verified real, HD, free under Unsplash License) — match the PDFs directly
| Slot | Image | Photographer | Direct URL |
|---|---|---|---|
| **Home — full-bleed hero** | Modern glass building facade, looking up at an angle | Sebastian Schuster (@sschusterphotoart) | `https://images.unsplash.com/photo-1758846946191-dfe1cd91779b` |
| **About — full-width photo strip** | Modern minimalist staircase, soft light | Giuseppe Argenziano (@geppi) | `https://images.unsplash.com/photo-1767218902235-51b698637a4f` |

Both match the mood and composition shown in `home.pdf` and `about.pdf` — use directly with `?w=2400&q=80&auto=format&fit=crop` for the hero, `?w=1600&q=80&auto=format&fit=crop` for the About strip.

### Images still needing sourcing — the PDFs use different photos than earlier drafts; source new ones matching this exact mood
| Slot | What the PDF shows | Search terms |
|---|---|---|
| **Why Poland — hero banner** | Moody night street scene, streetlights, bokeh, blue-toned — NOT a daytime boulevard shot | `night street lights bokeh city`, `evening street lamps blue hour europe` |
| **Contact — small photo (left column, below contact details)** | White/light angular geometric building exterior against sky, architectural, sculptural | `white angular architecture building sky`, `geometric white building exterior` |

Apply the same color-grade filter to every image for cross-page consistency: `filter: grayscale(0.15) saturate(0.85) contrast(1.08);` plus a navy scrim overlay on any image with text sitting on top of it (Home hero, Why Poland hero).

### Why Poland custom map illustration
A simple line-art SVG map (shown in `whypoland.pdf`) — Poland/Central Europe outline, "Szczecin" marked near a dashed line to "Berlin," "Warsaw" marked separately, small "GERMANY / EU" label bottom-left, caption beneath: "140 km from Berlin · Baltic seaport · A6/S3 corridor." Build this as a simple navy-stroke SVG, not a photo — sits in an offwhite bordered card next to the body paragraph.

---

## 3. PAGE-BY-PAGE EXACT SPEC

### HOME (`home.pdf`)

**Hero — full-bleed image, ~85vh**
- Eyebrow: `BUSINESS CONSULTANCY · SZCZECIN, POLAND`
- H1 (4 lines as shown): *Your Trusted Business Consultancy Partner in* **Poland** — "Poland" in gold, rest white
- Body: *Odrowita Doradztwo Biznesowe Sp. z o.o. provides professional business consultancy, strategic advisory, and operational support to help businesses achieve sustainable growth and long-term success.*
- CTAs: `Explore Our Services` (gold fill) / `Contact Us` (outline, white border)
- Scroll-down chevron, centered, bottom of hero image
- **Bottom stat bar** (dark navy strip anchored to hero base, 3 items horizontal): `01 European perspective` · `02 Practical, not theoretical` · `03 Long-term relationships`

**Who We Are** (light section, asymmetric split)
- Eyebrow: `WHO WE ARE`
- H2: *A consultancy built around your decisions*
- Body: *Based in Szczecin, we support businesses through strategic advice, operational excellence and sustainable growth — combining local insight with a European outlook.*
- Link: `More about us —` (→ About page)
- Right: 2×2 value card grid (offwhite cards, line icons):
  - **Strategic** — *Decisions grounded in evidence, not assumption.*
  - **Growth** — *Measurable value, compounded over time.*
  - **Partnership** — *We work inside your team, not beside it.*
  - **Trust** — *Discretion and integrity in every engagement.*

**Dark statement section** (full-bleed navy)
- Centered quote: *"Real growth needs more than advice — it needs* **a partner** *who understands your market."* — "a partner" in gold
- Thin gold divider line beneath

**Six disciplines section** (light, asymmetric)
- Eyebrow: `WHAT WE DO`
- H2: *Six disciplines, one engagement model*
- Right supporting line: *Every engagement starts with the same question: what decision are you trying to make?*
- **Featured card** (dark navy box, left): label `Featured`, title **Business Strategy Consulting**, description *Positioning, market entry and growth strategy — from diagnosis through to a sequenced, costed plan your team can execute.*, button `View all services`
- **Right list** (numbered 02–06, hairline dividers, no descriptions — title only, this is the condensed Home preview version):
  02 Market Analysis & Research · 03 Business Process Improvement · 04 Business Advisory Services · 05 Operational Consulting · 06 International Business Consulting

**Why Poland teaser** (light, asymmetric)
- Eyebrow: `WHY POLAND`
- H2: *A stable base in Central Europe*
- Body: *Szczecin offers excellent connectivity, competitive operating costs and proximity to Germany — a practical foothold for European operations.*
- Link: `Learn more —` (→ Why Poland page)
- Right: 3 stat blocks with line icons: **27** `EU MARKETS` · **1.2M** `SKILLED GRADUATES` · **140km** `TO BERLIN`

**CTA band:** H2 *Ready to grow your business in Poland?* / copy *Tell us where you want to go. We'll map the practical route to get there.* / button `Contact Us`

**Footer** (standard)

---

### ABOUT (`about.pdf`)

**Hero** (light, no image, asymmetric)
- Eyebrow: `ABOUT US`
- H1 (3 lines): *Advice that holds up after the meeting ends*
- Right subhead: *A Szczecin-based consultancy built on informed decisions, efficient processes and trusted partnerships.*

**Who We Are** (asymmetric split with a small data table)
- Eyebrow: `WHO WE ARE`
- Body: *Odrowita Doradztwo Biznesowe Sp. z o.o. is a professional business consultancy committed to supporting businesses through strategic advice, operational excellence and sustainable business growth.* + *We believe successful businesses are built on informed decisions, efficient processes and trusted partnerships.*
- Right: small key-value table with hairline dividers:
  `BASED IN` → Szczecin, Poland | `LEGAL FORM` → Sp. z o.o. | `FOCUS` → Strategy · Operations · Advisory

**Full-width photo strip** — the confirmed staircase image, full-bleed, no text overlay, acts as a section break

**Mission / Vision** (two cards, side by side, NOT identical — left is bolder/filled, right is quieter)
- Left (offwhite filled card, bold larger text, no label): *To deliver practical consultancy solutions that create measurable value and long-term business success.*
- Right (bordered card, quieter/smaller text, small gold accent line above): *To become a trusted consultancy recognized for professionalism, integrity and client-focused advisory services across Poland and beyond.*

**Core Values** (full-bleed dark navy)
- Eyebrow: `CORE VALUES`
- H2: *Five commitments we hold to*
- Numbered list 01–05, hairline dividers, gold numerals, white titles, muted descriptions:
  01 **Professionalism** — *Rigorous method, precise delivery, no theatre.*
  02 **Integrity** — *Advice we would follow ourselves — including when it costs us the work.*
  03 **Client Focus** — *Your objectives set the agenda; our scope follows them.*
  04 **Innovation** — *Modern tooling and analysis applied to unglamorous operational reality.*
  05 **Long-Term Relationships** — *We optimise for the second engagement, not the first invoice.*

**CTA band:** same pattern as Home — *Ready to grow your business in Poland?* / *Tell us where you want to go. We'll map the practical route to get there.* / `Contact Us`

**Footer** (standard)

---

### SERVICES (`service.pdf`)

**Hero** (light, no image, asymmetric)
- Eyebrow: `WHAT WE DO`
- H1 (4 lines): *Consultancy scoped to the decision in front of you*
- Right subhead: *Six disciplines, delivered as one engagement model — practical, measurable and built to be implemented.*

**Numbered service list** (01–06, full descriptions this time — this is the detailed version vs. Home's condensed preview)
- 01 **Business Strategy Consulting** — *Positioning, market entry and growth strategy — diagnosis through to a sequenced, costed plan.*
- 02 **Market Analysis & Research** — *Demand sizing, competitive mapping and pricing evidence for decisions that cannot be guessed.*
- 03 **Business Process Improvement** — *Mapping how work actually flows, then removing the steps that add cost and not value.*
- *[heavier gold divider line here, splitting the list into two groups of three]*
- 04 **Business Advisory Services** — *An external, candid perspective for owners and boards facing structural decisions.*
- 05 **Operational Consulting** — *Planning, procurement and performance discipline embedded into day-to-day operations.*
- 06 **International Business Consulting** — *Cross-border expansion into and out of Poland, with EU market and partner selection support.*

**Pull-quote** (small gold dash marker left, large indented quote):
*"Every engagement is tailored to the client's objectives, delivering practical recommendations and sustainable solutions."*

**CTA band:** H2 *Not sure which service you need?* / copy *Describe the situation and we'll tell you what would genuinely help — and what wouldn't.* / button `Contact Us`

**Footer** (standard)

---

### WHY POLAND (`whypoland.pdf`)

**Hero — full-bleed image banner** (night street scene, moody blue-toned — see imagery section for sourcing)
- Eyebrow: `WHY POLAND`
- H1 (3 lines): *A stable, connected base in Central Europe*
- Body: *Szczecin combines EU market access, competitive costs and a German border 15 minutes away.*
- No CTA buttons on this hero (unlike Home) — text-only, banner height shorter than Home's hero (~55–60vh)

**Stat section — flows directly from the hero into full dark navy** (no light section between; this is a continuous dark block from hero through stats)
- Eyebrow: `THE CASE IN NUMBERS`
- 4 stat blocks, line icons, horizontal row:
  **27** `EU MEMBER STATES` · **1.2M+** `STUDENTS IN HIGHER EDUCATION` · **140km** `SZCZECIN TO BERLIN` · **-40%** `OPERATING COST GAP VS. WEST`

**Body + map section** (light, asymmetric)
- Left body: *Poland offers a stable and growing economy, a strategic location in Central Europe, access to the European Union market, a skilled workforce and an attractive business environment.* + *Szczecin provides excellent connectivity, competitive operating costs and proximity to Germany, making it an ideal location for sustainable business development.*
- Right: offwhite-bordered card containing the custom line-art map (see Section 2), caption beneath: *140 km from Berlin · Baltic seaport · A6/S3 corridor*

**CTA band:** H2 *Considering Poland as your next market?* / copy *We'll pressure-test the assumptions before you commit capital to them.* / button `Contact Us`

**Footer** (standard)

---

### CONTACT (`contactus.pdf`)

**Hero** (light, no image, asymmetric)
- Eyebrow: `GET IN TOUCH`
- H1 (3 lines): *Let's discuss where your business is headed*
- Right subhead: *Write to us with the context and we'll respond with a considered view, not a brochure.*

**Two-column contact section**
- **Left column:**
  - Contact detail list, hairline dividers: `OFFICE` → Szczecin, Poland | `EMAIL` → info@yourdomain.com | `PHONE` → +48 XXX XXX XXX | `HOURS` → Mon–Fri · 09:00–17:00 CET
  - Small note beneath: *Email and phone are placeholders — replace with live details before launch.*
  - Below that: a photo (white angular architecture — see imagery section for sourcing), rounded corners, moderate size (not full-width)
- **Right column:** offwhite form card
  - Fields (2-column grid where noted): `NAME*` / `COMPANY` (row 1) — `EMAIL*` / `PHONE` (row 2) — `MESSAGE*` (full width textarea)
  - Button: `Send enquiry` (solid navy)
  - Caption beneath button: *Opens your email client with the message pre-filled.* — **confirms `mailto:` form behavior, exactly as planned**

**Footer — Contact-page variant** (see Section 1 for the extra centered legal row above the standard 3-column footer)

---

## 4. TECHNICAL REQUIREMENTS
- Plain HTML/CSS/JS, no framework, 5 pages sharing a single CSS file and a single JS file
- Fully responsive: mobile (375px), tablet (768px), desktop (1440px) minimum breakpoints
- Semantic HTML5, proper heading hierarchy, alt text on all images, visible focus states, sufficient color contrast
- Subtle fade-up-on-scroll entrance animation for sections (as established in the earlier design pass) — nothing bouncy
- Contact form submits via `mailto:` — pre-fills subject/body from the Name/Company/Email/Phone/Message fields, as confirmed by the caption text in `contactus.pdf`
- Icon-only favicon (from the real logo mark)
- SEO: descriptive `<title>` and meta description per page

---

## 5. DELIVERY EXPECTATION
Build all 5 pages to this spec and the attached PDFs exactly — copy, layout, and section order are locked. The only genuinely open items are: (1) sourcing the two remaining images per Section 2, and (2) swapping the placeholder triangle icon for the real logo file. Everything else in the PDFs is final.
