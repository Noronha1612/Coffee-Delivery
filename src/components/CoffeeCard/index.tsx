import { Minus, Plus, ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Coffee, CoffeeTag } from "@/models/Coffee";

import * as S from "./styles";
import { useCart } from "@/hooks/context/cart/useCart";

type CoffeeCardProps = {
  coffee: Coffee;
};

const CoffeeTagLabels: Record<CoffeeTag, string> = {
  STANDART: "Tradicional",
  ALCOHOLIC: "Alcoólico",
  COLD: "Gelado",
  MILKY: "Com leite",
};

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const theme = useTheme();

  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);

  const strictPositiveNumber = (value: number) => {
    return value < 1 ? 1 : value;
  };
  const incrementQuantity = () => {
    setQuantity((previous) => strictPositiveNumber(previous + 1));
  };
  const decrementQuantity = () =>
    setQuantity((previous) => strictPositiveNumber(previous - 1));

  const CoffeeImage = new URL(
    `../../assets/coffeeImages/${coffee.imageName}`,
    import.meta.url
  ).href;

  const handleAddToCart = () => {
    addItem({
      quantity,
      coffee,
    });
  };

  return (
    <S.CardContainer>
      <img src={CoffeeImage} alt="Imagem do café exibido" />

      <S.TagWrapper>
        {coffee.tags.map((tag) => (
          <span key={tag}>{CoffeeTagLabels[tag]}</span>
        ))}
      </S.TagWrapper>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <footer>
        <span className="price">
          {coffee.price.toFixed(2).replace(".", ",")}
        </span>

        <S.QuantitySelector>
          <button onClick={decrementQuantity}>
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>
            <Plus size={14} />
          </button>
        </S.QuantitySelector>

        <button type="submit" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" color={theme.white} size={22} />
        </button>
      </footer>
    </S.CardContainer>
  );
};
