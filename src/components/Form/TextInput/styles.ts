import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

type InputWrapperProps = { optionalLabel?: boolean; hasError?: boolean };

const OptionalLabelCss = css`
  &:after {
    position: absolute;
    top: 50%;
    right: 0.75rem;

    transform: translateY(-50%);

    content: "Opcional";
    font-style: italic;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.baseLabel};
  }
`;

const hasErrorCss = css`
  border: 1px solid ${({ theme }) => theme.danger};
`;

export const InputWrapper = styled.label<InputWrapperProps>`
  display: block;
  position: relative;
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.baseButton};
  background-color: ${({ theme }) => theme.baseInput};
  border-radius: 4px;

  cursor: text;

  ${({ optionalLabel }) => optionalLabel && OptionalLabelCss}
  ${({ hasError }) => hasError && hasErrorCss}

  &:has(input:active),
  &:has(input:focus) {
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }
`;

export const Input = styled(InputMask)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.baseText};
  width: 100%;

  background: transparent;
  border: 0;
  outline: none;

  &:placeholder {
    color: ${({ theme }) => theme.baseLabel};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
