export interface MenuItem {
  name: string;
  tags?: ("vega" | "vis" | "lam" | "garnalen")[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "broodjes",
    name: "Broodjes",
    items: [
      { name: "Ketjap Kip" },
      { name: "Kerrie Kip" },
      { name: "Bakkeljauw", tags: ["vis"] },
      { name: "Garnalen", tags: ["garnalen"] },
      { name: "Garnalen Kouseband", tags: ["garnalen"] },
      { name: "Kerrie Lams Steak (Rund)", tags: ["lam"] },
      { name: "Pom Tempeh", tags: ["vega"] },
    ],
  },
  {
    id: "roti",
    name: "Roti",
    items: [
      { name: "Kip met bot. Aard. Groente" },
      { name: "Kip Filet. Aard. Groente" },
      { name: "Lams. Aard. Groente", tags: ["lam"] },
      { name: "Garnalen. Aard. Groente", tags: ["garnalen"] },
      { name: "Aard. Groente (Vega)", tags: ["vega"] },
      { name: "Tempeh. Aard. Groente", tags: ["vega"] },
    ],
  },
  {
    id: "roti-rol",
    name: "Roti Rol",
    items: [
      { name: "Kerrie Kip" },
      { name: "Lams", tags: ["lam"] },
      { name: "Vega (Aard + Kouseband)", tags: ["vega"] },
      { name: "Kerrie Garnalen", tags: ["garnalen"] },
      { name: "Bakkeljauw Tempeh", tags: ["vis"] },
    ],
  },
  {
    id: "bami-nasi",
    name: "Bami / Nasi / Witte Rijst",
    items: [
      { name: "Ketjap Kip. Groente" },
      { name: "Kerrie Kip. Groente" },
      { name: "Pom. Ketjap Kip Filet" },
      { name: "Lams. Groente", tags: ["lam"] },
      { name: "Garnalen. Groente", tags: ["garnalen"] },
      { name: "Steak (Rund). Groente" },
      { name: "Bakkeljauw. Groente", tags: ["vis"] },
      { name: "Tempeh. Groente", tags: ["vega"] },
    ],
  },
  {
    id: "telo",
    name: "Telo",
    items: [
      { name: "Bakkeljauw", tags: ["vis"] },
      { name: "Trie" },
      { name: "Garnalen", tags: ["garnalen"] },
      { name: "Ketjap Kip Filet" },
      { name: "Mix Bakkeljauw / Trie", tags: ["vis"] },
    ],
  },
  {
    id: "bara",
    name: "Bara (Gevuld)",
    items: [
      { name: "Ketjap Kip Filet" },
      { name: "Kerrie Kip Filet" },
      { name: "Kerrie Lams", tags: ["lam"] },
      { name: "Kerrie Garnalen", tags: ["garnalen"] },
      { name: "Bakkeljauw Tempeh", tags: ["vis"] },
    ],
  },
];
