import type { FC } from "react";
import { useState } from "react";
import { Page } from "@/components/Page.tsx";
import {
  Card,
  Title,
  Text,
  Button,
  SegmentedControl,
  Image,
  Badge,
} from "@telegram-apps/telegram-ui";
import plateImg from "@/static/placeholders/brone.webp";

// Конфигурация вариантов товара
const VARIANTS = [
  {
    id: "single",
    label: "Одна пластина",
    price: 5000,
    description: "Идеально для замены или единичной защиты",
  },
  {
    id: "double",
    label: "Комплект (2 шт.)",
    price: 9500,
    description: "Пара пластин — полный комплект для бронежилета",
  },
] as const;

type VariantId = (typeof VARIANTS)[number]["id"];

export const ProductPage: FC = () => {
  const [variant, setVariant] = useState<VariantId>("single");

  const { price, label } = VARIANTS.find((v) => v.id === variant)!;

  const handleBuyClick = () => {
    console.log(`Добавить в корзину: ${label} — ${price} ₽`);
    // TODO: dispatch(cartSlice.addItem({ id: 'plate', variant, qty: variant === 'pair' ? 2 : 1 }))
  };

  return (
    <Page back>
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Главное фото товара */}
        <Card
          style={{
            padding: 0,
            overflow: "hidden",
            borderRadius: 12,
          }}
        >
          <Image
            src={plateImg}
            alt="Бронепластина"
            style={{ width: "100%", height: 240, objectFit: "contain" }}
          />
        </Card>

        {/* Название и описание */}
        <Title weight="2">Бронепластина</Title>
        <Text>
          Класс защиты — 5. Совместима с большинством жилетов и плитников.
        </Text>

        {/* Выбор варианта */}
        <SegmentedControl>
          {VARIANTS.map((v) => (
            <SegmentedControl.Item
              key={v.id}
              selected={variant === v.id}
              onClick={() => setVariant(v.id)}
            >
              {v.label}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl>
        <Button size="l" onClick={handleBuyClick}>
          Купить за {price.toLocaleString()} ₽
        </Button>
        {/* Цена и кнопка */}
        <Card style={{ padding: 16 }}>
          <Title weight="3">О товаре</Title>
          <Text>
            Плита выполнена из высокопрочной стали и сертифицирована по классу
            защиты Бр4. Толщина 6 мм, вес одной пластины — 2,5 кг. Переносит
            неоднократные попадания и подходит для установки в большинство
            жилетов.
          </Text>
        </Card>
      </div>
    </Page>
  );
};
