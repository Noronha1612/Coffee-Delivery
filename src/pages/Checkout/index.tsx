import { useCart } from "@/hooks/context/cart/useCart";
import { Payment, PaymentLabel } from "@/models/Payment";
import { RouteName } from "@/routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartSummary } from "./components/CartSummary";
import { CheckoutForm } from "./components/Form";
import * as S from "./styles";

type FormData = {
  cep: string;
  street: string;
  houseNumber: string;
  complementaryInfo: string;
  district: string;
  city: string;
  state: string;
  payment: Payment;
};

export const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { control, handleSubmit } = useForm<FormData>({
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

  const handleConfirm = (data: FormData) => {
    clearCart();

    navigate(RouteName.SUCCESS, {
      state: {
        address: `${data.street},${data.houseNumber} | ${data.district} - ${data.city}, ${data.state}`,
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
