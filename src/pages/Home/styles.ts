import {
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
} from "./../../styles/common";
import { ThemesAvailable } from "@/hooks/context/theme/useAppTheme";
import { BREAKPOINT_LG } from "@/styles/common";
import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div``;

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 80px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    min-height: 360px;
    width: 100%;

    .textWrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 3rem;
        color: ${({ theme }) => theme.baseTitle};
      }

      h3 {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.baseText};
      }

      .bannerTags {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-column-gap: 2.5rem;
        grid-row-gap: 1.625rem;

        margin-top: 3rem;

        @media (max-width: ${BREAKPOINT_SM}) {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: ${BREAKPOINT_SM}) {
        h1 {
          font-size: 2.4rem;
        }
        h3 {
          font-size: 1rem;
        }
      }
      @media (max-width: ${BREAKPOINT_XS}) {
        h1 {
          font-size: 1.8rem;
        }
        h3 {
          font-size: 0.75rem;
        }
      }
    }

    @media (max-width: ${BREAKPOINT_LG}) {
      flex-direction: column-reverse;
      padding-bottom: 1rem;
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      gap: 0rem;

      img {
        scale: 0.6;
      }
    }
  }
`;

type TagWrapperProps = {
  color: keyof DefaultTheme;
  selectedTheme: ThemesAvailable;
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
    color: ${({ selectedTheme, theme }) =>
      selectedTheme === "dark" ? theme.black : theme.white};
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

  h2 {
    color: ${({ theme }) => theme.baseTitle};
  }

  .cardsWrapper {
    margin-top: 3.25rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: ${BREAKPOINT_LG}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: ${BREAKPOINT_LG}) {
    margin: 3rem 0;
  }
`;
