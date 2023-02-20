import { BREAKPOINT_XS } from "./../../../styles/common";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  max-width: 1120px;
  min-height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;

  & > .content {
    margin-top: 7rem;
    max-width: 1120px;
  }

  & > header {
    position: fixed;
    top: 0;
    padding: 2rem 0;
    z-index: 10;
    width: 100%;
    max-width: 1120px;
    padding-right: 4rem;
    background-color: ${({ theme }) => theme.background};

    .header-content {
      display: flex;
      justify-content: space-between;

      img {
        height: 40px;
      }

      .dropdown-trigger {
        display: none;

        @media (max-width: ${BREAKPOINT_XS}) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export const HeaderInteractables = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: ${BREAKPOINT_XS}) {
    display: none;
  }
`;

type InteractableCardProps = {
  variant: "primary" | "secondary";
  tagContent?: string;
};

const InteractableCardTag = (content: string) => css`
  &::after {
    content: "${content}";
    color: ${({ theme }) => theme.primaryLow};

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);

    height: 24px;
    width: 24px;

    background-color: ${({ theme }) => theme.primaryHigh};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 12px;
  }
`;

export const InteractableCard = styled.span<InteractableCardProps>`
  position: relative;
  height: 100%;

  color: ${({ theme, variant }) => theme[`${variant}High`]};
  background-color: ${({ theme, variant }) => theme[`${variant}Low`]};

  border-radius: 8px;
  padding: 0.5rem 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: filter 0.3s;

  & > span {
    margin-left: 0.25rem;
    font-size: 0.875rem;
  }

  &:hover {
    filter: brightness(1.025);
  }

  ${({ tagContent }) => !!tagContent && InteractableCardTag(tagContent)}
`;

/* ------------------------------------------------------------------- */

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
