import logo1 from "../../../../public/images/brand/Logo/Logo 01.png";
import logo2 from "../../../../public/images/brand/Logo/Logo 02.png";
import logo3 from "../../../../public/images/brand/Logo/Logo 03.png";
import logo4 from "../../../../public/images/brand/Logo/Logo 04.png";
import logo5 from "../../../../public/images/brand/Logo/Logo 05.png";
import logo6 from "../../../../public/images/brand/Logo/Logo 06.png";
import logo7 from "../../../../public/images/brand/Logo/Logo 07.png";
import logo8 from "../../../../public/images/brand/Logo/Logo 08.png";
import logo9 from "../../../../public/images/brand/Logo/Logo 09.png";
import logo10 from "../../../../public/images/brand/Logo/Logo 10.png";
import logo11 from "../../../../public/images/brand/Logo/Logo 11.png";
import logo12 from "../../../../public/images/brand/Logo/Logo 12.png";
import logo13 from "../../../../public/images/brand/Logo/Logo 13.png";
import logo14 from "../../../../public/images/brand/Logo/Logo 14.png";
import logo15 from "../../../../public/images/brand/Logo/Logo 15.png";
import logo16 from "../../../../public/images/brand/Logo/Logo 16.png";
import logo17 from "../../../../public/images/brand/Logo/Logo 17.png";
import logo18 from "../../../../public/images/brand/Logo/Logo 18.png";
import logo19 from "../../../../public/images/brand/Logo/Logo 19.png";
import logo20 from "../../../../public/images/brand/Logo/Logo 20.png";
import logo21 from "../../../../public/images/brand/Logo/Logo 21.png";
import logo22 from "../../../../public/images/brand/Logo/Logo 22.png";
import logo23 from "../../../../public/images/brand/Logo/Logo 23.png";
import logo24 from "../../../../public/images/brand/Logo/Logo 24.png";
import logo25 from "../../../../public/images/brand/Logo/Logo 25.png";
import logo26 from "../../../../public/images/brand/Logo/Logo 26.png";
import logo27 from "../../../../public/images/brand/Logo/Logo 27.png";
import logo28 from "../../../../public/images/brand/Logo/Logo 28.png";
import logo29 from "../../../../public/images/brand/Logo/Logo 29.png";
import logo30 from "../../../../public/images/brand/Logo/Logo 30.png";
import logo31 from "../../../../public/images/brand/Logo/Logo 31.png";
import logo32 from "../../../../public/images/brand/Logo/Logo 32.png";
import Image, { StaticImageData } from "next/image";

export type BrandCategory =
  | "Digital Marketing"
  | "Web Development"
  | "Graphics Design"
  | "UI/UX Design";

export interface Brand {
  id: number;
  name: string;
  image: StaticImageData;
  category: BrandCategory;
}

export const brandsData: Brand[] = [
  { id: 7, name: "Bijik", image: logo7, category: "Digital Marketing" },

  { id: 30, name: "Brand 30", image: logo30, category: "Graphics Design" },
  { id: 27, name: "Brand 27", image: logo27, category: "Digital Marketing" },

  { id: 3, name: "eitrok", image: logo3, category: "Digital Marketing" },

  { id: 1, name: "Khatibari", image: logo1, category: "Digital Marketing" },

  { id: 23, name: "Brand 23", image: logo23, category: "Graphics Design" },
  {
    id: 14,
    name: "Molla IT Firm",
    image: logo14,
    category: "Graphics Design",
  },
  { id: 6, name: "Kids Palace", image: logo6, category: "Digital Marketing" },

  { id: 15, name: "Dighal", image: logo15, category: "Graphics Design" },
  { id: 5, name: "Follow", image: logo5, category: "Digital Marketing" },
  { id: 22, name: "Brand 22", image: logo22, category: "Graphics Design" },
  { id: 8, name: "Novital", image: logo8, category: "Digital Marketing" },

  { id: 28, name: "Brand 28", image: logo28, category: "Graphics Design" },

  {
    id: 4,
    name: "Chotto Khati Bazar",
    image: logo4,
    category: "Digital Marketing",
  },
  { id: 29, name: "Brand 29", image: logo29, category: "Graphics Design" },

  {
    id: 2,
    name: "Organic Ghor BD",
    image: logo2,
    category: "Digital Marketing",
  },

  { id: 9, name: "Jamima Mart", image: logo9, category: "Digital Marketing" },
  { id: 10, name: "Rayhan Shop", image: logo10, category: "Digital Marketing" },
  {
    id: 11,
    name: "Tongsa Bazar",
    image: logo11,
    category: "Graphics Design",
  },
  { id: 12, name: "Babycare", image: logo12, category: "Digital Marketing" },
  {
    id: 13,
    name: "Tarunno Food",
    image: logo13,
    category: "Graphics Design",
  },
  { id: 16, name: "Brand 16", image: logo16, category: "Graphics Design" },
  { id: 17, name: "Brand 17", image: logo17, category: "Graphics Design" },
  { id: 18, name: "Brand 18", image: logo18, category: "Digital Marketing" },
  { id: 19, name: "Brand 19", image: logo19, category: "Digital Marketing" },
  { id: 20, name: "Brand 20", image: logo20, category: "Digital Marketing" },
  { id: 21, name: "Brand 21", image: logo21, category: "Digital Marketing" },
  { id: 24, name: "Brand 24", image: logo24, category: "Graphics Design" },
  { id: 25, name: "Brand 25", image: logo25, category: "Graphics Design" },
  { id: 26, name: "Brand 26", image: logo26, category: "Graphics Design" },
  { id: 31, name: "Brand 31", image: logo31, category: "Graphics Design" },
  { id: 32, name: "Brand 32", image: logo32, category: "Graphics Design" },
];
