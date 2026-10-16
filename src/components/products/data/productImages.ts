/**
 * Centralized gallery-image registry, one entry per product/service slug.
 *
 * Real photos live under `public/images/<slug>/` (copied from heroimg where needed).
 * Still partly on Unsplash: green-mung (except last local photo).
 */
export const productImages: Record<string, string[]> = {
  limestone: [
    "/images/limestone/limestone-1.jpeg",
    "/images/limestone/limestone-2.jpeg",
    "/images/limestone/limestone-3.jpeg",
    "/images/limestone/limestone-4.jpeg",
  ],
  "gabbro-aggregate": [
    "/images/gabbro-aggregate/gabbro-1.jpeg",
    "/images/gabbro-aggregate/gabbro-2.jpeg",
    "/images/gabbro-aggregate/gabbro-3.jpeg",
    "/images/gabbro-aggregate/gabbro-4.jpeg",
    "/images/gabbro-aggregate/gabbro-5.jpeg",
  ],
  clinker: [
    "/images/clinker/clinker-1.png",
    "/images/clinker/clinker-2.png",
    "/images/clinker/clinker-3.png",
    "/images/clinker/clinker-4.png",
  ],
  coal: [
    "/images/coal/coal-1.png",
    "/images/coal/coal-2.png",
    "/images/coal/coal-3.png",
    "/images/coal/coal-4.png",
  ],
  "wheat-supplier-importer-bangladesh": [
    "/images/Wheat/wheat-1.png",
    "/images/Wheat/wheat-3.png",
    "/images/Wheat/images.jpg",
    "/images/Wheat/images-1.jpg",
  ],
  lentils: ["/images/lentils/lentils-1.png"],
  pulses: ["/images/pulses/pulses-1.png"],
  // Combined Lentils & Pulses page
  "lentils-pulses": [
    "/images/lentils-pulses/lentils-pulses-1.jpg",
    "/images/lentils-pulses/lentils-pulses-2.jpg",
    "/images/lentils-pulses/lentils-pulses-3.jpg",
    "/images/lentils-pulses/lentils-pulses-4.jpg",
  ],
  "soyabean-seeds": [
    "/images/soyabean-seeds/soyabean-seeds-1.jpeg",
    "/images/soyabean-seeds/soyabean-seeds-2.jpeg",
    "/images/soyabean-seeds/soyabean-seeds-3.jpeg",
  ],
  "canola-seeds": [
    "/images/canola-seeds/images.jpg",
    "/images/canola-seeds/images-1.jpg",
    "/images/canola-seeds/images-2.jpg",
    "/images/canola-seeds/images-3.jpg",
  ],
  "green-mung": [
    "https://images.unsplash.com/photo-1788629531534-0a69edec70f7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758701925687-1449ab265c2e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1788629531508-c0d971473c37?q=80&w=1200&auto=format&fit=crop",
    "/images/green-mung/green-mung-4.png",
  ],
  "wheat-bran": [
    "/images/wheat-bran/wheat-bran-1.jpeg",
    "/images/wheat-bran/wheat-bran-2.jpeg",
    "/images/wheat-bran/wheat-bran-3.jpeg",
  ],
  "corn-maize": [
    "/images/corn-maize/images.jpg",
    "/images/corn-maize/images-1.jpg",
    "/images/corn-maize/images-2.jpg",
  ],
  "corn-ddgs": [
    "/images/corn-ddgs/corn-ddgs-1.jpeg",
    "/images/corn-ddgs/corn-ddgs-2.jpeg",
    "/images/corn-ddgs/corn-ddgs-3.jpeg",
    "/images/corn-ddgs/corn-ddgs-4.jpeg",
  ],
  "soyabean-meal": [
    "/images/soyabean-meal/soyabean-meal-1.png",
    "/images/soyabean-meal/soyabean-meal-2.png",
    "/images/soyabean-meal/soyabean-meal-3.png",
    "/images/soyabean-meal/soyabean-meal-4.png",
  ],
  "poultry-meal": [
    "/images/poultry-meal/poultry-meal-1.png",
    "/images/poultry-meal/poultry-meal-2.png",
    "/images/poultry-meal/images.jpg",
    "/images/poultry-meal/images-1.jpg",
  ],
  "rapeseed-meal": [
    "/images/rapeseed-meal/rapeseed-meal-1.jpg",
    "/images/rapeseed-meal/rapeseed-meal-2.jpg",
    "/images/rapeseed-meal/rapeseed-meal-3.jpg",
    "/images/rapeseed-meal/rapeseed-meal-4.jpg",
  ],
  cotton: [
    "/images/cotton/cotton-1.png",
    "/images/cotton/cotton-2.png",
    "/images/cotton/cotton-3.png",
    "/images/cotton/cotton-4.png",
    "/images/cotton/cotton-5.png",
    "/images/cotton/cotton-6.jpg",
    "/images/cotton/cotton-7.jpg",
    "/images/cotton/cotton-8.jpg",
  ],
  // Unique images only — no repeats across sections.
  "vessel-chartering": [
    "/images/vessel-chartering/vessel-chartering-1.jpeg",
    "/images/vessel-chartering/vessel-chartering-2.jpeg",
    "/images/vessel-chartering/vessel-chartering-3.jpeg",
    "/images/vessel-chartering/vessel-chartering-4.jpeg",
    "/images/vessel-chartering/vessel-chartering-5.jpeg",
    "/images/vessel-chartering/vessel-chartering-6.jpg",
  ],
  "port-handling": [
    "/images/port-handling/port-handling-1.jpeg",
    "/images/port-handling/port-handling-2.jpeg",
    "/images/port-handling/port-handling-3.jpeg",
    "/images/port-handling/port-handling-4.webp",
  ],
  stevedoring: [
    "/images/stevedoring/stevedoring-1.jpg",
    "/images/stevedoring/stevedoring-2.jpg",
    "/images/stevedoring/stevedoring-3.jpg",
    "/images/stevedoring/stevedoring-4.jpg",
  ],
  "inland-water-transport": [
    "/images/inland-water-transport/inland-water-transport-1.jpeg",
    "/images/inland-water-transport/inland-water-transport-2.jpeg",
    "/images/inland-water-transport/inland-water-transport-3.webp",
    "/images/inland-water-transport/inland-water-transport-4.webp",
  ],
  "truck-transportation": [
    "/images/truck-transportation/truck-transportation-1.jpg",
    "/images/truck-transportation/truck-transportation-2.jpg",
    "/images/truck-transportation/truck-transportation-3.jpg",
    "/images/truck-transportation/truck-transportation-4.jpg",
    "/images/truck-transportation/truck-transportation-5.jpg",
    "/images/truck-transportation/truck-transportation-6.jpg",
  ],
  "heavy-equipment-rental": [
    "/images/heavy-equipment-rental/he-rental-1.jpg",
    "/images/heavy-equipment-rental/he-rental-2.jpg",
    "/images/heavy-equipment-rental/he-rental-3.jpg",
    "/images/heavy-equipment-rental/he-rental-4.jpg",
  ],
};
