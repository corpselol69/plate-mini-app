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
} from "@telegram-apps/telegram-ui";

import plateImg from "@/static/plate.png";

interface CartItem {
  id: string;
  title: string;
  price: number;
  qty: number;
  img: string;
}

const initialItems: CartItem[] = [
  {
    id: "plate-single",
    title: "Бронепластина (1 шт.)",
    price: 5000,
    qty: 1,
    img: plateImg,
  },
];

export const CartPage: FC = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [delivery, setDelivery] = useState<"pickup" | "cdek">("pickup");

  const inc = (id: string) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );

  const dec = (id: string) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id && it.qty > 1 ? { ...it, qty: it.qty - 1 } : it
      )
    );

  const remove = (id: string) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <Page>
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Title weight="2">Корзина</Title>

        {items.length === 0 ? (
          <Text>Ваша корзина пуста.</Text>
        ) : (
          items.map((item) => (
            <Card
              key={item.id}
              style={{ padding: 12, display: "flex", gap: 12 }}
            >
              <Image
                src={item.img}
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "contain",
                  boxShadow: "none",
                }}
              />

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Text>{item.title}</Text>
                <Text weight="2">
                  {(item.price * item.qty).toLocaleString()} ₽
                </Text>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* <Button
                    size="s"
                    mode="secondary"
                    before={<Icon28MinusCircleOutline />}
                    onClick={() => dec(item.id)}
                  />
                  <Text weight="2">{item.qty}</Text>
                  <Button
                    size="s"
                    mode="secondary"
                    before={<Icon28AddCircleOutline />}
                    onClick={() => inc(item.id)}
                  />
                  <Button
                    size="s"
                    mode="destructive"
                    before={<Icon28DeleteOutline />}
                    onClick={() => remove(item.id)}
                  /> */}
                </div>
              </div>
            </Card>
          ))
        )}

        {/* Способ доставки */}
        <Card style={{ padding: 12 }}>
          <Text weight="2">Способ доставки</Text>
          <SegmentedControl>
            <SegmentedControl.Item
              selected={delivery === "pickup"}
              onClick={() => setDelivery("pickup")}
            >
              Самовывоз
            </SegmentedControl.Item>
            <SegmentedControl.Item
              selected={delivery === "cdek"}
              onClick={() => setDelivery("cdek")}
            >
              СДЭК
            </SegmentedControl.Item>
          </SegmentedControl>
        </Card>

        {/* Итог */}
        <Button size="l" stretched disabled={items.length === 0}>
          Оформить заказ на {total.toLocaleString()} ₽
        </Button>
      </div>
    </Page>
  );
};
