import { NumberInput } from "@/components/Form/NumberInput";
import { useCart } from "@/hooks/context/cart/useCart";
import { formatCurrency } from "@/utils/format";
import { getCoffeeImageUrl } from "@/utils/getCoffeeImageUrl";
import { Trash } from "phosphor-react";
import { FieldValues, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { CheckoutForm } from "./components/Form";
import * as S from "./styles";

export const Checkout = () => {
  const colors = useTheme();

  const { items, delivaryTax, totalValue } = useCart();
  const { control, handleSubmit } = useForm<FieldValues>({
    mode: "onBlur",
    defaultValues: {
      cep: "",
      street: "",
      houseNumber: "",
      complementaryInfo: "",
      district: "",
      city: "",
      state: "",
    },
  });

  const handleConfirm = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.PaymentFormContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutForm control={control} />
      </S.PaymentFormContainer>

      <S.CartSummary>
        <h2>Cafés selecionados</h2>

        <section>
          {items.map((item) => (
            <S.SummaryCard key={item.coffee.id}>
              <img
                src={getCoffeeImageUrl(item.coffee)}
                alt={item.coffee.name}
              />

              <div className="card-content">
                <h4>{item.coffee.name}</h4>
                <div className="interactablesWrapper">
                  <NumberInput initialValue={item.quantity} />
                  <S.DeleteButton>
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

          <S.ConfirmButton>Confirmar pedido</S.ConfirmButton>
        </section>
      </S.CartSummary>
    </S.Container>
  );
};
