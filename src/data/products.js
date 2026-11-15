// You Fashion - Curated Menswear Catalog
// Strict Gateway Compliance: Zero Trademark Infringements. Pure Luxury Descriptions.
// All prices in Indian Rupee (₹ / INR), GST Inclusive.

import shirt01Img from '../assets/products/shirt-01-micro-stripe.jpg';
import shirt02Img from '../assets/products/shirt-02-pinstripe-resort.jpg';
import shirt03Img from '../assets/products/shirt-03-botanical-rose.jpg';
import shirt04Img from '../assets/products/shirt-04-cerulean-poplin.jpg';
import denim01Img from '../assets/products/denim-01-faded-ash.jpg';
import hoodie01Img from '../assets/products/hoodie-01-snap-heather.jpg';
import pullover01Img from '../assets/products/pullover-01-espresso-camel.jpg';
import pullover02Img from '../assets/products/pullover-02-rugby-monochrome.jpg';
import sweatshirt01Img from '../assets/products/sweatshirt-01-varsity-ivory.jpg';
import polo01Img from '../assets/products/polo-01-mocha-rugby.jpg';
import polo02Img from '../assets/products/polo-02-noir-jersey.jpg';
import sweatshirt02Img from '../assets/products/sweatshirt-02-shearling-collar.jpg';
import polo03Img from '../assets/products/polo-03-espresso-cocoa.jpg';
import polo04Img from '../assets/products/polo-04-obsidian-mercerized.jpg';
import polo05Img from '../assets/products/polo-05-emerald-tipped.jpg';
import polo06Img from '../assets/products/polo-06-crimson-riviera.jpg';
import shirt05Img from '../assets/products/shirt-05-citrus-olive.jpg';
import jacket01Img from '../assets/products/jacket-01-moto-racing.jpg';
import jacket02Img from '../assets/products/jacket-02-obsidian-zip.jpg';
import jacket03Img from '../assets/products/jacket-03-cyber-biker.jpg';
import jacket04Img from '../assets/products/jacket-04-varsity-letterman.jpg';
import jacket05Img from '../assets/products/jacket-05-burgundy-western.jpg';
import jacket06Img from '../assets/products/jacket-06-grand-prix-moto.jpg';
import pullover03Img from '../assets/products/pullover-03-reflective-track.png';
import trousers01Img from '../assets/products/trousers-01-heather-sweatpants.jpg';
import denim02Img from '../assets/products/denim-02-balloon-wash.jpg';
import denim03Img from '../assets/products/denim-03-bleach-straight.jpg';
import trousers02Img from '../assets/products/trousers-02-monochrome-plaid.jpg';
import henley01Img from '../assets/products/henley-01-tartan-layered.png';
import polo07Img from '../assets/products/polo-07-burgundy-rugby.png';
import pullover04Img from '../assets/products/pullover-04-earth-boucle.jpg';
import sweatshirt03Img from '../assets/products/sweatshirt-03-pine-varsity.jpg';
import trousers03Img from '../assets/products/trousers-03-obsidian-balloon.jpg';
import trousers04Img from '../assets/products/trousers-04-calligraphy-grey.jpg';
import denim04Img from '../assets/products/denim-04-cargo-washed-black.jpg';

export const CATEGORIES = [
  { id: 'all', name: 'All Collections', count: 35 },
  { id: 'shirts', name: 'Shirts', count: 6 },
  { id: 't-shirts', name: 'T-Shirts & Polos', count: 7 },
  { id: 'trousers', name: 'Jeans & Trousers', count: 8 },
  { id: 'jackets', name: 'Jackets & Blazers', count: 6 },
  { id: 'knitwear', name: 'Hoodies & Knitwear', count: 8 }
];

