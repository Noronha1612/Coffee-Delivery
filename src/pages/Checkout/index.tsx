import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCart } from "@/hooks/context/cart/useCart";
import { PaymentLabel } from "@/models/Payment";
import { RouteName } from "@/routes";

import { CartSummary } from "./components/CartSummary";
import { CheckoutForm } from "./components/Form";
import { FormData, formSchema } from "./formUtils";

import * as S from "./styles";

export const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { control, handleSubmit } = useForm<FormData>({
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
    shouldFocusError: false,
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

  const handleConfirm = (data: FormData) => {
    clearCart();

    navigate(RouteName.SUCCESS, {
      state: {
        address: `${data.street},${data.houseNumber} | ${data.district} - ${
          data.city
        }, ${data.state.toUpperCase()}`,
        payment: PaymentLabel[data.payment],
      },
    });
  };

  return (
    <S.Container>
      <S.PaymentFormContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutForm control={control} />
      </S.PaymentFormContainer>

      <S.CartSummary>
        <h2>Cafés selecionados</h2>

        <CartSummary onConfirm={handleSubmit(handleConfirm)} />
      </S.CartSummary>
    </S.Container>
  );
};
