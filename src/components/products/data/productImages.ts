/**
 * Centralized gallery-image registry, one entry per product/service slug.
 *
 * CURRENT STATE: every array below holds verified-working Unsplash demo URLs
 * (temporary stand-ins, not real Smartlink product photos).
 *
 * SWAPPING IN REAL PHOTOS: once real files are dropped into
 * `public/images/<slug>/` (see the README.md placeholder in each folder),
 * replace that slug's array here with local paths, e.g.
 * `["/images/limestone/1.jpg", "/images/limestone/2.jpg", "/images/limestone/3.jpg"]`.
 * No component or page code needs to change — every page reads from this
 * single file.
 */
export const productImages: Record<string, string[]> = {
  "limestone": [
    "https://images.unsplash.com/photo-1700887929202-71242c5b076d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617281660864-df946f2439d6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1667260637672-cfb33668eefb?q=80&w=1200&auto=format&fit=crop",
  ],
  "gabbro-aggregate": [
    "https://images.unsplash.com/photo-1632199670702-3ea3f70909cb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557533618-abdc7b3ae7b0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1670789741624-9cdf7006b38c?q=80&w=1200&auto=format&fit=crop",
  ],
  "clinker": [
    "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1636747423727-2d39d0aa9796?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624484582400-3b947099da49?q=80&w=1200&auto=format&fit=crop",
  ],
  "coal": [
    "https://images.unsplash.com/photo-1593539568552-88c7fcbb06b6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1654461339694-128902c5c075?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572454450295-69d0c63a6db2?q=80&w=1200&auto=format&fit=crop",
  ],
  "wheat-supplier-importer-bangladesh": [
    "https://images.unsplash.com/photo-1561978248-bffcdd0457ad?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1723809356803-bfbc0dfe5f22?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1663025293688-322e16b6cb66?q=80&w=1200&auto=format&fit=crop",
  ],
  "lentils": [
    "https://images.unsplash.com/photo-1730591857303-0fa44be3f677?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1770617476260-1addeea7c826?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1672660589379-891ab59588a8?q=80&w=1200&auto=format&fit=crop",
  ],
  "pulses": [
    "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614494837966-f43d6c869d72?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1786994060314-eccbdd13066d?q=80&w=1200&auto=format&fit=crop",
  ],
  "soyabean-seeds": [
    "https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1728931340275-430196814dc5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1728931339661-1ea66004a2e6?q=80&w=1200&auto=format&fit=crop",
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
  ],
  "wheat-bran": [
    "https://images.unsplash.com/photo-1672587637531-deda3edbf07f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571121338127-8c1586ac602e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1676289124506-bdce1e1acc97?q=80&w=1200&auto=format&fit=crop",
  ],
  "corn-ddgs": [
    "https://images.unsplash.com/photo-1641914086759-6f76fae98cd9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634467524884-897d0af5e104?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1635843105990-4f08403ecc12?q=80&w=1200&auto=format&fit=crop",
  ],
  "soyabean-meal": [
    "https://images.unsplash.com/photo-1572457224112-06d191bb6d01?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1630095829721-5179c495f1cf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758158329346-bed873fb6d9a?q=80&w=1200&auto=format&fit=crop",
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
  ],
  "cotton": [
    "https://images.unsplash.com/photo-1633527992904-53f86f81a23a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634337781106-4c6a12b820a1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1648908833245-86fe424f47a0?q=80&w=1200&auto=format&fit=crop",
  ],
  "vessel-chartering": [
    "https://images.unsplash.com/photo-1604506522146-316c8bedd874?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1714638769201-fb0b88589eb6?q=80&w=1200&auto=format&fit=crop",
  ],
};
