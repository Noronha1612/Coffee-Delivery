import { BREAKPOINT_XS, InteractableBaseComponent } from "@/styles/common";
import styled from "styled-components";

export const SummaryCard = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;

  position: relative;

  padding: 1.5rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.baseButton};

  & > img {
    width: 4rem;
    height: 4rem;
  }

  & > .card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    & > .interactablesWrapper {
      width: fit-content;
      display: flex;
      gap: 0.75rem;

      @media (max-width: ${BREAKPOINT_XS}) {
      }
    }
  }

  & > .price {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme }) => theme.baseText};
  }
`;

export const DeleteButton = styled(InteractableBaseComponent)`
  padding: 0.5rem;

  transition: filter 0.3s;

  & > span {
    display: block;

    font-size: 0.75rem;
    line-height: 100%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.baseText};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SummaryDataDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  & > .data-item {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.baseText};
    }

    &:last-child {
      span {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;

  width: 100%;

  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
