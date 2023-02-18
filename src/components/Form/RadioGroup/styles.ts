import styled from "styled-components";

export const ErrorMessage = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.danger};

  font-size: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  gap: 0.75rem;
`;

export const RadioItem = styled.label`
  & > input {
    display: none;
  }

  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  flex: 1;

  background-color: ${({ theme }) => theme.baseButton};
  border: 1px solid ${({ theme }) => theme.baseButton};
  border-radius: 6px;

  cursor: pointer;

  & > span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${({ theme }) => theme.baseText};

    text-transform: uppercase;
  }

  &:has(input:checked) {
    border: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.secondaryLow};
  }
`;
