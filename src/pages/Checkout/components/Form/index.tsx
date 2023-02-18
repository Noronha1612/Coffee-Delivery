import { RadioGroup } from "@/components/Form/RadioGroup";
import { TextInput } from "@/components/Form/TextInput";
import { Payment, PaymentLabel } from "@/models/Payment";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import React from "react";
import { Control, FieldError } from "react-hook-form";
import { useTheme } from "styled-components";
import { FormData } from "../../formUtils";

import * as S from "./styles";

type CheckoutFormProps = {
  control: Control<any>;
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ control }) => {
  const colors = useTheme();

  return (
    <form>
      <section>
        <S.SectionHeader>
          <MapPinLine size={22} color={colors.primaryHigh} />

          <div>
            <h3>Endereço de Entrega</h3>
            <h6>Informe o endereço onde deseja receber seu pedido</h6>
          </div>
        </S.SectionHeader>

        <div className="inputBox">
          <TextInput
            id="cep"
            control={control}
            placeholder="CEP"
            mask="99999-999"
          />
          <TextInput id="street" control={control} placeholder="Rua" />
          <TextInput
            id="houseNumber"
            control={control}
            placeholder="Número"
            mask="999999"
          />
          <TextInput
            id="complementaryInfo"
            control={control}
            placeholder="Complemento"
            optionalLabel
          />
          <TextInput id="district" control={control} placeholder="Bairro" />
          <TextInput id="city" control={control} placeholder="Cidade" />
          <TextInput
            id="state"
            control={control}
            placeholder="UF"
            uppercase
            mask="aa"
          />
        </div>
      </section>
      <section>
        <S.SectionHeader>
          <CurrencyDollar size={22} color={colors.secondary} />

          <div>
            <h3>Pagamento</h3>
            <h6>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h6>
          </div>
        </S.SectionHeader>

        <S.RadioWrapper>
          <RadioGroup
            id="payment"
            control={control}
            options={[
              {
                label: PaymentLabel[Payment.CreditCard],
                value: Payment.CreditCard,
                icon: <CreditCard size={16} color={colors.secondary} />,
              },
              {
                label: PaymentLabel[Payment.DebitCard],
                value: Payment.DebitCard,
                icon: <Bank size={16} color={colors.secondary} />,
              },
              {
                label: PaymentLabel[Payment.Cash],
                value: Payment.Cash,
                icon: <Money size={16} color={colors.secondary} />,
              },
            ]}
          />
        </S.RadioWrapper>
      </section>
    </form>
  );
};
