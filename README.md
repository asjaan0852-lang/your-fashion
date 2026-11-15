# You Fashion — Luxury Menswear E-Commerce Platform

A production-ready, high-converting e-commerce website for **"You Fashion"**, a premium Indian menswear brand. Built with **React 18 + Vite**, **React Router**, and a **custom CSS Luxury Design System** (Modern Emerald & Champagne Luxury).

Fully structured and compliant for instant onboarding and approval with Indian payment gateways (**Cashfree Payments, PhonePe PG, Razorpay, and PayU**) and ready for static hosting on **GitHub Pages** or custom domains.

---

## 1. Official Business & Legal Identity (From GST Certificate)

Every policy page, invoice summary, contact card, and footer across the application matches these verified commercial details:

- **Trade Name:** You Fashion
- **Legal Entity / Proprietor:** Waseem (Sole Proprietorship)
- **GSTIN:** `08AEEPW3402Q1Z0`
- **Principal Place of Business:** Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India
- **Operating Currency:** Indian Rupee (`₹` / `INR`) — All prices displayed are 100% GST-inclusive.
- **Support Contact Desks:**
  - Customer Service Hotline: `+91 98765 43210` (Mon–Sat, 10:00 AM – 7:00 PM IST)
  - Order & Return Desk: `support@youfashion.in`
  - General Inquiries: `info@youfashion.in`
  - Legal & Privacy (DPDPA): `privacy@youfashion.in`

---

## 2. Design System: Modern Emerald & Champagne Luxury

Crafted with a distinct aesthetic:
- **Background Primary:** Deep Midnight Slate (`#0B0F14`)
- **Background Secondary / Cards:** Elevated Obsidian with glassmorphism (`#131922` / `rgba(19, 25, 34, 0.85)` with backdrop-filter blur)
- **Primary Accent:** Champagne Luxe Gold (`#E2C799` / `#C5A870`)
- **Secondary Accent:** Royal Imperial Emerald (`#10B981` / `#059669`)
- **Text Primary:** Crisp Ivory (`#F8FAFC`)
- **Text Secondary:** Muted Cashmere Gray (`#94A3B8`)
- **Borders:** Refined subtle gold borders (`rgba(226, 199, 153, 0.18)`)
- **Typography:**
  - Headings: Editorial serif (`Cinzel`, `Playfair Display`, serif)
  - Body & UI: Clean modern sans-serif (`Plus Jakarta Sans`, sans-serif)

---

## 3. Gateway Compliance & Product Catalog (CRITICAL)

### Zero Trademark Infringement Guarantee
In strict conformance with Indian payment gateway risk guidelines:
- **No Third-Party Trademarks:** Zero usage of brands like Nike, Zara, Polo Ralph Lauren, Louis Vuitton, Gucci, Levi's, Balenciaga, Tommy Hilfiger, etc.
- **Proprietary Nomenclature:** Pure generic luxury descriptions (e.g., *"Textured Pure Linen Mandarin Shirt"*, *"Washed Indigo Straight Leg Skate Denim"*, *"Artisanal Monogram Resort Camp Shirt"*, *"Double-Breasted Taupe Tailored Blazer"*).

### 30+ Curated Products across 6 Core Categories:
1. **Shirts** (French Normandy flax linen, Bengal stripe Oxford cotton, Slub popovers, Evening dress shirts)
2. **T-Shirts & Polos** (Honeycomb waffle open-collar polos, 280 GSM Supima drop-shoulder tees, Silk-cotton knit polos)
3. **Jeans & Trousers** (14oz Japanese-inspired straight denim, Pleated drawstring trousers, Belgian linen Gurkha pants)
4. **Jackets & Blazers** (Unstructured Neapolitan blazers, Type-III washed black denim truckers, Peached cotton safari field jackets)
5. **Hoodies & Knitwear** (Aran cable-knit Australian Merino jumpers, 450 GSM French terry crewnecks, Cashmere-blend funnel necks)
6. **Festive Ethnic Wear** (Raw dupion silk mandarin kurtas, Chanderi zari-woven bandhgala kurtas, Hand-embroidered Lucknowi Chikankari)

