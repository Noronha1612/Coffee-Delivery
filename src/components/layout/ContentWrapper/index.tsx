import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./styles";

import { ShoppingCartSimple, MapPin } from "phosphor-react";

import LogoSVG from "../../../assets/logo.svg";
import { useCart } from "@/hooks/context/cart/useCart";
import { RouteName } from "@/routes";
import { useLocation } from "@/hooks/utility/useLocation";
import { Suspense } from "react";

export const ContentWrapper = () => {
  const { items } = useCart();
  const { city, state } = useLocation();

  const itemsAddedAmount = items.length;

  return (
    <Suspense>
      <S.Container>
        <header>
          <Link to={RouteName.ROOT}>
            <img src={LogoSVG} alt="Logo Coffee Delivery" />
          </Link>

          <S.HeaderInteractables>
            {city && state && (
              <S.InteractableCard variant="secondary">
                <MapPin weight="fill" size={20} />{" "}
                <span>
                  {city}, {state}
                </span>
              </S.InteractableCard>
            )}
            <Link to={RouteName.CHECKOUT}>
              <S.InteractableCard
                variant="primary"
                tagContent={
                  !!itemsAddedAmount ? itemsAddedAmount.toString() : undefined
                }
              >
                <ShoppingCartSimple weight="fill" size={20} />
              </S.InteractableCard>
            </Link>
          </S.HeaderInteractables>
        </header>

        <div className="content">
          <Outlet />
        </div>
      </S.Container>
    </Suspense>
  );
};
