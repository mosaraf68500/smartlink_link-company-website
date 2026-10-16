export interface Office {
  country: string;
  label: string;
  flag: string;
  image: string;
  address: string;
  emails: string[];
  phones?: string[];
  hotlines?: string[];
  landline?: string;
}

const sharedEmails = [
  "info@smartlinksystemsbd.com",
  "sales@smartlinksystemsbd.com",
  "sales.smartlinksystems@gmail.com",
  "startradeandlogistics@gmail.com",
];

const sharedPhones = [
  "+8801677136584",
  "+8801737136022",
  "+8801794000014",
  "+8801846216225",
  "+8801715349585",
];

const sharedHotlines = ["+8801677136584", "+8801715349585"];

const sharedLandline = "+8802-44806947";

// TODO: replace Plant card image with a dedicated neon illustration
// when client assets are available.
export const offices: Office[] = [
  {
    country: "Bangladesh",
    label: "Corporate Office",
    flag: "/flags/bd.png",
    image: "/offices/bangladesh.png",
    address:
      "Divine Flox, House: 543, Apt: A-2, Avenue: 06, Road: 08, Mirpur DOHS, Dhaka-1216, Bangladesh",
    emails: sharedEmails,
    phones: sharedPhones,
    hotlines: sharedHotlines,
    landline: sharedLandline,
  },
  {
    country: "United Arab Emirates",
    label: "UAE Office",
    flag: "/flags/ae.png",
    image: "/offices/uae.png",
    address: "The Binary Tower, 8th Floor, Unit-816, Business Bay, Dubai, UAE",
    emails: [],
    phones: ["+971523800913"],
  },
  {
    country: "Bangladesh",
    label: "Plant Office",
    flag: "/flags/bd.png",
    image: "/offices/bangladesh.png",
    address:
      "Lakkha Jatrabari, Baniyadi, Murapara Road, Rupganj, Narayanganj-1464, Bangladesh",
    emails: [],
    phones: ["+8801830657008", "+8801715349585"],
  },
];
