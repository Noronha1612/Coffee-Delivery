import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./styles";

import { ShoppingCartSimple, MapPin } from "phosphor-react";

import LogoSVG from "../../../assets/logo.svg";
import { useCart } from "@/hooks/context/cart/useCart";
import { RouteName } from "@/routes";

export const ContentWrapper = () => {
  const { cart } = useCart();

  const itemsAddedAmount = cart?.items.length;

  return (
    <S.Container>
      <header>
        <Link to={RouteName.HOME}>
          <img src={LogoSVG} alt="Logo Coffee Delivery" />
        </Link>

        <S.HeaderInteractables>
          <S.InteractableCard variant="secondary">
            <MapPin weight="fill" size={20} /> <span>Porto Alegre, RS</span>
          </S.InteractableCard>
          <S.InteractableCard
            variant="primary"
            tagContent={
              !!itemsAddedAmount ? itemsAddedAmount.toString() : undefined
            }
          >
            <ShoppingCartSimple weight="fill" size={20} />
          </S.InteractableCard>
        </S.HeaderInteractables>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </S.Container>
  );
};
