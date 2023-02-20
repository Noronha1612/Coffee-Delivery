import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ShoppingCartSimple, MapPin, CaretLeft } from "phosphor-react";

import LogoSVG from "../../../assets/logo.svg";

import { useCart } from "@/hooks/context/cart/useCart";
import { RouteName } from "@/routes";
import { useLocation } from "@/hooks/utility/useLocation";
import { ThemeToggle } from "@/components/Input/ThemeToggle";

import * as S from "./styles";
import { DropdownMenu } from "../DropdownMenu";

export const ContentWrapper = () => {
  const { items } = useCart();
  const { city, state } = useLocation();

  const itemsAddedAmount = items.length;

  return (
    <Suspense>
      <S.Container>
        <header>
          <div className="header-content">
            <Link to={RouteName.ROOT}>
              <img src={LogoSVG} alt="Logo Coffee Delivery" />
            </Link>

            <div className="dropdown-trigger">
              <DropdownMenu />
            </div>

            <S.HeaderInteractables>
              <ThemeToggle />
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
          </div>
        </header>

        <div className="content">
          <Outlet />
        </div>
      </S.Container>
    </Suspense>
  );
};
