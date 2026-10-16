import type { StaticImageData } from "next/image";

/* —— Suppliers: public/images/suppliers-logo/ (every file) —— */
import agrocorpInternational from "../../../../public/images/suppliers-logo/agrocorp-international.webp";
import agrico from "../../../../public/images/suppliers-logo/images.jpg";
import bakhresaGroup from "../../../../public/images/suppliers-logo/images.png";
import orientExports from "../../../../public/images/suppliers-logo/images-1.jpg";
import universalTradeLink from "../../../../public/images/suppliers-logo/images-1.png";
import fmn from "../../../../public/images/suppliers-logo/images-2.jpg";
import grainstarAst from "../../../../public/images/suppliers-logo/images-2.png";
import rakRock from "../../../../public/images/suppliers-logo/images-3.jpg";
import unitedQuarries from "../../../../public/images/suppliers-logo/images-3.png";
import ducorp from "../../../../public/images/suppliers-logo/images-4.jpg";
import louisDreyfusCompany from "../../../../public/images/suppliers-logo/images-4.png";
import olamAgri from "../../../../public/images/suppliers-logo/images-5.jpg";
import bunge from "../../../../public/images/suppliers-logo/images-5.png";
import mmm from "../../../../public/images/suppliers-logo/images-6.jpg";
import vkUdyog from "../../../../public/images/suppliers-logo/vk-udyog.webp";
import metlGroup from "../../../../public/images/suppliers-logo/metl-group.webp";
import atakum from "../../../../public/images/suppliers-logo/atakum.webp";
import azania from "../../../../public/images/suppliers-logo/azania.webp";
import adaniWilmar from "../../../../public/images/suppliers-logo/adani-wilmar.webp";
import cargill from "../../../../public/images/suppliers-logo/cargill.webp";
import everGlory from "../../../../public/images/suppliers-logo/ever-glory.webp";
import oryxMix from "../../../../public/images/suppliers-logo/oryx-mix.webp";
import cofcoIntl from "../../../../public/images/suppliers-logo/cofco-intl.webp";
import adm from "../../../../public/images/suppliers-logo/adm.webp";

/* —— Buyers: public/images/byers-logo/ (every file) —— */
import cccc from "../../../../public/images/byers-logo/cccc.webp";
import crec from "../../../../public/images/byers-logo/crec.webp";
import fdee from "../../../../public/images/byers-logo/fdee.webp";
import mercantileBank from "../../../../public/images/byers-logo/mercantile-bank.webp";
import nabilGroup from "../../../../public/images/byers-logo/nabil-group.webp";
import nourish from "../../../../public/images/byers-logo/nourish.webp";
import qualityFeeds from "../../../../public/images/byers-logo/quality-feeds.webp";
import sdhsCsi from "../../../../public/images/byers-logo/images.jpg";
import akijResource from "../../../../public/images/byers-logo/images.png";
import crfg from "../../../../public/images/byers-logo/images-1.jpg";
import crownCement from "../../../../public/images/byers-logo/images-1.png";
import mbec from "../../../../public/images/byers-logo/images-2.jpg";
import communityBank from "../../../../public/images/byers-logo/images-2.png";
import bashundharaGroup from "../../../../public/images/byers-logo/images-3.jpg";
import karimGroup from "../../../../public/images/byers-logo/images-3.png";
import jteg from "../../../../public/images/byers-logo/images-4.jpg";
import genertecCmc from "../../../../public/images/byers-logo/images-5.jpg";
import ducorpBuyer from "../../../../public/images/byers-logo/images-6.jpg";
import mahbubGroup from "../../../../public/images/byers-logo/images-7.jpg";
import crcc from "../../../../public/images/byers-logo/download.png";
import toaCorporation from "../../../../public/images/byers-logo/download.jpg";
import maddhaparaGranite from "../../../../public/images/byers-logo/download-1.png";
import tokyuCorporation from "../../../../public/images/byers-logo/download-2.png";
import sinohydro from "../../../../public/images/byers-logo/download-3.png";
import obayashi from "../../../../public/images/byers-logo/download-4.png";
import bashundharaEmblem from "../../../../public/images/byers-logo/whatsapp-1.png";
import senaKalyanSangstha from "../../../../public/images/byers-logo/whatsapp-2.jpeg";
import faisalBrothers from "../../../../public/images/byers-logo/whatsapp-3.png";

/** Home / Our Clients logo groups for Smartlink. */
export type BrandCategory = "Buyer" | "Supplier";

export interface Brand {
  id: number;
  name: string;
  image: StaticImageData;
  category: BrandCategory;
}

