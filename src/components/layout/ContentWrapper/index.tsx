import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ShoppingCartSimple, MapPin, CaretLeft } from "phosphor-react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

import LogoSVG from "../../../assets/logo.svg";

import { useCart } from "@/hooks/context/cart/useCart";
import { RouteName } from "@/routes";
import { useLocation } from "@/hooks/utility/useLocation";
import { ThemeToggle } from "@/components/Input/ThemeToggle";

import * as S from "./styles";

export const DropdownMenu = () => {
  const { items } = useCart();
  const { city, state } = useLocation();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <S.HamburgerTrigger>
          <div className="hamburger-trigger-icon" />
        </S.HamburgerTrigger>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content asChild>
          <S.DropdownContainer>
            <Dropdown.Sub>
              <Dropdown.SubTrigger className="drop-item">
                <CaretLeft size={16} />
                <span>Tema</span>
              </Dropdown.SubTrigger>

              <Dropdown.SubContent>
                <Dropdown.Item asChild>
                  <ThemeToggle />
                </Dropdown.Item>
              </Dropdown.SubContent>
            </Dropdown.Sub>

            <Dropdown.Item asChild>
              <S.CartItem to={RouteName.CHECKOUT} className="drop-item">
                <ShoppingCartSimple weight="fill" size={16} />
                <span>Carrinho</span>
                {!!items.length && (
                  <span className="tagValue">{items.length}</span>
                )}
              </S.CartItem>
            </Dropdown.Item>

            <Dropdown.Item asChild>
              <S.LocationItem className="drop-item">
                <MapPin weight="fill" size={16} />{" "}
                <span>
                  {city}, {state}
                </span>
              </S.LocationItem>
            </Dropdown.Item>
          </S.DropdownContainer>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

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
