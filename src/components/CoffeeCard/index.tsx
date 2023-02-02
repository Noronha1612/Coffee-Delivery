import { Minus, Plus, ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Coffee, CoffeeTag } from "@/models/Coffee";

import * as S from "./styles";
import { useCart } from "@/hooks/context/cart/useCart";
import { NumberInput } from "../Form/NumberInput";
import { getCoffeeImageUrl } from "@/utils/getCoffeeImageUrl";

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

  const handleAddToCart = () => {
    addItem({
      quantity,
      coffee,
    });
  };

  return (
    <S.CardContainer>
      <img src={getCoffeeImageUrl(coffee)} alt="Imagem do café exibido" />

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

        <NumberInput initialValue={quantity} onChange={setQuantity} />

        <button type="submit" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" color={theme.white} size={22} />
        </button>
      </footer>
    </S.CardContainer>
  );
};
