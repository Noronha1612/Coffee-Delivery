import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 12rem;

  & > div {
    & > h1 {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 2rem;

      margin-bottom: 0.25rem;

      color: ${({ theme }) => theme.primaryDark};
    }

    & > h4 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.baseSubtitle};
      margin-bottom: 2.5rem;
    }
  }
`;

export const Content = styled.main`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.background};

  margin-left: 1px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;

  &::before {
    content: "";
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    position: absolute;
    top: -1px;
    left: -1px;
    z-index: -1;

    border-radius: 6px 36px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary} 40%,
      ${({ theme }) => theme.secondary}
    );
  }
`;

type ContentItemProps = {
  tagColor: string;
};

export const ContentItem = styled.div<ContentItemProps>`
  display: flex;
  gap: 0.5rem;

  .iconWrapper {
    background-color: ${({ tagColor }) => tagColor};
    border-radius: 50%;

    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tagInfoWrapper {
    & > span {
      display: block;

      font-size: 1rem;

      color: ${({ theme }) => theme.baseText};
    }
  }
`;
