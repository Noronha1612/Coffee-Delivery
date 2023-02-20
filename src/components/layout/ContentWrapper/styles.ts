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