export const brandsData: Brand[] = [
  // —— Suppliers (24 files from suppliers-logo) ——
  {
    id: 1,
    name: "Agrocorp International",
    image: agrocorpInternational,
    category: "Supplier",
  },
  { id: 2, name: "Agrico", image: agrico, category: "Supplier" },
  {
    id: 3,
    name: "Bakhresa Group",
    image: bakhresaGroup,
    category: "Supplier",
  },
  { id: 4, name: "Orient Exports", image: orientExports, category: "Supplier" },
  {
    id: 5,
    name: "Universal Trade Link",
    image: universalTradeLink,
    category: "Supplier",
  },
  { id: 6, name: "FMN", image: fmn, category: "Supplier" },
  {
    id: 7,
    name: "Grainstar AST",
    image: grainstarAst,
    category: "Supplier",
  },
  { id: 8, name: "RAK Rock", image: rakRock, category: "Supplier" },
  {
    id: 9,
    name: "United Quarries",
    image: unitedQuarries,
    category: "Supplier",
  },
  { id: 10, name: "DuCorp", image: ducorp, category: "Supplier" },
  // Also in byers-logo — still Supplier (not a buyer); kept so no file is unused.
  { id: 53, name: "DuCorp", image: ducorpBuyer, category: "Supplier" },
  {
    id: 11,
    name: "Louis Dreyfus Company",
    image: louisDreyfusCompany,
    category: "Supplier",
  },
  { id: 12, name: "Olam Agri", image: olamAgri, category: "Supplier" },
  { id: 13, name: "Bunge", image: bunge, category: "Supplier" },
  { id: 14, name: "MMM", image: mmm, category: "Supplier" },
  { id: 15, name: "V.K. Udyog Ltd", image: vkUdyog, category: "Supplier" },
  { id: 16, name: "METL Group", image: metlGroup, category: "Supplier" },
  { id: 17, name: "Atakum", image: atakum, category: "Supplier" },
  { id: 18, name: "Azania", image: azania, category: "Supplier" },
  { id: 19, name: "Adani Wilmar", image: adaniWilmar, category: "Supplier" },
  { id: 20, name: "Cargill", image: cargill, category: "Supplier" },
  {
    id: 21,
    name: "Ever Glory General Trading",
    image: everGlory,
    category: "Supplier",
  },
  { id: 22, name: "Oryx Mix", image: oryxMix, category: "Supplier" },
  {
    id: 23,
    name: "COFCO International",
    image: cofcoIntl,
    category: "Supplier",
  },
  { id: 24, name: "ADM", image: adm, category: "Supplier" },

  // —— Buyers (every file from byers-logo except DuCorp, which is Supplier) ——
  { id: 25, name: "CCCC", image: cccc, category: "Buyer" },
  { id: 26, name: "CREC", image: crec, category: "Buyer" },
  {
    id: 27,
    name: "First Dhaka Elevated Expressway",
    image: fdee,
    category: "Buyer",
  },
  {
    id: 28,
    name: "Mercantile Bank Limited",
    image: mercantileBank,
    category: "Buyer",
  },
  {
    id: 29,
    name: "Nabil Group of Industries",
    image: nabilGroup,
    category: "Buyer",
  },
  { id: 30, name: "Nourish", image: nourish, category: "Buyer" },
  {
    id: 31,
    name: "Quality Feeds Limited",
    image: qualityFeeds,
    category: "Buyer",
  },
  { id: 32, name: "SDHS CSI", image: sdhsCsi, category: "Buyer" },
  { id: 33, name: "Akij Resource", image: akijResource, category: "Buyer" },
  { id: 34, name: "CRFG", image: crfg, category: "Buyer" },
  { id: 35, name: "Crown Cement", image: crownCement, category: "Buyer" },
  { id: 36, name: "MBEC", image: mbec, category: "Buyer" },
  {
    id: 37,
    name: "Community Bank",
    image: communityBank,
    category: "Buyer",
  },
  {
    id: 38,
    name: "Bashundhara Group",
    image: bashundharaGroup,
    category: "Buyer",
  },
  { id: 39, name: "Karim Group", image: karimGroup, category: "Buyer" },
  { id: 40, name: "JTEG", image: jteg, category: "Buyer" },
  { id: 41, name: "GENERTEC CMC", image: genertecCmc, category: "Buyer" },
  {
    id: 43,
    name: "Mahbub Group of Industries",
    image: mahbubGroup,
    category: "Buyer",
  },
  { id: 44, name: "CRCC", image: crcc, category: "Buyer" },
  {
    id: 45,
    name: "TOA Corporation",
    image: toaCorporation,
    category: "Buyer",
  },
  {
    id: 46,
    name: "Maddhapara Granite Mining",
    image: maddhaparaGranite,
    category: "Buyer",
  },
  {
    id: 47,
    name: "Tokyu Corporation",
    image: tokyuCorporation,
    category: "Buyer",
  },
  { id: 48, name: "Sinohydro", image: sinohydro, category: "Buyer" },
  { id: 49, name: "Obayashi", image: obayashi, category: "Buyer" },
  {
    id: 50,
    name: "Bashundhara Group",
    image: bashundharaEmblem,
    category: "Buyer",
  },
  {
    id: 51,
    name: "Sena Kalyan Sangstha",
    image: senaKalyanSangstha,
    category: "Buyer",
  },
  {
    id: 52,
    name: "Faisal Brothers",
    image: faisalBrothers,
    category: "Buyer",
  },
];

export const buyerBrands = brandsData.filter((b) => b.category === "Buyer");
export const supplierBrands = brandsData.filter(
  (b) => b.category === "Supplier",
);
