import { useState, type FC } from "react";

import { Page } from "@/components/Page.tsx";
import { Card, Title, Button, Text, Image } from "@telegram-apps/telegram-ui";
import logo from "@/static/logo.png";
import broneImg from "@/static/placeholders/brone.webp";
import { NavBar } from "@/components/common/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const IndexPage: FC = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"home" | "cart" | "profile">(
    "home"
  );
  const handleBuyClick = () => {
    navigate("/product");
  };
  return (
    <Page back={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            backgroundColor: "var(--tg-theme-bg-color, white)",

            padding: "4px 12px",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            zIndex: 1000,
          }}
        >
          <Image
            src={logo}
            style={{
              boxShadow: "none",
              width: "72px",
              minWidth: "72px",
              height: "72px",
              backgroundColor: "transparent",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Title weight="2">Магазин&nbsp;Бронепластин</Title>
            <Text>Испытано в&nbsp;полевых условиях</Text>
          </div>
        </div>

        <Card style={{ padding: 12, margin: "0 16px" }} type="plain">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Image
              src={broneImg}
              style={{
                boxShadow: "none",
                width: "100%",
                minWidth: "100%",
                height: "200px",
                borderRadius: 8,
              }}
            />
            <Title weight={"3"}>Бронепластина</Title>
            <Text>1 шт. или комплект из 2 — выбирай нужную конфигурацию.</Text>

            <Button size="l" onClick={handleBuyClick}>
              Подробнее
            </Button>
          </div>
        </Card>

        <Text weight={"1"} style={{ color: "#999", textAlign: "center" }}>
          Сделано с заботой о безопасности
        </Text>
      </div>
    </Page>
  );
};
