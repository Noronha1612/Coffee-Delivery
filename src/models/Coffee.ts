export enum CoffeeTag {
  Standart = "STANDART",
  Cold = "COLD",
  Milky = "MILKY",
  Alcoholic = "ALCOHOLIC",
  Special = "SPECIAL",
}

export type Coffee = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
  tags: CoffeeTag[];
};
