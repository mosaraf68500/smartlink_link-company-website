import type { StaticImageData } from "next/image";

import agrocorpInternational from "../../../../public/images/suppliers/agrocorp-international.png";
import agrico from "../../../../public/images/suppliers/agrico.png";
import orientExports from "../../../../public/images/suppliers/orient-exports.png";
import bakhresaGroup from "../../../../public/images/suppliers/bakhresa-group.png";
import universalTradeLink from "../../../../public/images/suppliers/universal-trade-link.png";
import vkUdyog from "../../../../public/images/suppliers/vk-udyog.png";
import fmn from "../../../../public/images/suppliers/fmn.png";
import metlGroup from "../../../../public/images/suppliers/metl-group.png";
import atakum from "../../../../public/images/suppliers/atakum.png";
import azania from "../../../../public/images/suppliers/azania.png";
import grainstarAst from "../../../../public/images/suppliers/grainstar-ast.png";
import adaniWilmar from "../../../../public/images/suppliers/adani-wilmar.png";
import cargill from "../../../../public/images/suppliers/cargill.png";
import mmm from "../../../../public/images/suppliers/mmm.png";
import everGlory from "../../../../public/images/suppliers/ever-glory.png";
import unitedQuarries from "../../../../public/images/suppliers/united-quarries.png";
import rakRock from "../../../../public/images/suppliers/rak-rock.png";
import oryxMix from "../../../../public/images/suppliers/oryx-mix.png";
import cofcoIntl from "../../../../public/images/suppliers/cofco-intl.png";
import adm from "../../../../public/images/suppliers/adm.png";
import masafiCrusher from "../../../../public/images/suppliers/masafi-crusher.png";
import louisDreyfusCompany from "../../../../public/images/suppliers/louis-dreyfus-company.png";

import cccc from "../../../../public/images/buyers/cccc.png";
import crcc from "../../../../public/images/buyers/crcc.png";
import crec from "../../../../public/images/buyers/crec.png";
import maddhaparaGranite from "../../../../public/images/buyers/maddhapara-granite.png";
import tokyuCorporation from "../../../../public/images/buyers/tokyu-corporation.png";
import sinohydro from "../../../../public/images/buyers/sinohydro.png";
import toaCorporation from "../../../../public/images/buyers/toa-corporation.png";
import obayashi from "../../../../public/images/buyers/obayashi.png";
import chinaShandongInternational from "../../../../public/images/buyers/china-shandong-international.png";
import crfg from "../../../../public/images/buyers/crfg.png";
import akijResource from "../../../../public/images/buyers/akij-resource.png";
import mbec from "../../../../public/images/buyers/mbec.png";
import bashundharaGroup from "../../../../public/images/buyers/bashundhara-group.png";
import crownCement from "../../../../public/images/buyers/crown-cement.png";
import senaKalyanSangstha from "../../../../public/images/buyers/sena-kalyan-sangstha.png";
import nabilGroup from "../../../../public/images/buyers/nabil-group.png";
import communityBank from "../../../../public/images/buyers/community-bank.png";
import mercantileBank from "../../../../public/images/buyers/mercantile-bank.png";
import qualityFeeds from "../../../../public/images/buyers/quality-feeds.png";
import nourish from "../../../../public/images/buyers/nourish.png";
import jteg from "../../../../public/images/buyers/jteg.png";
import genertecCmc from "../../../../public/images/buyers/genertec-cmc.png";
import ducorp from "../../../../public/images/buyers/ducorp.png";
import fdee from "../../../../public/images/buyers/fdee.png";
import faisalBrothers from "../../../../public/images/buyers/faisal-brothers.png";
import mahbubGroup from "../../../../public/images/buyers/mahbub-group.png";
import karimGroup from "../../../../public/images/buyers/karim-group.png";

/** Home / Our Clients logo groups for Smartlink. */
export type BrandCategory = "Buyer" | "Supplier";

export interface Brand {
  id: number;
  name: string;
  image: StaticImageData;
  category: BrandCategory;
}

