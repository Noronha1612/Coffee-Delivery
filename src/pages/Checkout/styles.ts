import { BREAKPOINT_MD, BREAKPOINT_XS } from "./../../styles/common";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;

  padding-bottom: 2rem;

  h2,
  h4 {
    color: ${({ theme }) => theme.baseTitle};
  }

  @media (max-width: ${BREAKPOINT_MD}) {
    flex-direction: column;
  }
`;

const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  section {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.baseCard};
    padding: 2.5rem;

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
`;

export const PaymentFormContainer = styled(ContainerSection)`
  display: flex;
  flex: 1;

  form .inputBox {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;

    grid-template-areas:
      "cep cep empty empty empty empty empty "
      "street street street street street street street "
      "number number complement complement complement complement  complement"
      "district district city city city city uf";

    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;

    #cep-container {
      grid-area: cep;
    }
    #street-container {
      grid-area: street;
    }
    #houseNumber-container {
      grid-area: number;
    }
    #complementaryInfo-container {
      grid-area: complement;
    }
    #district-container {
      grid-area: district;
    }
    #city-container {
      grid-area: city;
    }
    #state-container {
      grid-area: uf;
    }

    @media (max-width: ${BREAKPOINT_XS}) {
      grid-template-areas:
        "cep cep empty empty empty empty empty "
        "street street street street street street street "
        "number number complement complement complement complement  complement"
        "district district city city city uf uf";
    }
  }
`;

export const CartSummary = styled(ContainerSection)`
  & > section {
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
  }
`;
