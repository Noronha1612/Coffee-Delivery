/* ------------------------------------------------------------------- */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const DropdownContainer = styled.div`
  min-width: 220px;
  background-color: ${({ theme }) => theme.baseCard};
  color: ${({ theme }) => theme.baseText};
  border-radius: 6px;

  z-index: 10;

  display: flex;
  flex-direction: column;

  & > * {
    padding: 0.75rem;
  }

  .drop-item {
    display: flex;
    gap: 0.25rem;
    align-items: center;

    font-size: 1rem;
  }
`;

const HamburgerLine = (width?: number) => css`
  width: ${width ?? 24}px;
  height: 2px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondary};
`;

export const HamburgerTrigger = styled.button`
  background: none;
  border: none;
  height: 100%;
  width: 100%;

  cursor: pointer;

  .hamburger-trigger-icon {
    ${HamburgerLine()}
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      transition: all 0.2s;

      ${HamburgerLine()}
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      transition: all 0.2s;

      ${HamburgerLine()}
    }
  }
`;

export const CartItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  width: 100%;

  span {
    line-height: 100%;
  }

  .tagValue {
    height: 16px;
    width: 16px;

    background-color: ${({ theme }) => theme.primaryHigh};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 10px;
    margin-left: 4px;
  }
`;

export const LocationItem = styled.div`
  color: ${({ theme }) => theme.secondary};
`;
