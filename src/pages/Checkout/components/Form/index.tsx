import { RadioGroup } from "@/components/Form/RadioGroup";
import { TextInput } from "@/components/Form/TextInput";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { useTheme } from "styled-components";

import * as S from "./styles";

type CheckoutFormProps = {
  control: Control<FieldValues>;
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ control }) => {
  const colors = useTheme();

  return (
    <form>
      <section>
        <S.SectionHeader>
          <MapPinLine size={22} color={colors.primaryDark} />

          <div>
            <h3>Endereço de Entrega</h3>
            <h6>Informe o endereço onde deseja receber seu pedido</h6>
          </div>
        </S.SectionHeader>

        <div className="inputBox">
          <TextInput id="cep" control={control} placeholder="CEP" />
          <TextInput id="street" control={control} placeholder="Rua" />
          <TextInput id="houseNumber" control={control} placeholder="Número" />
          <TextInput
            id="complementaryInfo"
            control={control}
            placeholder="Complemento"
            optionalLabel
          />
          <TextInput id="district" control={control} placeholder="Bairro" />
          <TextInput id="city" control={control} placeholder="Cidade" />
          <TextInput id="state" control={control} placeholder="UF" />
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
                label: "Cartão de crédito",
                value: "credit-card",
                icon: <CreditCard size={16} color={colors.secondary} />,
              },
              {
                label: "Cartão de débito",
                value: "debit-card",
                icon: <Bank size={16} color={colors.secondary} />,
              },
              {
                label: "Dinheiro",
                value: "cash",
                icon: <Money size={16} color={colors.secondary} />,
              },
            ]}
          />
        </S.RadioWrapper>
      </section>
    </form>
  );
};
