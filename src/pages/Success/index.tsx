import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useLocation, Navigate } from "react-router-dom";
import { useTheme } from "styled-components";

import SuccessLanding from "../../assets/deliveryLandingImage.svg";

import * as S from "./styles";
import { RouteName } from "@/routes";
import { useAppTheme } from "@/hooks/context/theme/useAppTheme";

export const Success = () => {
  const colors = useTheme();
  const { theme } = useAppTheme();
  const { state } = useLocation();
  const { address, payment } = state;

  const iconColor = theme === "dark" ? colors.baseCard : colors.white;

  if (!address || !payment) {
    return <Navigate to={RouteName.ROOT} />;
  }

  const [addressOne, addressTwo] = address.split("|");

  return (
    <S.Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>

        <S.Content>
          <S.ContentItem tagColor={colors.secondary} selectedTheme={theme}>
            <div className="iconWrapper">
              <MapPin size={16} color={iconColor} weight="fill" />
            </div>

            <div className="tagInfoWrapper">
              <span>
                Entrega em <b>{addressOne}</b>
              </span>
              <span>{addressTwo}</span>
            </div>
          </S.ContentItem>
          <S.ContentItem tagColor={colors.primary} selectedTheme={theme}>
            <div className="iconWrapper">
              <Timer size={16} color={iconColor} weight="fill" />
            </div>

            <div className="tagInfoWrapper">
              <span>Previsão de entrega</span>
              <span>
                <b>20min - 30min</b>
              </span>
            </div>
          </S.ContentItem>
          <S.ContentItem tagColor={colors.primaryHigh} selectedTheme={theme}>
            <div className="iconWrapper">
              <CurrencyDollarSimple size={16} color={iconColor} />
            </div>

            <div className="tagInfoWrapper">
              <span>Pagamento na entrega</span>
              <span>
                <b>{payment}</b>
              </span>
            </div>
          </S.ContentItem>
        </S.Content>
      </div>

      <img src={SuccessLanding} alt="Pedido a caminho" />
    </S.Container>
  );
};