export const PRODUCTS = [
  // ----------------- 1. SHIRTS (6 items) -----------------
  {
    id: 'yf-sh-01',
    name: 'Sky Blue Micro-Stripe Relaxed Oxford Shirt',
    fullName: 'You Fashion Fine Combed Cotton Boxy Striped Oxford Shirt',
    category: 'shirts',
    price: 2399,
    originalPrice: 3199,
    rating: 4.9,
    reviewCount: 134,
    isBestseller: true,
    isNew: true,
    image: shirt01Img,
    secondaryImage: shirt01Img,
    description: 'Tailored from yarn-dyed baby blue micro-stripe combed Oxford cotton. Features an authentic button-down collar, subtle tonal chest typography embroidery, and a relaxed boxy drape designed for elevated smart-casual wear.',
    fabric: '100% Fine Combed Oxford Cotton (180 GSM)',
    fit: 'Modern Boxy Relaxed Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Yarn-dyed micro Bengal pinstripe weave',
      'Pointed button-down collar with structured interlining',
      'Mother-of-pearl buttons with reinforced cross-stitching',
      'Straight hem with signature You Fashion woven hem tab'
    ]
  },
  {
    id: 'yf-sh-02',
    name: 'Ivory Pinstripe Embroidered Resort Overshirt',
    fullName: 'You Fashion Boxy Pinstripe Poplin Half-Sleeve Camp Shirt',
    category: 'shirts',
    price: 2299,
    originalPrice: 2999,
    rating: 4.8,
    reviewCount: 112,
    isBestseller: true,
    isNew: true,
    image: shirt02Img,
    secondaryImage: shirt02Img,
    description: 'A statement summer silhouette cut from crisp ivory cotton poplin with fine charcoal pinstripes. Embellished on the back yoke with artisanal crimson red cursive script and geographical coordinates.',
    fabric: '100% Crisp Cotton Poplin & Crimson Embroidery',
    fit: 'Oversized Elbow-Sleeve Drop Shoulder',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Artisanal crimson red bullion back embroidery',
      'Clean pinstripe vertical alignment across back yoke',
      'Elbow-length oversized sleeves for warm weather airflow',
      'Square split hemline for fluid movement'
    ]
  },
  {
    id: 'yf-sh-03',
    name: 'Artisanal Botanical Rose Camp Collar Shirt',
    fullName: 'You Fashion Romantic Embroidered Slub Linen Resort Shirt',
    category: 'shirts',
    price: 2799,
    originalPrice: 3699,
    rating: 5.0,
    reviewCount: 98,
    isBestseller: true,
    isNew: true,
    image: shirt03Img,
    secondaryImage: shirt03Img,
    description: 'An evocative statement piece woven from textured natural slub linen canvas. Accented with vibrant crimson kiss motifs along the Cuban notch lapel and an exquisite deep crimson blooming rose stem on the chest.',
    fabric: '70% Organic Slub Linen, 30% Long-Staple Cotton',
    fit: 'Cuban Camp Collar Contemporary Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Convertible Cuban camp collar with scarlet kiss motifs',
      'Hand-guided embroidery of deep crimson blooming rose',
      'High-texture slub weave provides natural breathability',
      'Natural horn button fastenings with concealed lower placket'
    ]
  },
  {
    id: 'yf-sh-04',
    name: 'Cerulean Azure Pinstripe Poplin Shirt',
    fullName: 'You Fashion Italian Poplin Wide-Stripe Boxy Overshirt',
    category: 'shirts',
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 87,
    isBestseller: true,
    isNew: true,
    image: shirt04Img,
    secondaryImage: shirt04Img,
    description: 'Vibrant cerulean azure blue cotton poplin engineered with subtle vertical hairline stripes. Features a sharp spread collar, oversized patch chest pocket, and an effortless relaxed drop-shoulder cut.',
    fabric: '100% Two-Ply Crisp Cotton Poplin (160 GSM)',
    fit: 'Relaxed Boxy Drop-Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Vibrant two-tone cerulean azure yarn dye',
      'Precision stripe-matched chest patch pocket',
      'Mother-of-pearl buttons on clean front placket',
      'Pre-shrunk cotton with liquid-smooth mercerized feel'
    ]
  },
  {
    id: 'yf-sh-05',
    name: 'Citrus & Olive Striped Camp Collar Shirt',
    fullName: 'You Fashion Two-Tone Awning Stripe Linen-Blend Resort Shirt',
    category: 'shirts',
    price: 2399,
    originalPrice: 3199,
    rating: 4.8,
    reviewCount: 92,
    isBestseller: true,
    isNew: true,
    image: shirt05Img,
    secondaryImage: shirt05Img,
    description: 'A vibrant summer statement woven from breathable European flax linen and combed cotton. Features bold vertical awning stripes in citrus lime and olive green, finished with a retro Cuban camp collar and chest script embroidery.',
    fabric: '55% European Flax Linen, 45% Combed Cotton',
    fit: 'Relaxed Camp Collar Boxy Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Two-tone citrus lime and forest olive vertical stripe weave',
      'Convertible Cuban camp collar for breezy airflow',
      'Mother-of-pearl buttons with reinforced cross-stitching',
      'Clean boxy hemline designed for fluid untucked drape'
    ]
  },
  {
    id: 'yf-sh-06',
    name: 'Mineral Washed Tartan-Sleeve Hybrid Shirt',
    fullName: 'You Fashion Mineral-Wash Double-Layer Flannel Sleeve Shirt',
    category: 'shirts',
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 94,
    isBestseller: true,
    isNew: true,
    image: henley01Img,
    secondaryImage: henley01Img,
    description: 'An avant-garde 2-in-1 layered silhouette combining a washed black mineral-dyed cotton henley body with long sleeves tailored from soft black-and-white tartan flannel. Finished with a 4-button placket and delicate chest script embroidery.',
    fabric: '100% Combed Cotton Body (280 GSM) & Brushed Tartan Flannel Sleeves',
    fit: 'Relaxed Boxy Layered Drop-Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Unique 2-in-1 double-layer hybrid construction',
      'Mineral stone wash for lived-in vintage charcoal fade',
      'Premium brushed cotton monochrome tartan flannel sleeves',
      'Four-button henley throat placket with ribbed raw collar edging'
    ]
  },

  // ----------------- 2. T-SHIRTS & POLOS (6 items) -----------------
  {
    id: 'yf-ts-01',
    name: 'Mocha & Cream Rugby Long-Sleeve Polo',
    fullName: 'You Fashion Heavyweight Combed Cotton Striped Polo',
    category: 't-shirts',
    price: 2199,
    originalPrice: 2899,
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isNew: true,
    image: polo01Img,
    secondaryImage: polo01Img,
    description: 'A collegiate luxury staple tailored from 300 GSM combed cotton jersey in rich mocha brown and cream broad horizontal rugby stripes. Finished with a clean contrast white collar, enclosed button placket, and retro heritage chest embroidery.',
    fabric: '100% Heavy Combed Cotton Rugby Jersey (300 GSM)',
    fit: 'Relaxed Drop-Shoulder Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast woven white polo collar with concealed rubberized buttons',
      'Engineered broad horizontal mocha and cream stripe blocks',
      'Vintage athletic chest emblem embroidery',
      'Ribbed cuffs that maintain wrist retention'
    ]
  },
  {
    id: 'yf-ts-02',
    name: 'Espresso Cocoa Contrast-Collar Polo',
    fullName: 'You Fashion Heavyweight Cotton Drop-Shoulder Camp Polo',
    category: 't-shirts',
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewCount: 165,
    isBestseller: true,
    isNew: true,
    image: polo03Img,
    secondaryImage: polo03Img,
    description: 'Crafted from rich chocolate espresso brown heavyweight combed cotton jersey. Accented with a crisp optical white spread polo collar, open V-neck placket, and retro script typography across the lower chest.',
    fabric: '100% Heavy Combed Cotton Jersey (260 GSM)',
    fit: 'Relaxed Drop-Shoulder Boxy Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast optical white knit collar with open throat placket',
      'Artisanal chest insignia and lower cursive script embroidery',
      'Elbow-length dropped shoulder sleeves for modern summer drape',
      'Pre-washed combed cotton jersey with velvety soft hand'
    ]
  },
  {
    id: 'yf-ts-03',
    name: 'Noir Heritage Athletic Jersey Polo',
    fullName: 'You Fashion Retro Striped V-Collar Numbered Football Polo',
    category: 't-shirts',
    price: 1999,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 98,
    isBestseller: true,
    isNew: true,
    image: polo02Img,
    secondaryImage: polo02Img,
    description: 'Inspired by retro sports archives. Features a crisp contrast white spread collar, striped rib V-neck insert, club shield embroidery on chest, and bold athletic numbering on front.',
    fabric: 'Silky Breathable Piqué Micro-Mesh (220 GSM)',
    fit: 'Boxy Retro Athletic Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast optical white knit collar with double-striped V-insert',
      'White banded sleeve cuffs with double-stripe tipping',
      'High-definition embroidered crest and block number 10',
      'Moisture-wicking micro-mesh hand feel'
    ]
  },
  {
    id: 'yf-ts-04',
    name: 'Obsidian Black Contrast-Collar Mercerized Polo',
    fullName: 'You Fashion Italian Mercerized Cotton Three-Button Polo',
    category: 't-shirts',
    price: 2199,
    originalPrice: 2899,
    rating: 4.8,
    reviewCount: 94,
    isBestseller: true,
    isNew: true,
    image: polo04Img,
    secondaryImage: polo04Img,
    description: 'A masterclass in modern monochrome minimalism. Pure obsidian black double-mercerized Egyptian cotton crowned with a pointed contrast optic white shirt collar and clean three-button placket.',
    fabric: '100% Double-Mercerized Egyptian Cotton (220 GSM)',
    fit: 'Tailored Smart Regular Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Crisp contrast white shirt collar with sharp interlining',
      'Clean three-button front placket with contrast white buttons',
      'Double-mercerized finish for a liquid-smooth hand feel',
      'Anti-crease evening suiting knit'
    ]
  },
  {
    id: 'yf-ts-05',
    name: 'Imperial Emerald Tipped Knit Johnny Polo',
    fullName: 'You Fashion Fine-Gauge Knit Open-Collar Resort Polo',
    category: 't-shirts',
    price: 2499,
    originalPrice: 3299,
    rating: 5.0,
    reviewCount: 122,
    isBestseller: true,
    isNew: true,
    image: polo05Img,
    secondaryImage: polo05Img,
    description: 'Bespoke jet black fine-gauge knit polo featuring our signature royal imperial emerald and white striped collar tipping. Finished with an open Johnny collar without buttons and chest monogram embroidery.',
    fabric: '85% Fine Combed Cotton, 15% Mulberry Silk Knit',
    fit: 'Structured Smart Resort Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Seamless Johnny open-collar with imperial emerald stripe tipping',
      'Matching emerald and white knit tipped cuffs and waist hem',
      'Embroidered geometric atelier crest on left chest',
      'High-gauge breathable knit with natural thermal regulation'
    ]
  },
  {
    id: 'yf-ts-06',
    name: 'Crimson Tipped Riviera Piqué Polo',
    fullName: 'You Fashion Mediterranean Contrast-Collar Luxury Polo',
    category: 't-shirts',
    price: 2299,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 88,
    isBestseller: true,
    isNew: true,
    image: polo06Img,
    secondaryImage: polo06Img,
    description: 'Heavyweight optic white peached cotton piqué boasting a vibrant crimson red spread collar with Italian green stripe tipping and matching red sleeve bands. Finished with a circular braided insignia on chest.',
    fabric: 'Heavyweight Peached Cotton-Modal Luxury Piqué (280 GSM)',
    fit: 'Contemporary Boxy Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast crimson red collar with emerald stripe tipping',
      'Banded crimson red sleeve cuffs for structured bicep hold',
      'Embroidered heritage rope-framed circular chest emblem',
      'Ultra-soft peached cotton-modal surface with substantial drape'
    ]
  },
  {
    id: 'yf-ts-07',
    name: 'Burgundy & Midnight Multi-Stripe Rugby Polo',
    fullName: 'You Fashion 320 GSM Heavyweight Pinstriped Collegiate Rugby Shirt',
    category: 't-shirts',
    price: 2399,
    originalPrice: 3199,
    rating: 4.9,
    reviewCount: 118,
    isBestseller: true,
    isNew: true,
    image: polo07Img,
    secondaryImage: polo07Img,
    description: 'Substantial 320 GSM combed cotton jersey tailored with vertical rugby multi-stripes in deep burgundy wine, midnight blue, and amber gold. Crowned with a contrast optic white woven poplin point collar and concealed button placket.',
    fabric: '100% High-Density Combed Cotton Jersey (320 GSM)',
    fit: 'Relaxed Collegiate Drop-Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Vertical engineered multi-stripe pattern in burgundy, midnight, and amber',
      'Crisp optic white woven cotton poplin spread collar',
      'Concealed rubberized button front rugby placket',
      'Heavy-duty 1x1 ribbed cuffs and side split hemline for fluid mobility'
    ]
  },

  // ----------------- 3. JEANS & TROUSERS (5 items) -----------------
  {
    id: 'yf-tr-01',
    name: 'Faded Ash Wide-Leg Artisan Denim',
    fullName: 'You Fashion 14oz Stonewashed Mineral Grey Skate Denim',
    category: 'trousers',
    price: 3499,
    originalPrice: 4699,
    rating: 4.9,
    reviewCount: 168,
    isBestseller: true,
    isNew: true,
    image: denim01Img,
    secondaryImage: denim01Img,
    description: 'Substantial 14oz rigid pure cotton denim treated with artisanal mineral ash stone washing. Architectural wide-leg straight cut engineered for effortless drape and clean footwear stacking.',
    fabric: '100% Ring-Spun Rigid Cotton Denim (14oz)',
    fit: 'Wide-Leg Straight Silhouette',
    sizes: ['30', '32', '34', '36', '38'],
    details: [
      'Substantial 14oz rigid pure cotton denim weave',
      'Artisanal mineral ash stone washing process',
      'Wide-leg straight architectural cut for relaxed stacking',
      'Reinforced back pocket bar-tacking and metal rivets'
    ]
  },
  {
    id: 'yf-tr-02',
    name: 'Heather Grey Wide-Leg Tailored Sweatpants',
    fullName: 'You Fashion 420 GSM Brushed French Terry Relaxed Sweatpants',
    category: 'trousers',
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 114,
    isBestseller: true,
    isNew: true,
    image: trousers01Img,
    secondaryImage: trousers01Img,
    description: 'Architectural wide-leg lounge trousers tailored from dense 420 GSM heather grey brushed French terry. Designed with an encased elastic drawstring waistband, tonal monogram embroidery at the hip, and deep side slant pockets.',
    fabric: '100% Combed Compact Cotton Heavy Terry (420 GSM)',
    fit: 'Wide-Leg Relaxed Drape',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      '420 GSM heavyweight combed cotton loopback fleece',
      'Encased elastic waistband with tonal flat cotton drawcord',
      'Minimalist white embroidered crest at left hip',
      'Clean open hem for effortless pooling over sneakers'
    ]
  },
  {
    id: 'yf-tr-03',
    name: 'Light Vintage Balloon-Fit Skate Denim',
    fullName: 'You Fashion 13.5oz Ice Blue Wide Balloon Skate Jeans',
    category: 'trousers',
    price: 3299,
    originalPrice: 4299,
    rating: 4.9,
    reviewCount: 138,
    isBestseller: true,
    isNew: true,
    image: denim02Img,
    secondaryImage: denim02Img,
    description: 'Distinctive balloon barrel silhouette crafted from authentic 13.5oz rigid cotton denim. Finished with an artisanal light stone and enzyme wash that yields soft vintage marbling along the seams.',
    fabric: '100% Ring-Spun Rigid Cotton Denim (13.5oz)',
    fit: 'Curved Balloon Wide-Leg Silhouette',
    sizes: ['30', '32', '34', '36', '38'],
    details: [
      'Artisanal stone-enzyme wash for vintage ice blue patina',
      'Curved outer seam barrel shape tapering softly at the cuff',
      'Reinforced coin pocket and antique silver hardware',
      '100% rigid cotton that softens and molds with wear'
    ]
  },
  {
    id: 'yf-tr-04',
    name: 'Sun-Bleached Straight-Leg Relaxed Denim',
    fullName: 'You Fashion 14oz Sky Fade Loose-Straight Cotton Jeans',
    category: 'trousers',
    price: 3199,
    originalPrice: 4199,
    rating: 4.8,
    reviewCount: 96,
    isBestseller: true,
    isNew: true,
    image: denim03Img,
    secondaryImage: denim03Img,
    description: 'Essential loose-straight denim rendered in a clean sun-bleached sky blue wash. Crafted from heavyweight 14oz ring-spun cotton denim with authentic five-pocket architecture.',
    fabric: '100% Cotton 14oz Rigid Denim',
    fit: 'Loose Straight-Leg Fit',
    sizes: ['30', '32', '34', '36', '38'],
    details: [
      '14oz high-density rigid cotton denim construction',
      'Sun-bleached sky tint with soft natural whiskers',
      'Classic 5-pocket styling with heavy-duty bar tacks',
      'Straight hem designed for standard break or cuffing'
    ]
  },
  {
    id: 'yf-tr-05',
    name: 'Monochrome Tartan Plaid Wide-Leg Trousers',
    fullName: 'You Fashion Heavy Brushed Flannel Tartan Lounge Pants',
    category: 'trousers',
    price: 2799,
    originalPrice: 3699,
    rating: 4.8,
    reviewCount: 88,
    isBestseller: true,
    isNew: true,
    image: trousers02Img,
    secondaryImage: trousers02Img,
    description: 'Statement wide-leg lounge trousers cut from heavyweight brushed cotton-wool blend flannel in high-contrast black and optic white tartan check. Features a comfortable shirred elastic waistband.',
    fabric: 'Brushed Wool-Touch Flannel (60% Cotton, 40% Poly-Wool)',
    fit: 'Wide-Leg Relaxed Cut',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Ultra-soft double-brushed flannel for warmth and drape',
      'Shirred elasticized waistband for all-day comfort',
      'Generous wide-leg silhouette with natural drop',
      'Dual deep side slant pockets and clean finish seams'
    ]
  },
  {
    id: 'yf-tr-06',
    name: 'Obsidian Black Balloon-Leg Fleece Trousers',
    fullName: 'You Fashion 420 GSM Curved Silhouette Heavy Fleece Sweatpants',
    category: 'trousers',
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 112,
    isBestseller: true,
    isNew: true,
    image: trousers03Img,
    secondaryImage: trousers03Img,
    description: 'Architectural barrel-leg sweatpants constructed from substantial 420 GSM compact combed cotton fleece. Engineered with an encased ribbed waistband, thick tubular tonal drawstrings, and a curved balloon silhouette tailored to drape effortlessly over luxury sneakers.',
    fabric: '100% Combed Compact Cotton Heavy Fleece (420 GSM)',
    fit: 'Sculptural Balloon Barrel Silhouette',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'High-density 420 GSM loopback cotton fleece with velvet-soft interior',
      'Sculptural curved barrel-leg pattern tapering cleanly at the hem',
      'Encased ribbed waistband with heavy tonal tubular cotton drawstrings',
      'Deep side-seam pockets and reinforced bar-tacked stress points'
    ]
  },
  {
    id: 'yf-tr-07',
    name: 'Calligraphic Script Melange Lounge Sweatpants',
    fullName: 'You Fashion 450 GSM Heavy French Terry Script Puddle Pants',
    category: 'trousers',
    price: 2699,
    originalPrice: 3599,
    rating: 5.0,
    reviewCount: 129,
    isBestseller: true,
    isNew: true,
    image: trousers04Img,
    secondaryImage: trousers04Img,
    description: 'Relaxed streetwear sweatpants rendered in premium melange heather grey 450 GSM cotton fleece. Embellished with an elegant vertical flourish calligraphic script running down the left leg, contrast ivory drawstrings, and a generous pooling puddle hem.',
    fabric: '100% Pure Combed French Terry Cotton Fleece (450 GSM)',
    fit: 'Wide-Leg Puddle Fit with Gentle Flare',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'High-density vertical calligraphic script print along left calf',
      'Contrast optic ivory flat-braided cotton drawstring with metal aglets',
      'Generous wide-leg puddle drape designed for effortless stacking over sneakers',
      'Heavyweight cross-grain fleece pre-shrunk for enduring shape'
    ]
  },
  {
    id: 'yf-tr-08',
    name: 'Washed Obsidian Multi-Pocket Utility Cargo Jeans',
    fullName: 'You Fashion 13.5oz Mineral Washed Tactical Quad-Pocket Cargo Denim',
    category: 'trousers',
    price: 3699,
    originalPrice: 4899,
    rating: 4.9,
    reviewCount: 145,
    isBestseller: true,
    isNew: true,
    image: denim04Img,
    secondaryImage: denim04Img,
    description: 'Tactical architectural cargo jeans constructed from 13.5oz rigid cotton bull denim in washed mineral obsidian. Features four oversized 3D box-pleat cargo pockets with snap closures, horizontal utility straps, and adjustable ankle tabs.',
    fabric: '100% Ring-Spun Rigid Cotton Bull Denim (13.5oz)',
    fit: 'Wide-Leg Straight Utility Silhouette',
    sizes: ['30', '32', '34', '36', '38'],
    details: [
      'Four 3D expandable cargo box-pockets with concealed snap flap closures',
      'Artisanal enzyme stone wash producing deep mineral charcoal fading',
      'Horizontal reinforcement utility straps along outer side seams',
      'Heavy-duty antique silver shank button and YKK zip fly'
    ]
  },

  // ----------------- 4. JACKETS & BLAZERS (5 items) -----------------
  {
    id: 'yf-jk-01',
    name: 'Heritage Chenille-Patch Varsity Bomber Jacket',
    fullName: 'You Fashion Wool-Blend Letterman Jacket with Leatherette Sleeves',
    category: 'jackets',
    price: 5499,
    originalPrice: 7499,
    rating: 5.0,
    reviewCount: 164,
    isBestseller: true,
    isNew: true,
    image: jacket04Img,
    secondaryImage: jacket04Img,
    description: 'Iconic varsity letterman silhouette built with a dense black wool-blend melton body and contrast ivory calf-grain leatherette sleeves. Adorned with a 3D chenille letter patch and striped 2x2 ribbed collar and hem.',
    fabric: 'Heavyweight Wool-Blend Melton & Calf-Grain Vegan Leather',
    fit: 'Boxy Retro Varsity Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Dense wool-blend body with supple contrast leatherette sleeves',
      'Dimensional chenille letterman "B" patch with year embroidery',
      'Classic metal snap-button front placket',
      'Striped 2x2 athletic ribbing at collar, cuffs, and waist',
      'Quilted satin interior with welt hand pockets'
    ]
  },
  {
    id: 'yf-jk-02',
    name: 'Monochrome Leatherette Moto Racing Jacket',
    fullName: 'You Fashion Paneled Faux-Leather Biker Overjacket',
    category: 'jackets',
    price: 5899,
    originalPrice: 7999,
    rating: 4.9,
    reviewCount: 148,
    isBestseller: true,
    isNew: true,
    image: jacket01Img,
    secondaryImage: jacket01Img,
    description: 'An architectural racing statement crafted from supple matte vegan leather in bold black and ivory color-blocking. Engineered with an articulated curved silhouette, ergonomic raglan sleeves, high-density chest racing graphic, and snap-collar throat latch.',
    fabric: 'Supple Micro-Grain Vegan Leather with Satin Lining',
    fit: 'Boxy Articulated Moto Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Contrast optical ivory chest contour panel with racing script patch',
      'Biker mandarin collar with dual brass snap-button tab',
      'Heavy-duty two-way YKK silver zipper front closure',
      'Silky diamond-quilted internal satin lining with interior security pocket'
    ]
  },
  {
    id: 'yf-jk-03',
    name: 'Minimalist Obsidian Leatherette Zip Jacket',
    fullName: 'You Fashion Spread-Collar Boxy Faux-Leather Blouson',
    category: 'jackets',
    price: 4999,
    originalPrice: 6799,
    rating: 4.9,
    reviewCount: 110,
    isBestseller: true,
    isNew: true,
    image: jacket02Img,
    secondaryImage: jacket02Img,
    description: 'The epitome of refined modern minimalism. Tailored from buttery smooth matte obsidian vegan leather with a clean spread shirt collar, full silver zip closure, horizontal chest yoke, and discreet side welt pockets.',
    fabric: 'Premium Matte Vegan Leather (Fully Lined)',
    fit: 'Clean Boxy Blouson Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Sharp spread shirt collar with clean interior canvas',
      'Full-length heavy silver zipper with engraved minimalist pull',
      'Horizontal front and rear yoke seams for subtle structure',
      'Discreet slant hand warmer pockets set into front panels'
    ]
  },
  {
    id: 'yf-jk-04',
    name: 'Architectural Cyber Biker Leatherette Jacket',
    fullName: 'You Fashion 3D Appliqué Moto Racing Leather Jacket',
    category: 'jackets',
    price: 6499,
    originalPrice: 8499,
    rating: 5.0,
    reviewCount: 86,
    isBestseller: true,
    isNew: true,
    image: jacket03Img,
    secondaryImage: jacket03Img,
    description: 'Avant-garde motorcycle silhouette constructed from substantial textured black vegan leather. Features dimensional 3D leather appliqué framing the chest and torso, padded accordion shoulder ridges, and articulated bicep panels.',
    fabric: 'Heavyweight Textured Vegan Biker Leather',
    fit: 'Sculptural Heavy Moto Biker Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Dimensional 3D leatherette graphic appliqué with silver contrast piping',
      'Ribbed accordion padded shoulder impact ridges',
      'Stand-up racer collar with snap-button throat tab',
      'Heavyweight metallic hardware and reinforced double-needle seams'
    ]
  },
  {
    id: 'yf-jk-05',
    name: 'Burgundy Studded Western Leatherette Blouson',
    fullName: 'You Fashion Crimson Vegan Leather Western Yoke Jacket',
    category: 'jackets',
    price: 5299,
    originalPrice: 6999,
    rating: 4.9,
    reviewCount: 122,
    isBestseller: true,
    isNew: true,
    image: jacket05Img,
    secondaryImage: jacket05Img,
    description: 'Sensational deep wine-red vegan leather blouson showcasing curved Western-style yoke seams. Embellished on the rear yoke with studded rhinestone script and finished with a sharp spread shirt collar.',
    fabric: 'Rich Crimson Grain Vegan Leather (Full Poly-Satin Lining)',
    fit: 'Cropped Boxy Western Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Lustrous wine burgundy faux leather with natural supple grain',
      'Curved Western front and back chest yokes',
      'Studded crystal-embellished script motif on back shoulder panel',
      'Polished metal front zip and ribbed gathered waistband',
      'Slanted side welt pockets with smooth poly-satin interior'
    ]
  },
  {
    id: 'yf-jk-06',
    name: 'Grand Prix Tricolor Motorsport Leatherette Jacket',
    fullName: 'You Fashion Racing Biker Leatherette Padded Jacket',
    category: 'jackets',
    price: 6999,
    originalPrice: 9499,
    rating: 5.0,
    reviewCount: 188,
    isBestseller: true,
    isNew: true,
    image: jacket06Img,
    secondaryImage: jacket06Img,
    description: 'High-octane motorsport aesthetic engineered from heavy-duty textured vegan leather in fiery red, optic white, and obsidian black colorways. Features racing sponsor patches, stand-up racer collar, and quilted impact protection.',
    fabric: 'Heavyweight Textured Vegan Racing Leather with Satin Quilted Lining',
    fit: 'Sculptural Padded Racing Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'High-density graphic racing patches and dual charging crest motif',
      'Snap-button racer mandarin throat collar',
      'Heavyweight YKK front zipper with twin zippered chest vents',
      'Diamond quilted thermal lining for warmth and wind protection',
      'Articulated elbow panels with contrast color blocking'
    ]
  },

  // ----------------- 5. HOODIES & KNITWEAR (5 items) -----------------
  {
    id: 'yf-kw-01',
    name: 'Ivory Varsity Ribbed Crewneck Sweatshirt',
    fullName: 'You Fashion 420 GSM Striped Ribbed Collar French Terry Sweatshirt',
    category: 'knitwear',
    price: 2699,
    originalPrice: 3499,
    rating: 5.0,
    reviewCount: 116,
    isBestseller: true,
    isNew: true,
    image: sweatshirt01Img,
    secondaryImage: sweatshirt01Img,
    description: 'A timeless athletic collegiate silhouette crafted from 420 GSM off-white French terry. Accented with contrast black-and-white varsity striped ribbing at the neck, cuffs, and waist hem, and finished with a minimalist chest emblem.',
    fabric: '100% Combed Compact Cotton Heavy Terry (420 GSM)',
    fit: 'Classic Collegiate Relaxed Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast black and ivory multi-striped ribbed collar and hem',
      'Reinforced neck tape and cross-grain anti-shrink construction',
      'Minimalist embroidered athletic crest on chest and sleeve',
      'Ultra-dense loopback interior for breathable thermal comfort'
    ]
  },
  {
    id: 'yf-kw-02',
    name: 'Espresso & Camel Colorblock Quarter-Zip Pullover',
    fullName: 'You Fashion Heavy French Terry Contrast Polo Sweatshirt',
    category: 'knitwear',
    price: 2999,
    originalPrice: 3899,
    rating: 4.9,
    reviewCount: 128,
    isBestseller: true,
    isNew: true,
    image: pullover01Img,
    secondaryImage: pullover01Img,
    description: 'A distinctive sartorial statement featuring rich espresso brown and camel-tan horizontal paneling with crisp white piping. Finished with a white spread polo collar and high-polish silver quarter-zip.',
    fabric: '100% Combed Loopback Cotton French Terry (420 GSM)',
    fit: 'Athletic Relaxed Drop-Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Contrast white polo collar with polished metal quarter-zip',
      'Engineered camel and white piped horizontal paneling',
      'Drop shoulder relaxed collegiate silhouette',
      'Pre-washed combed cotton jersey with velvety soft interior'
    ]
  },
  {
    id: 'yf-kw-03',
    name: 'Monochrome Rugby Block-Stripe Half-Zip Sweater',
    fullName: 'You Fashion Heavyweight Cotton Striped Quarter-Zip Top',
    category: 'knitwear',
    price: 2799,
    originalPrice: 3599,
    rating: 4.8,
    reviewCount: 102,
    isBestseller: true,
    isNew: true,
    image: pullover02Img,
    secondaryImage: pullover02Img,
    description: 'Bold monochrome aesthetic with broad black and optic white rugby stripes. Cut with a sculptural drop shoulder, contrast white collar, and heavy-duty silver quarter-zipper.',
    fabric: '100% Dense Compact Cotton Double-Knit (380 GSM)',
    fit: 'Sculptural Boxy Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Contrast optical white collar with heavy silver zipper',
      'Engineered broad rugby horizontal block stripes',
      'Sculptural boxy drop-shoulder cut',
      'Anti-pill double-knit surface with clean interior loops'
    ]
  },
  {
    id: 'yf-kw-04',
    name: 'Heather Grey Snap-Placket Heavyweight Hoodie',
    fullName: 'You Fashion 450 GSM Melange Fleece Snap-Collar Hoodie',
    category: 'knitwear',
    price: 3299,
    originalPrice: 4299,
    rating: 4.9,
    reviewCount: 172,
    isBestseller: true,
    isNew: true,
    image: hoodie01Img,
    secondaryImage: hoodie01Img,
    description: 'Constructed from an ultra-dense 450 GSM heather grey cotton fleece. Features an architectural snap-button throat latch under the double-walled hood, tonal chest script, and a seamless kangaroo pocket.',
    fabric: '100% Combed Compact Cotton Heavy Fleece (450 GSM)',
    fit: 'Oversized Sculptural Box Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Architectural snap-button throat latch under hood',
      'Double-layered fleece hood with clean neckline drape',
      'Kangaroo pocket with reinforced bartack stress points',
      'Heavy 2x2 ribbed cuffs and hemband'
    ]
  },
  {
    id: 'yf-kw-05',
    name: 'Shearling-Collar Ivory Fleece Polo',
    fullName: 'You Fashion Sherpa-Trimmed Heavy Fleece Boxy Sweatshirt',
    category: 'knitwear',
    price: 2899,
    originalPrice: 3799,
    rating: 4.9,
    reviewCount: 89,
    isBestseller: true,
    isNew: true,
    image: sweatshirt02Img,
    secondaryImage: sweatshirt02Img,
    description: 'Luxe minimalist pullover rendered in heavyweight optic white fleece and crowned with a tactile chocolate brown sherpa shearling polo collar. Finished with a hidden button placket and tonal script embroidery.',
    fabric: 'Heavyweight Cotton Fleece & Chocolate Sherpa Shearling (400 GSM)',
    fit: 'Boxy Casual Oversize',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Plush chocolate faux-shearling spread collar',
      'Concealed button throat placket for sleek minimalism',
      'Delicate script embroidery across chest',
      'Elasticized ribbed cuffs and waistband for gentle gathering'
    ]
  },
  {
    id: 'yf-kw-06',
    name: 'Ergonomic Reflective Piping Quarter-Zip Pullover',
    fullName: 'You Fashion 380 GSM High-Neck Reflective Contour Track Top',
    category: 'knitwear',
    price: 2599,
    originalPrice: 3499,
    rating: 4.9,
    reviewCount: 104,
    isBestseller: true,
    isNew: true,
    image: pullover03Img,
    secondaryImage: pullover03Img,
    description: 'Minimalist technical pullover rendered in pitch obsidian double-knit jersey. Defined by ergonomic curved silver reflective piping running along the raglan shoulders and front torso, paired with a high funnel neck.',
    fabric: '380 GSM High-Density Cotton-Poly Tech Interlock',
    fit: 'Athletic Ergonomic Relaxed Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      'Silver 3M reflective contour piping along raglan and chest curves',
      'High funnel stand collar with tonal concealed quarter-zipper',
      'Subtle centered chest emblem with silicone matte finish',
      'Double-needle bonded cuffs and waistband for streamlined shape',
      'Breathable interlock knit ideal for trans-seasonal layering'
    ]
  },
  {
    id: 'yf-kw-07',
    name: 'Tonal Earth-Tone Panelled Bouclé Polo Pullover',
    fullName: 'You Fashion Multi-Texture Cord & Bouclé Long-Sleeve Polo',
    category: 'knitwear',
    price: 2899,
    originalPrice: 3899,
    rating: 5.0,
    reviewCount: 106,
    isBestseller: true,
    isNew: true,
    image: pullover04Img,
    secondaryImage: pullover04Img,
    description: 'A tactile textural triumph combining vertical panels of rich espresso brown, warm camel, and chocolate bouclé knit with fine cotton corduroy. Featuring a tailored chest welt pocket, contrasting black collar, and three-button placket.',
    fabric: 'Tactile Bouclé Knit & Combed Cotton Ribbed Corduroy (360 GSM)',
    fit: 'Tailored Boxy Pullover Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Multi-textural vertical blocking with soft bouclé and corduroy ribs',
      'Contrast obsidian black spread polo collar with three button placket',
      'Inlaid vertical chest welt pocket with clean edge stitch',
      'Ribbed cuffs and gathered waist hem for structured silhouette'
    ]
  },
  {
    id: 'yf-kw-08',
    name: 'Royal Pine Chenille-Patch Layered Crewneck Sweatshirt',
    fullName: 'You Fashion 420 GSM 2-in-1 Varsity Letterman Sweatshirt',
    category: 'knitwear',
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isNew: true,
    image: sweatshirt03Img,
    secondaryImage: sweatshirt03Img,
    description: 'Luxe collegiate 2-in-1 layered sweater cut from dense 420 GSM loopback French terry in deep imperial pine green. Features double-layered oatmeal-sand under-sleeves and collar rim, crowned with a large 3D ivory chenille varsity "R" patch.',
    fabric: '100% Combed Compact Cotton Heavy French Terry (420 GSM)',
    fit: 'Oversized Layered Streetwear Silhouette',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      '3D tactile ivory chenille and bouclé varsity "R" letterman patch',
      'Integrated double-layer oatmeal sand under-sleeves and crewneck trim',
      'Subtle script embroidery on lower sleeve and chest',
      '420 GSM cross-grain anti-shrink French terry loopback body'
    ]
  }

];

