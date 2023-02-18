import { ThemesAvailable } from "@/hooks/context/theme/useAppTheme";
import styled, { DefaultTheme } from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

type InputBoxProps = {
  variant: ThemesAvailable;
};

export const InputBox = styled.div<InputBoxProps>`
  height: 10px;
  width: 32px;
  position: relative;

  border: 1px solid
    ${({ theme, variant }) =>
      variant === "light" ? theme.primary : theme.secondary};
  background-color: ${({ theme, variant }) =>
    variant === "light" ? theme.primaryLow : theme.secondaryLow};
  border-radius: 100px;

  &:after {
    content: "";

    position: absolute;
    top: 50%;
    left: ${({ variant }) => (variant === "light" ? "0" : "100%")};

    ${({ variant }) =>
      variant === "light"
        ? "transform: translate(-25%, -50%);"
        : "transform: translate(-75%, -50%);"}

    background-color: ${({ theme, variant }) =>
      variant === "light" ? theme.primary : theme.secondary};
    border-radius: 50%;

    width: 20px;
    height: 20px;

    transition: left 0.3s;
  }
`;
