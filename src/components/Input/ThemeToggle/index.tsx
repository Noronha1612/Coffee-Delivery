import { useAppTheme } from "@/hooks/context/theme/useAppTheme";
import { Moon, SunDim } from "phosphor-react";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const ThemeToggle = () => {
  const { theme, toggle } = useAppTheme();
  const colors = useTheme();

  return (
    <S.Container onClick={toggle}>
      <SunDim size={32} color={colors.primaryHigh} />
      <S.InputBox variant={theme} />
      <Moon size={32} color={colors.secondaryHigh} />
    </S.Container>
  );
};
