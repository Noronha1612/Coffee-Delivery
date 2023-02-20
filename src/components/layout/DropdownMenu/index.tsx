import { CaretLeft, MapPin, ShoppingCartSimple } from "phosphor-react";
import { ThemeToggle } from "@/components/Input/ThemeToggle";
import { useCart } from "@/hooks/context/cart/useCart";
import { useLocation } from "@/hooks/utility/useLocation";
import { RouteName } from "@/routes";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

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

            <Dropdown.Item>
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
