import { NumberInput } from "@/components/Form/NumberInput";
import { useCart } from "@/hooks/context/cart/useCart";
import { formatCurrency } from "@/utils/format";
import { getCoffeeImageUrl } from "@/utils/getCoffeeImageUrl";
import { Trash } from "phosphor-react";
import { FieldValues, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { CartSummary } from "./components/CartSummary";
import { CheckoutForm } from "./components/Form";
import * as S from "./styles";

export const Checkout = () => {
  const colors = useTheme();

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

        <CartSummary />
      </S.CartSummary>
    </S.Container>
  );
};
