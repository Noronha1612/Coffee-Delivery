import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1120px;
  min-height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;

  & > .content {
    margin-top: 6.5rem;
  }

  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    width: 100%;
    max-width: 1120px;
    background-color: ${({ theme }) => theme.background};
    z-index: 10;

    img {
      height: 40px;
    }
  }
`;

export const HeaderInteractables = styled.div`
  display: flex;
  gap: 0.75rem;
`;

type InteractableCardProps = {
  variant: "primary" | "secondary";
  tagContent?: string;
};

const InteractableCardTag = (content: string) => css`
  &::after {
    content: "${content}";
    color: ${({ theme }) => theme.white};

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);

    height: 24px;
    width: 24px;

    background-color: ${({ theme }) => theme.primaryDark};
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

  color: ${({ theme, variant }) => theme[variant]};
  background-color: ${({ theme, variant }) => theme[`${variant}Light`]};

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