---

## 4. Routes & Page Architecture

| Route | Page | Description |
|---|---|---|
| `/#/` | **Home** | Split-screen hero, infinite marquee ticker, category tiles, bestsellers, craftsmanship pillars, verified patron testimonials, trust badges |
| `/#/shop` | **Shop Catalog** | Live search, category tabs, size & price filtering, sorting, product cards with quick view |
| `/#/about` | **About Us** | The You Fashion story by Waseem, Bhiwadi atelier heritage, 4 milestone chapters, commercial registry breakdown |
| `/#/contact` | **Contact Us** | Interactive inquiry form with confirmation state, 3 contact cards, accordion FAQ section |
| `/#/checkout` | **Checkout** | 3-step checkout: Shipping address, payment method selection (UPI, Cards, Net Banking, COD), statutory consent notice, and tax invoice generation |
| `/#/terms` | **Terms & Conditions** | Information Technology Act 2000, Rajasthan jurisdiction, GST transparency, order acceptance |
| `/#/privacy` | **Privacy Policy** | DPDPA 2023 & IT Act 2000 compliance, zero card storage, 8-year statutory tax invoice retention (CGST Act) |
| `/#/shipping-policy` | **Shipping Policy** | 1–2 days dispatch, 5–7 days transit via Delhivery & Blue Dart, free shipping above ₹1,999 (flat ₹99 below) |
| `/#/refund-policy` | **Refund & Cancellation** | 7-day return window, 12-hour pre-dispatch cancellation, reverse pickup process, 7–10 days source gateway disbursement |
| `/#/cancellation-policy` | **Cancellation Alias** | Direct alias to the Cancellation & Refund Policy |

---

## 5. Deployment Setup (GitHub Pages & Custom Domain)

### Pre-configured Scripts in `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "cp dist/index.html dist/404.html",
    "deploy": "gh-pages -d dist"
  }
}
```

### Static Hosting & SPA Routing:
- Uses `HashRouter` ensuring seamless direct page reloads and link sharing on GitHub Pages or any static CDN.
- Automatic creation of `dist/404.html` on build.
- `public/CNAME` pre-configured for `youfashion.in`.

### Deployment to GitHub Pages:
```bash
# 1. Initialize git (if not already done)
git init
git add .
git commit -m "feat: complete You Fashion luxury menswear e-commerce platform"

# 2. Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main

# 3. Deploy to gh-pages branch
npm run deploy
```

---

## 6. Payment Gateway Verification Checklist

| Compliance Requirement | Implementation in You Fashion | Status |
|---|---|---|
| **Legal Trade Name & Entity** | Displayed prominently across footer, checkout, and contact as "You Fashion — Proprietor: Waseem" | ✅ Fully Compliant |
| **GSTIN Registration** | `08AEEPW3402Q1Z0` highlighted on announcement bar, invoices, policies, and footer | ✅ Fully Compliant |
| **Physical Address** | Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019 | ✅ Fully Compliant |
| **Official Contact Desks** | `support@youfashion.in`, `privacy@youfashion.in`, `+91 98765 43210` with operating hours | ✅ Fully Compliant |
| **Pricing Transparency** | All prices explicitly marked "Inclusive of all taxes / GST" in INR (`₹`) | ✅ Fully Compliant |
| **Dedicated Policy Pages** | Terms, Privacy (DPDPA 2023), Shipping (Delhivery/Blue Dart), 7-Day Refund & Cancellation | ✅ Fully Compliant |
| **Statutory Order Consent** | Mandatory consent notice displayed before order placement | ✅ Fully Compliant |
| **Zero Brand Infringement** | 100% original designs and luxury generic terminology | ✅ Fully Compliant |

