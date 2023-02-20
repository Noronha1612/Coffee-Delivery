import { NumberInput } from "@/components/Form/NumberInput";
import { useCart } from "@/hooks/context/cart/useCart";
import { formatCurrency } from "@/utils/format";
import { getCoffeeImageUrl } from "@/utils/getCoffeeImageUrl";
import { Trash } from "phosphor-react";
import React from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";

type CartSummaryProps = {
  onConfirm?: () => void;
};

export const CartSummary: React.FC<CartSummaryProps> = ({ onConfirm }) => {
  const { items, delivaryTax, totalValue, updateQuantity, removeItem } =
    useCart();

  const colors = useTheme();

  return (
    <section>
      {items.map((item) => (
        <S.SummaryCard key={item.coffee.id}>
          <img src={getCoffeeImageUrl(item.coffee)} alt={item.coffee.name} />

          <div className="card-content">
            <h4>{item.coffee.name}</h4>
            <div className="interactablesWrapper">
              <NumberInput
                initialValue={item.quantity}
                onChange={(value) => updateQuantity(item.coffee.id, value)}
              />
              <S.DeleteButton onClick={() => removeItem(item.coffee.id)}>
                <Trash size={16} color={colors.secondary} />
                <span>Remover</span>
              </S.DeleteButton>
            </div>
          </div>
          <span className="price">{formatCurrency(item.coffee.price)}</span>
        </S.SummaryCard>
      ))}

      <S.SummaryDataDetails>
        <div className="data-item">
          <span>Total de items</span>
          <span>{formatCurrency(totalValue - delivaryTax)}</span>
        </div>
        <div className="data-item">
          <span>Entrega</span>
          <span>{formatCurrency(delivaryTax)}</span>
        </div>
        <div className="data-item">
          <span>Total</span>
          <span>{formatCurrency(totalValue)}</span>
        </div>
      </S.SummaryDataDetails>

      <S.ConfirmButton onClick={onConfirm}>Confirmar pedido</S.ConfirmButton>
    </section>
  );
};
