import styled from "styled-components";

import { InteractableBaseComponent } from "@/styles/common";

export const QuantitySelector = styled(InteractableBaseComponent)`
  cursor: default;

  .value {
    font-size: 1rem;
    color: ${({ theme }) => theme.baseTitle};
    margin-top: 2px;
  }

  span:first-child,
  span:last-child {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;

    svg {
      color: ${({ theme }) => theme.secondary};

      transition: color 0.1s;

      &:hover {
        color: ${({ theme }) => theme.secondaryDark};
      }
    }
  }
`;
