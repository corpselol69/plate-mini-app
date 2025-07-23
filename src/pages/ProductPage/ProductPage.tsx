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
    description: "Пара пластин — полный комплект для бронежилета",
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
          display: "flex",
          flexDirection: "column",
          gap: 0,
          minHeight: "100vh",
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Военный хедер продукта */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor:
              "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            padding: "16px",
            borderBottom: "2px solid #4a5568",
            position: "relative",
          }}
        >
          {/* Декоративные элементы */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(90deg, #38a169 0%, #68d391 50%, #38a169 100%)",
            }}
          />

          <Title
            weight="1"
            style={{
              color: "#e2e8f0",
              fontSize: "20px",
              fontWeight: "700",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            БОЕВОЕ СНАРЯЖЕНИЕ
          </Title>
          <Text
            style={{
              color: "#a0aec0",
              fontSize: "12px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginTop: "4px",
            }}
          >
            КЛАСС ЗАЩИТЫ • ВОЕННЫЙ СТАНДАРТ
          </Text>
        </div>

        {/* Основной контент */}
        <div style={{ flex: 1, padding: "20px 16px" }}>
          {/* Главное фото товара */}
          <Card
            style={{
              padding: 0,
              overflow: "hidden",

              position: "relative",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <Image
              src={plateImg}
              alt="Бронепластина"
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
            />
            {/* Военные бейджи */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                backgroundColor: "#38a169",
                color: "white",
                padding: "6px 12px",
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              MILITARY GRADE
            </div>
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                backgroundColor: "#e53e3e",
                color: "white",
                padding: "6px 12px",
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              КЛАСС 5
            </div>
          </Card>

          {/* Название и базовое описание */}
          <div style={{ marginBottom: "20px" }}>
            <Title
              style={{
                color: "#e2e8f0",
                fontSize: "28px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              БРОНЕПЛАСТИНА
            </Title>
            <Text
              style={{
                color: "#a0aec0",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              Сертифицированная защита класса 5. Совместима с большинством
              тактических жилетов и плитоносцев.
            </Text>
          </div>

          {/* Технические характеристики */}
          <Card
            style={{
              padding: "16px",
              backgroundColor: "#2d3748",
              border: "1px solid #4a5568",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <Title
              style={{
                color: "#68d391",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              📋 ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
            </Title>

            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #4a5568",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text
                  style={{
                    color: "#68d391",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  КЛАСС ЗАЩИТЫ:
                </Text>
                <Text
                  style={{
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  БР5
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text
                  style={{
                    color: "#68d391",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  МАТЕРИАЛ:
                </Text>
                <Text
                  style={{
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  СТАЛЬ + КЕРАМИКА
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text
                  style={{
                    color: "#68d391",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ТОЛЩИНА:
                </Text>
                <Text
                  style={{
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  6 ММ
                </Text>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text
                  style={{
                    color: "#68d391",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ВЕС (1 ШТ.):
                </Text>
                <Text
                  style={{
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  2.5 КГ
                </Text>
              </div>
            </div>
          </Card>

          {/* Выбор комплектации */}
          <div style={{ marginBottom: "20px" }}>
            <Text
              style={{
                color: "#68d391",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              ⚙️ ВЫБЕРИТЕ КОМПЛЕКТАЦИЮ
            </Text>

            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "4px",
                borderRadius: "8px",
                border: "1px solid #4a5568",
              }}
            >
              <SegmentedControl>
                {VARIANTS.map((v) => (
                  <SegmentedControl.Item
                    key={v.id}
                    selected={variant === v.id}
                    onClick={() => setVariant(v.id)}
                    style={{
                      backgroundColor:
                        variant === v.id ? "#38a169" : "transparent",
                      color: variant === v.id ? "white" : "#a0aec0",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "14px",
                    }}
                  >
                    {v.label}
                  </SegmentedControl.Item>
                ))}
              </SegmentedControl>
            </div>

            {/* Описание выбранного варианта */}
            <div
              style={{
                backgroundColor: "#2d3748",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #4a5568",
                marginTop: "12px",
              }}
            >
              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
                {VARIANTS.find((v) => v.id === variant)?.description}
              </Text>
            </div>
          </div>

          {/* Кнопка покупки */}
          <Button
            size="l"
            onClick={handleBuyClick}
            style={{
              backgroundColor: "#38a169",
              color: "white",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "none",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(56, 161, 105, 0.3)",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            🛒 ДОБАВИТЬ В СКЛАД • {price.toLocaleString()} ₽
          </Button>

          {/* Подробная информация о товаре */}
          <Card
            style={{
              padding: "20px",
              backgroundColor: "#2d3748",
              border: "1px solid #4a5568",
              borderRadius: "12px",
            }}
          >
            <Title
              style={{
                color: "#68d391",
                fontSize: "18px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "16px",
              }}
            >
              📖 ДЕТАЛЬНОЕ ОПИСАНИЕ
            </Title>

            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #4a5568",
              }}
            >
              <Text
                style={{
                  color: "#e2e8f0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Бронепластина выполнена из высокопрочной стали с керамическим
                покрытием и сертифицирована по классу защиты БР5. Толщина
                составляет 6 мм, вес одной пластины — 2,5 кг.
                <br />
                <br />
                <strong style={{ color: "#68d391" }}>Особенности:</strong>
                <br />
                • Переносит множественные попадания
                <br />
                • Совместима с большинством тактических жилетов
                <br />
                • Устойчива к экстремальным температурам
                <br />• Прошла полевые испытания
              </Text>
            </div>

            {/* Гарантии */}
            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #38a169",
                marginTop: "16px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  color: "#68d391",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                ✅ ПРОВЕРЕНО • СЕРТИФИЦИРОВАНО • ГАРАНТИЯ 2 ГОДА
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};
