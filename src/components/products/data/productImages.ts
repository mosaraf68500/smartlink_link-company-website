/**
 * Centralized gallery-image registry, one entry per product/service slug.
 *
 * Real photos live under `public/images/<slug>/`. Pages read from this
 * single file — swap paths here when new assets arrive.
 *
 * Still on Unsplash placeholders: clinker, coal, wheat, lentils, pulses,
 * canola-seeds, green-mung, soyabean-meal, poultry-meal, rapeseed-meal, cotton.
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
    "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1636747423727-2d39d0aa9796?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624484582400-3b947099da49?q=80&w=1200&auto=format&fit=crop",
  ],
  coal: [
    "https://images.unsplash.com/photo-1593539568552-88c7fcbb06b6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1654461339694-128902c5c075?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572454450295-69d0c63a6db2?q=80&w=1200&auto=format&fit=crop",
  ],
  "wheat-supplier-importer-bangladesh": [
    "https://images.unsplash.com/photo-1561978248-bffcdd0457ad?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1723809356803-bfbc0dfe5f22?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1663025293688-322e16b6cb66?q=80&w=1200&auto=format&fit=crop",
  ],
  lentils: [
    "https://images.unsplash.com/photo-1730591857303-0fa44be3f677?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1770617476260-1addeea7c826?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1672660589379-891ab59588a8?q=80&w=1200&auto=format&fit=crop",
  ],
  pulses: [
    "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614494837966-f43d6c869d72?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1786994060314-eccbdd13066d?q=80&w=1200&auto=format&fit=crop",
  ],
  // Combined Lentils & Pulses page — unique images only (no repeats).
  "lentils-pulses": [
    "https://images.unsplash.com/photo-1730591857303-0fa44be3f677?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614494837966-f43d6c869d72?q=80&w=1200&auto=format&fit=crop",
  ],
  "soyabean-seeds": [
    "/images/soyabean-seeds/soyabean-seeds-1.jpeg",
    "/images/soyabean-seeds/soyabean-seeds-2.jpeg",
    "/images/soyabean-seeds/soyabean-seeds-3.jpeg",
  ],
  "canola-seeds": [
    "https://images.unsplash.com/photo-1776285760757-c1dc3faaf49a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599652087006-e7318231a70f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589715246045-e881ef9f5c16?q=80&w=1200&auto=format&fit=crop",
  ],
  "green-mung": [
    "https://images.unsplash.com/photo-1788629531534-0a69edec70f7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758701925687-1449ab265c2e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1788629531508-c0d971473c37?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1200&auto=format&fit=crop",
  ],
  "wheat-bran": [
    "/images/wheat-bran/wheat-bran-1.jpeg",
    "/images/wheat-bran/wheat-bran-2.jpeg",
    "/images/wheat-bran/wheat-bran-3.jpeg",
  ],
  "corn-ddgs": [
    "/images/corn-ddgs/corn-ddgs-1.jpeg",
    "/images/corn-ddgs/corn-ddgs-2.jpeg",
    "/images/corn-ddgs/corn-ddgs-3.jpeg",
    "/images/corn-ddgs/corn-ddgs-4.jpeg",
  ],
  "soyabean-meal": [
    "https://images.unsplash.com/photo-1572457224112-06d191bb6d01?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1630095829721-5179c495f1cf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758158329346-bed873fb6d9a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
  ],
  "poultry-meal": [
    "https://images.unsplash.com/photo-1538170989343-ce003278e1a3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620136717591-841a4da27e23?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1694854038360-56b29a16fb0c?q=80&w=1200&auto=format&fit=crop",
  ],
  "rapeseed-meal": [
    "https://images.unsplash.com/photo-1587973367556-9237e51df783?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1666016169475-abb98ae6ff82?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1778350514204-9079b1a955a9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
  ],
  // Unique images — one per content section (no repeats within a product).
  cotton: [
    "https://images.unsplash.com/photo-1633527992904-53f86f81a23a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634337781106-4c6a12b820a1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1648908833245-86fe424f47a0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop",
  ],
  // One unique image per service section — no repeats.
  "vessel-chartering": [
    "/images/bulk_chartering/bulk-chartering-1.jpeg",
    "/images/bulk_chartering/bulk-chartering-2.jpeg",
    "/images/bulk_chartering/bulk-chartering-3.jpeg",
    "/images/work/ship-01.png",
    "/images/work/ship-02.png",
    "/images/work/ship-03.png",
    "/images/cta/ship-01.png",
  ],
};
