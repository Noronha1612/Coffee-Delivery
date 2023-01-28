import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div``;

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-height: 360px;

    .textWrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
      }

      h3 {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
      }

      .bannerTags {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-column-gap: 2.5rem;
        grid-row-gap: 1.625rem;

        margin-top: 3rem;
      }
    }
  }
`;

type TagWrapperProps = {
  color: keyof DefaultTheme;
};

export const TagWrapper = styled.div<TagWrapperProps>`
  position: relative;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-8px);
    background: ${({ theme, color }) => theme[color]};

    width: 32px;
    height: 32px;
    border-radius: 50%;
    z-index: -1;
  }

  svg {
    margin: 0 20px 0 8px;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${({ theme }) => theme.baseText};
  }
`;

export const MainContent = styled.main`
  margin: 7.5rem 0;

  .cardsWrapper {
    margin-top: 3.25rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