// Helper to look up product by ID
export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

// Helper to get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
};

// Legal details helper constants
export const LEGAL_DETAILS = {
  tradeName: 'You Fashion',
  legalEntity: 'Waseem (Sole Proprietorship)',
  proprietor: 'Waseem',
  gstin: '08AEEPW3402Q1Z0',
  address: {
    line1: 'Building No. 05, Bhiwadi Alwar Road',
    city: 'Bhiwadi',
    district: 'Khairthal Tijara',
    state: 'Rajasthan',
    pincode: '301019',
    country: 'India',
    formatted: 'Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India'
  },
  currency: 'INR',
  currencySymbol: '₹',
  contact: {
    phone: '+91 98765 43210',
    phoneFormatted: '+91 98765 43210',
    phoneHours: 'Mon–Sat, 10:00 AM – 7:00 PM IST',
    supportEmail: 'support@youfashion.in',
    infoEmail: 'info@youfashion.in',
    privacyEmail: 'privacy@youfashion.in'
  },
  thresholds: {
    freeShipping: 1999,
    standardShippingFee: 99
  },
  timelines: {
    dispatchDays: '1–2 business days',
    deliveryDays: '5–7 business days',
    returnWindowDays: 7,
    refundDays: '7–10 business days',
    cancellationWindowHours: 12
  }
};

