import { Coffee } from "@/models/Coffee";

export const getCoffeeImageUrl = (coffee: Coffee) => {
  return new URL(`../assets/coffeeImages/${coffee.imageName}`, import.meta.url)
    .href;
};
