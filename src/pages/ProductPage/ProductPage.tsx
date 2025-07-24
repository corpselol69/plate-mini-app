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
        }}
      >
        {/* Военный хедер продукта */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background:
              "linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-base) 100%)",
            padding: "16px",
            position: "relative",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <Title
            weight="1"
            style={{
              color: "var(--text-primary)",
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            БРОНЕПЛАСТИНА
          </Title>
          <Text
            style={{
              color: "var(--text-secondary)",
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
        <div style={{ flex: 1, padding: "20px 16px 0" }}>
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
                backgroundColor: "var(--color-success)",
                color: "var(--white)",
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
                backgroundColor: "var(--color-accent)",
                color: "var(--white)",
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
            <Text
              style={{
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              Сертифицированная защита класса 5. Совместима с большинством
              тактических жилетов и плитоносцев.
            </Text>
          </div>

          {/* Технические характеристики */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Title
              style={{
                color: "var(--color-accent)",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
            </Title>

            <div
              style={{
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "var(--bg-subtle)",
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
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  КЛАСС ЗАЩИТЫ:
                </Text>
                <Text
                  style={{
                    color: "var(--text-accent)",
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
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  МАТЕРИАЛ:
                </Text>
                <Text
                  style={{
                    color: "var(--text-accent)",
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
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ТОЛЩИНА:
                </Text>
                <Text
                  style={{
                    color: "var(--text-accent)",
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
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ВЕС (1 ШТ.):
                </Text>
                <Text
                  style={{
                    color: "var(--text-accent)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  2.5 КГ
                </Text>
              </div>
            </div>
          </div>

          {/* Выбор комплектации */}
          <div style={{ marginBottom: "20px" }}>
            <Text
              style={{
                color: "var(--color-accent)",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ВЫБЕРИТЕ КОМПЛЕКТАЦИЮ
            </Text>

            <SegmentedControl
              style={{ backgroundColor: "var(--bg-subtle)", marginTop: "12px" }}
            >
              {VARIANTS.map((v) => (
                <SegmentedControl.Item
                  key={v.id}
                  selected={variant === v.id}
                  onClick={() => setVariant(v.id)}
                  style={{
                    backgroundColor:
                      variant === v.id
                        ? "var(--btn-primary-bg)"
                        : "transparent",
                    color:
                      variant === v.id
                        ? "var(--btn-primary-text)"
                        : "var(--text-secondary)",
                    border: "none",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontSize: "14px",
                  }}
                >
                  {v.label}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl>

            {/* Описание выбранного варианта */}
            <div
              style={{
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  color: "var(--text-secondary)",
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
            size="m"
            onClick={handleBuyClick}
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "none",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(170, 191, 173, 0.3)",
              fontSize: "18px",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            В корзину • {price.toLocaleString()} ₽
          </Button>

          {/* Подробная информация о товаре */}
          <div>
            <Title
              style={{
                color: "var(--color-accent)",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ДЕТАЛЬНОЕ ОПИСАНИЕ
            </Title>

            <div>
              <Text
                style={{
                  color: "var(--text-primary)",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Бронепластина выполнена из высокопрочной стали с керамическим
                покрытием и сертифицирована по классу защиты БР5. Толщина
                составляет 6 мм, вес одной пластины — 2,5 кг.
                <br />
                <strong style={{ color: "var(--color-accent)" }}>
                  Особенности:
                </strong>
                <br />
                • Переносит множественные попадания
                <br />
                • Совместима с большинством тактических жилетов
                <br />
                • Устойчива к экстремальным температурам
                <br />• Прошла полевые испытания
              </Text>
            </div>
          </div>
        </div>

        {/* Гарантии */}
        <div
          style={{
            backgroundColor: "var(--bg-subtle)",
            textAlign: "center",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              color: "var(--color-accent)",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            ПРОВЕРЕНО • СЕРТИФИЦИРОВАНО •&nbsp;ГАРАНТИЯ&nbsp;2&nbsp;ГОДА
          </Text>
        </div>
      </div>
    </Page>
  );
};
