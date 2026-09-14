# Smartlink Systems Website — Project Requirements (Read This First, Every Session)

> Single source of truth for this project. Read fully before writing any code. If content, a decision, or a design detail is missing, STOP and ask — never invent or guess.

## 1. Project Summary

We are converting an **existing, already-built Next.js website repo** (originally built for a software company, "Adsfixter") into a **premium Shipping, Logistics & Commercial Trading company website** for a real client: **Smartlink Systems** (Bangladesh).

- The existing **layout, component architecture, and code patterns stay intact.**
- **Content, images, and the color palette change.** Font family and typographic scale (h1–h6, body styles) stay exactly as-is.
- End result must look and read as a genuine, premium shipping/logistics/commodity-trading company site — zero trace of the original software-company identity anywhere (copy, icons, imagery, meta tags, alt text, everything).
- Client expectation: **premium quality, 100% satisfaction.** This is a senior-level (5+ yrs experience) production build, not a template-swap job.

## 2. Non-Negotiable Rules

1. **Next.js 16 has breaking changes vs. common training data.** Before writing any Next.js-specific code (routing, metadata API, data fetching, config), read the relevant guide in `node_modules/next/dist/docs/` first. Do not assume older Next.js patterns still apply.
2. **Never invent business content.** Every commodity/service page's copy comes from the client, routed through the project owner. If a page's content isn't in §6 below or a follow-up prompt, leave it as a clearly marked placeholder (`{/* TODO: content pending — <page name> */}`) — do not write filler marketing copy.
3. **Work in small, incremental modules** — one component/page/concern at a time. Stop after each module for review before starting the next. Do not attempt a full-site rewrite in one pass.
4. **Preserve existing functionality** (routing, forms, animations, responsiveness) unless a change is explicitly requested.
5. **Flag anything that conflicts with senior-level best practice** before implementing it as asked — explain the tradeoff, then let the owner decide. Silent compliance with a suboptimal instruction is not acceptable.
6. **Design/style reference (tone and structural inspiration only — never copy their code, layout, or text):** https://agrocorp.com.sg/ — an established agri-trading company site. Notable patterns worth adapting: hero + mission/vision blocks, a numbered "business model" step section with icon + short text per step, a leadership quote block, a global-locations list.
7. **Old site being replaced (context only, not a design reference):** https://www.smartlinksystemsbd.com/ — a basic single-page builder site with no CMS, no contact form, placeholder leftovers, weak SEO. We are fully replacing it.

## 3. Codebase Facts (from direct repo analysis — verify before assuming otherwise)

- Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 (theme defined via `@theme` in `src/app/globals.css`, not a `tailwind.config.js`).
- Fonts: Plus Jakarta Sans (body), Bricolage Grotesque (headings), Geist Mono — loaded via `next/font/google` in `src/app/layout.tsx`. **Do not touch font setup.**
- Typography scale (`.h1`–`.h6`, `.body-*`, `.title-*` utility classes in `globals.css`) is fixed with responsive breakpoints already tuned — **do not change sizes.**
- Theme color tokens currently defined: `--color-adsfixter-primary` / `--color-primary` (#f74608), `--color-secondary` (#000000), `--color-complementary` (#072b24), `--color-dark` (#112420), `--color-gray` (#626262), `--color-emerald` (#106655).
- **New Smartlink Systems palette (confirmed by client):** Primary = `#E77127` (from the Smartlink logo). Secondary = `#EACD09` (used for titles). Both `--color-adsfixter-primary`/`--color-primary` and `--color-secondary` tokens must be updated to these values as part of the color-token refactor module — and every hardcoded hex found in the audit (see below) must be migrated to reference the token, not left as a literal value, so future palette changes are a single-point edit again.
- **Critical issue: the primary color hex is hardcoded outside the CSS variable in ~160 places across ~40 files** (inline arbitrary Tailwind values like `bg-[#f74608]`, inline styles, even an inconsistent second orange `#F24E1E` in at least one place). A "just swap primary/secondary color" request is therefore **not a one-line CSS variable edit** — it requires an audit-and-refactor pass first (migrate all hardcoded color usages to theme tokens), then the actual palette swap. Treat this as its own module, ideally the first one, since it's a prerequisite for a clean, maintainable color change and for every page built afterward.
- Icon-specific inline gradients (e.g. `#6424E5`, `#EC4899`, `#4AC512` on service icons) are **category accent colors**, not primary/secondary — these will need their own new palette mapped to Smartlink's product categories, decided separately from the primary/secondary swap.
- `next/image` is used consistently — no raw `<img>` tags for content images (good, keep this pattern for all new images).
- No per-page SEO metadata exists anywhere (23 `page.tsx` files, 0 have a `metadata`/`generateMetadata` export — all inherit the generic root-layout title). No `sitemap.xml`, no `robots.txt`, no JSON-LD structured data. **This must be built from scratch to meet the "100% SEO" requirement** — see §5.
- `public/images` is currently 140MB with some individual files up to 16MB — these are old software-company assets being fully replaced, but it's a warning: **new Smartlink images must go through an optimization pass (correct format, compressed, appropriately sized) before being added**, or the "100% fast loading" goal will not be met.
- Both `react-hot-toast` and `react-toastify` are installed — redundant. Consolidate to one during cleanup (flag for owner decision, don't remove unilaterally without checking both are actually used).
- A reusable **mega-dropdown nav pattern already exists** (`Navbar.tsx` + `NavDropdown` + `ListRow`, grouped columns for "Resources") — adapt this for the new category navigation (Cementious & RMC, Grain Commodities, Animal Feed Additives, Season Crops), which needs 2-level grouping (category → sub-items) similar to the existing grouped-columns pattern.
- Content data patterns: `public/data/*.json` (e.g. `blogs.json`, `team.json`) already used for structured content. Follow this convention for commodity data — one JSON (or typed `.ts` data module) per category, with a **consistent schema** across all commodity entries (id, slug, category, name, intro, sourcing countries, spec table, sizes, target industries, template type) so page components can render generically instead of being hand-coded per commodity. This keeps a future CMS/backend migration to a data-source swap rather than a component rewrite.
- Images will be organized in one folder per category, named by category (owner's decision — apply this convention under `public/images/<category-slug>/`).

## 4. Performance & SEO Checklist (owner has explicitly required both at "100%")

**Performance:**
- [ ] Primary-color hardcoding audit + refactor to theme tokens (prerequisite module)
- [ ] All new images: correct format (WebP/AVIF via next/image automatic optimization), properly sized, compressed before adding to repo
- [ ] Consolidate duplicate toast libraries
- [ ] Verify code-splitting / lazy-loading for below-the-fold heavy sections (Framer Motion, Swiper carousels)
- [ ] Audit for unused dependencies/components as pages are converted
- [ ] Lighthouse pass (Performance, Best Practices) once modules are in place

**SEO:**
- [ ] Per-page `metadata`/`generateMetadata` export on every page (title, description, canonical, OG tags) — especially all commodity/service pages, targeting the keyword patterns the client provides (see Wheat example in §7)
- [ ] `sitemap.xml` (dynamic, generated from route list)
- [ ] `robots.txt`
- [ ] JSON-LD structured data — `Organization` schema site-wide, `Product`/`Service` schema on commodity and service pages
- [ ] Semantic heading hierarchy per page (single H1, logical H2/H3 nesting) — verify against existing `.h1`–`.h6` utility usage
- [ ] Descriptive `alt` text on every image (especially commodity photos — currently a gap on the old smartlinksystemsbd.com site)
- [ ] Clean, descriptive URL slugs per page (client has already supplied one example: `/wheat-supplier-importer-bangladesh`)

## 5. Content Templates Identified (build as reusable components, not one-off pages)

**A. Commodity Page Template** (single product): intro/positioning → sourcing countries → supply chain scope → specs & sizes table → target industries/projects → closing tagline/CTA. Used by: Limestone, Gabbro Aggregate, Coal.

**B. Service Page Template** (capability-based, not a physical product): intro/positioning → expertise/capabilities list → coverage/routes → related commodities/scope → tagline/CTA, icon-marked subsections. Used by: International Bulk Vessel Chartering.

**C. Category Listing Page Template** (multiple related sub-products on one page): page intro → repeating block per sub-item (icon + short intro + spec line) → closing tagline/CTA. Used by: Animal Feed Additives.

## 6. Planned Page/Section Structure

| Section | Items | Content status |
|---|---|---|
| Home | — | Reusing existing repo content; owner will mark specific edits needed |
| About | — | Reusing existing repo content; owner will mark specific edits needed |
| Contact | — | Reusing existing repo content; owner will mark specific edits needed |
| Cementious & RMC Raw Item | Clinker | pending |
| | Limestone | content ready (§7) |
| | Aggregates (Gabbro Aggregate) | content ready (§7) |
| Grain Commodities | Wheat | pending correct content (a wrong duplicate-Gabbro body was sent once by mistake — do not use it; SEO title/slug/keywords already provided, see §7) |
| | Lentils | pending |
| | Pulses | pending |
| | Soyabean Seeds | pending |
| | Canola Seeds | pending |
| | Green Mung | pending |
| | ~~Corn/Maize~~ | Decision: NOT a separate page — covered only under Animal Feed Additives |
| Animal Feed Additives (single page, multiple sub-items) | Poultry Meal, Wheat Bran, Corn/Maize, DDGS, Soybean Meal, Rapeseed Meal, Corn Gluten Feed (CGF), Corn Gluten Meal (CGM) | content ready (§7) |
| Season Crops | Cotton | pending |
| Shipping & Logistics (service page — confirmed addition beyond original list) | International Bulk Vessel Chartering | content ready (§7) |
| Category placement TBD | Coal | content ready (§7), but final nav/URL category not yet decided — do not finalize its route until confirmed |

## 7. Content Received So Far

### Limestone (Template A)
Limestone Supplier, Importer & Exporter in Bangladesh. Positions Smartlink as limestone supplier/importer/exporter/bulk trader serving RMC plants, cement industries, construction companies, infrastructure/mega projects. Sources from UAE, Oman, Thailand, China, India. Full supply chain: sourcing, import/export docs, shipment coordination, port handling, customs, warehousing, inland waterway + road transport, final delivery. Specs: CaCO3 90-98%, CaO 50-55%, MgO <3% typ., SiO2 <5% typ., supportable by COA/lab reports. Sizes: 0-5mm, 5-10mm, 10-20mm, 20-40mm, 40-80mm, chips, aggregates, lumps - customizable. Targets: RMC, roads/highways, bridges, elevated expressways, airports, power plants, industrial facilities, cement production.

### Gabbro Aggregate (Template A)
Gabbro Aggregate Supplier & Importer in Bangladesh. Sources from UAE and Oman. Full supply chain incl. vessel/shipment coordination, port handling, customs, jetty ops, warehousing, inland waterway + road transport. Sizes: 0-5mm (dust/fine), 5-10mm (small), 10-20mm (coarse), 5-20mm (mixed/graded), 20-40mm (large), 40-60mm (heavy construction) - customizable. Quality params: Specific Gravity, Water Absorption, ACV, AIV, LAA, Flakiness Index, Elongation Index, Sieve Analysis. Targets: RMC, high-strength concrete, roads/highways, bridges, elevated expressways, airports, railway infrastructure, power plants, industrial facilities, commercial developments.

### Coal (Template A) — category placement TBD
Global Coal Sourcing, Trading & Supply. Sources Thermal/Steam/Industrial Coal from Indonesia, South Africa, Australia. Quality params: GCV/GAR, Total Moisture, Inherent Moisture, Ash Content, Total Sulphur, Volatile Matter, Fixed Carbon. Serves power generation, steel/re-rolling, brick manufacturing, cement/building materials, industrial boilers, manufacturing. Full supply chain incl. vessel chartering, ocean freight, import coordination, cargo handling, inland waterway + road transport.

### International Bulk Vessel Chartering (Template B)
Connecting Global Cargo with the Right Vessel, Route & Freight Solution. Vessel types: Handysize, Handymax, Supramax, Ultramax, Panamax. Services: Voyage Charter, Time Charter, Vessel Nomination, Freight Negotiation, Laycan Planning, Fixture Coordination, Port & Agent Coordination, Loading/Discharging, Shipping Documentation, Voyage Monitoring. Routes: Middle East, South Asia, Southeast Asia, China, Africa, Europe, Black Sea Region, North & South America (focus: Bangladesh/South Asia). Commodities handled: Limestone, Gabbro Aggregate, Clinker, Gypsum, Coal, Wheat, Corn/Maize, Grains, Fertilizers, Minerals, Construction Materials, other dry bulk.

### Animal Feed Additives (Template C)
Sub-items, each with sourcing/spec:
- Poultry Meal — Saudi Arabia, Egypt, China — Crude Protein 60-65% min, Moisture 8% max, Crude Fat 10-15%, Crude Ash 15-18% max, Pepsin Digestibility 85% min
- Wheat Bran — Protein 14% min, Moisture 14% max, Fat 4-5%, Ash 7% max
- Corn/Maize (feed grade) — Moisture 14% max, Protein 8% min, Foreign Matter 2% max
- DDGS — Crude Protein 26-30% min, Moisture 12% max, Crude Fat 7-10%, Crude Fiber 8-10% max
- Soybean Meal (SBM) — Crude Protein 46-48% min, Moisture 12% max, Crude Fiber 3.5-6% max, Ash 6-7% max
- Rapeseed Meal (RSM) — Crude Protein 34-38% min, Moisture 12% max, Crude Fiber 12-14% max
- Corn Gluten Feed (CGF) — Crude Protein 20-23% min, Moisture 12% max, Crude Fiber 8-10% max
- Corn Gluten Meal (CGM) — Crude Protein 60% min, Moisture 10-12% max, Crude Fat 2-4%

### Wheat — SEO metadata only (body content still pending, do not fabricate it)
SEO Title: "Wheat Supplier & Importer in Bangladesh | Smartlink Systems". URL Slug: `/wheat-supplier-importer-bangladesh`. Target keywords: Wheat Supplier Bangladesh, Wheat Importer Bangladesh, Russian Wheat Bangladesh, Ukraine Wheat Supplier, Canadian Wheat Bangladesh, Milling Wheat Supplier, Bulk Wheat Import Bangladesh, Wheat Trading Company Bangladesh.

## 8. Open Questions (do not finalize related code until answered)

1. Which category/section does **Coal** belong under? (Not part of the original planned nav.)
2. Final Wheat page body content — pending from client.

## 9. Still Pending From Client

Clinker, Wheat (correct body content), Lentils, Pulses, Soyabean Seeds, Canola Seeds, Green Mung, Cotton, plus specific edit instructions for Home/About/Contact pages, plus real Smartlink social media URLs (Facebook/LinkedIn/etc. — currently disabled to # after Adsfixter's old social links were removed), plus final marketing copy for testimonials/FAQ/company-story sections and Privacy/Terms/Return-policy pages (currently still written for a SaaS company, need a full trading-company rewrite, not a mechanical find-replace).

## 11. Confirmed Company Info (use these, not TODO placeholders)

- **Company/address:** DIVINE FLOX, HOUSE: 543, APT-B3, ROAD: 08, DOHS, MIRPUR-1216, BANGLADESH. This is the **only** office — do not add branch offices.
- **Phones:** +8801677136584, +8801846216225, +8801737136022
- **Emails:** info@smartlinksystemsbd.com, sales@smartlinksystemsbd.com
- **WhatsApp:** +880 1677-136584 (same as first phone number)
- **Logo:** `public/logo.png` (hex "S" mark + wordmark) — already wired into navbar, footer, favicon, app icon, apple-icon, and root metadata as of Module 2.

## 12. Module Progress Log

- **Module 1 (done):** Color token audit + refactor. Primary #f74608→#e77127, secondary #000000→#eacd09, new --color-cta-dark and --color-primary-hover tokens added. ~130+ hardcoded hex instances across ~36 files migrated.
- **Module 2 (in progress):** Branding cleanup. Career page removed entirely (about-us is now the sole About destination). Logo swapped everywhere (navbar, footer, favicon, icons, metadata). All old Adsfixter contact data (fake offices, phone, email) replaced with real Smartlink data across GlobalOffices (both copies), NextFooter, StickyContactBar, Navbar CTA, Privacy/Terms/Return-policy contact blocks. Remaining in this module: old "Products" nav dropdown (SyncBari/SiteBari/MetaBari/MailBari) still needs full removal (nav entry was flagged earlier, footer productLinks still point to old product domains, related dead icon colors like #ED4308 still present); dead code identified but not yet removed (Footer.tsx — entire component unreachable since only NextFooter renders; NextFooter's unused FlagUS/FlagUK SVGs, ~320 lines); social media links disabled to # pending real URLs.
- **Deferred to a future content module (needs real client copy, not mechanical swap):** ~20 files with "AdsFixter" embedded in actual marketing copy (testimonials, FAQ, company origin story, page descriptions, image alt text) — these describe a software/ads company's story, not shipping/trading, and need real Smartlink content, not just a name swap. Also: Privacy/Terms/Return-policy body text (written for a SaaS refund/subscription model, needs full rewrite for a trading company).

## 13. Workflow

- Work module by module. Suggested first module: color-token audit/refactor (prerequisite for everything visual).
- Before writing code for any commodity/service page, confirm its content exists in §7 or has been explicitly provided in the prompt.
- Flag ambiguities and best-practice conflicts instead of resolving them silently — explain, then let the owner decide.
- Keep changes scoped to the module being worked on — don't touch unrelated files.
- Images: one subfolder per category under `public/images/<category-slug>/`, optimized before commit.
- Data: JSON/typed data module per category with a consistent schema (backend/CMS may be introduced later — structure data so that's a source-swap, not a rewrite).
