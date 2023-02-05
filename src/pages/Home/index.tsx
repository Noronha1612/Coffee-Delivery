import * as S from "./styles";

import CoffeeLanding from "../../assets/CoffeeLanding.png";
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { CoffeeCard } from "../../components/CoffeeCard";

import coffees from "@/data/coffees.json";
import { Coffee } from "@/models/Coffee";
import { useEffect } from "react";
import { useCart } from "@/hooks/context/cart/useCart";

const tags = [
  {
    Icon: <ShoppingCart size={16} weight="fill" color="#FFF" />,
    text: "Compra simples e segura",
    color: "primaryDark",
  },
  {
    Icon: <Package size={16} weight="fill" color="#FFF" />,
    text: "Embalagem mantém o café intacto",
    color: "baseText",
  },
  {
    Icon: <Timer size={16} weight="fill" color="#FFF" />,
    text: "Entrega rápida e rastreada",
    color: "primary",
  },
  {
    Icon: <CoffeeIcon size={16} weight="fill" color="#FFF" />,
    text: "O café chega fresquinho até você",
    color: "secondary",
  },
] as const;

export const Home = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <S.Container>
      <S.Banner>
        <section className="content">
          <div className="textWrapper">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>

            <div className="bannerTags">
              {tags.map((tag) => (
                <S.TagWrapper color={tag.color} key={tag.color}>
                  {tag.Icon}

                  <span>{tag.text}</span>
                </S.TagWrapper>
              ))}
            </div>
          </div>

          <img src={CoffeeLanding} alt="Café atrativo: Coffee Delivery" />
        </section>
      </S.Banner>

      <S.MainContent>
        <h2>Nossos cafés</h2>

        <div className="cardsWrapper">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee as Coffee} />
          ))}
        </div>
      </S.MainContent>
    </S.Container>
  );
};
