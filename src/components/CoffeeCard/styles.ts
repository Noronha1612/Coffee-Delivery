import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  min-height: 310px;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  background-color: ${({ theme }) => theme.baseCard};

  display: flex;
  flex-direction: column;
  align-content: center;

  img {
    margin: 0 auto;
    margin-top: calc(-1.5rem - 1.25rem);
    width: 120px;
  }

  h4,
  p {
    text-align: center;
    line-height: 130%;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.baseSubtitle};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.baseLabel};
  }

  footer {
    display: grid;
    margin-top: auto;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 0.5rem;

    .price {
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${({ theme }) => theme.baseText};
      font-family: "Baloo 2";

      display: flex;
      align-items: center;

      &::before {
        content: "R$";
        font-weight: 400;
        font-size: 0.875rem;
        font-family: "Roboto";
        margin-right: 0.25rem;
      }
    }

    button[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 0;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.secondaryDark};
      padding: 0.5rem;

      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    display: block;
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;