export const brandsData: Brand[] = [
  // —— Suppliers ——
  {
    id: 1,
    name: "Agrocorp International",
    image: agrocorpInternational,
    category: "Supplier",
  },
  { id: 2, name: "Agrico", image: agrico, category: "Supplier" },
  { id: 3, name: "Orient Exports", image: orientExports, category: "Supplier" },
  {
    id: 4,
    name: "Bakhresa Group",
    image: bakhresaGroup,
    category: "Supplier",
  },
  {
    id: 5,
    name: "Universal Trade Link",
    image: universalTradeLink,
    category: "Supplier",
  },
  { id: 6, name: "V.K. Udyog Ltd", image: vkUdyog, category: "Supplier" },
  { id: 7, name: "FMN", image: fmn, category: "Supplier" },
  { id: 8, name: "METL Group", image: metlGroup, category: "Supplier" },
  { id: 9, name: "Atakum", image: atakum, category: "Supplier" },
  { id: 10, name: "Azania", image: azania, category: "Supplier" },
  {
    id: 11,
    name: "Grainstar AST",
    image: grainstarAst,
    category: "Supplier",
  },
  { id: 12, name: "Adani Wilmar", image: adaniWilmar, category: "Supplier" },
  { id: 13, name: "Cargill", image: cargill, category: "Supplier" },
  { id: 14, name: "MMM", image: mmm, category: "Supplier" },
  {
    id: 15,
    name: "Ever Glory General Trading",
    image: everGlory,
    category: "Supplier",
  },
  {
    id: 16,
    name: "United Quarries",
    image: unitedQuarries,
    category: "Supplier",
  },
  { id: 17, name: "RAK Rock", image: rakRock, category: "Supplier" },
  { id: 18, name: "Oryx Mix", image: oryxMix, category: "Supplier" },
  {
    id: 19,
    name: "COFCO International",
    image: cofcoIntl,
    category: "Supplier",
  },
  { id: 20, name: "ADM", image: adm, category: "Supplier" },
  {
    id: 21,
    name: "Masafi Crusher",
    image: masafiCrusher,
    category: "Supplier",
  },
  {
    id: 22,
    name: "Louis Dreyfus Company",
    image: louisDreyfusCompany,
    category: "Supplier",
  },

  // —— Buyers ——
  { id: 23, name: "CCCC", image: cccc, category: "Buyer" },
  { id: 24, name: "CRCC", image: crcc, category: "Buyer" },
  { id: 25, name: "CREC", image: crec, category: "Buyer" },
  {
    id: 26,
    name: "Maddhapara Granite Mining",
    image: maddhaparaGranite,
    category: "Buyer",
  },
  {
    id: 27,
    name: "Tokyu Corporation",
    image: tokyuCorporation,
    category: "Buyer",
  },
  { id: 28, name: "Sinohydro", image: sinohydro, category: "Buyer" },
  {
    id: 29,
    name: "TOA Corporation",
    image: toaCorporation,
    category: "Buyer",
  },
  { id: 30, name: "Obayashi", image: obayashi, category: "Buyer" },
  {
    id: 31,
    name: "China Shandong International",
    image: chinaShandongInternational,
    category: "Buyer",
  },
  { id: 32, name: "CRFG", image: crfg, category: "Buyer" },
  { id: 33, name: "Akij Resource", image: akijResource, category: "Buyer" },
  { id: 34, name: "MBEC", image: mbec, category: "Buyer" },
  {
    id: 35,
    name: "Bashundhara Group",
    image: bashundharaGroup,
    category: "Buyer",
  },
  { id: 36, name: "Crown Cement", image: crownCement, category: "Buyer" },
  {
    id: 37,
    name: "Sena Kalyan Sangstha",
    image: senaKalyanSangstha,
    category: "Buyer",
  },
  {
    id: 38,
    name: "Nabil Group of Industries",
    image: nabilGroup,
    category: "Buyer",
  },
  {
    id: 39,
    name: "Community Bank",
    image: communityBank,
    category: "Buyer",
  },
  {
    id: 40,
    name: "Mercantile Bank Limited",
    image: mercantileBank,
    category: "Buyer",
  },
  {
    id: 41,
    name: "Quality Feeds Limited",
    image: qualityFeeds,
    category: "Buyer",
  },
  { id: 42, name: "Nourish", image: nourish, category: "Buyer" },
  { id: 43, name: "JTEG", image: jteg, category: "Buyer" },
  { id: 44, name: "GENERTEC CMC", image: genertecCmc, category: "Buyer" },
  { id: 45, name: "DuCorp", image: ducorp, category: "Buyer" },
  {
    id: 46,
    name: "First Dhaka Elevated Expressway",
    image: fdee,
    category: "Buyer",
  },
  {
    id: 47,
    name: "Faisal Brothers",
    image: faisalBrothers,
    category: "Buyer",
  },
  {
    id: 48,
    name: "Mahbub Group of Industries",
    image: mahbubGroup,
    category: "Buyer",
  },
  { id: 49, name: "Karim Group", image: karimGroup, category: "Buyer" },
];

export const buyerBrands = brandsData.filter((b) => b.category === "Buyer");
export const supplierBrands = brandsData.filter(
  (b) => b.category === "Supplier",
);
