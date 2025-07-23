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
  const [selectedCdekPoint, setSelectedCdekPoint] = useState<string>("");

  // Пункты выдачи СДЭК в Москве (в реальном проекте можно получить через API)
  const cdekPoints = [
    {
      id: "msk001",
      address: "ул. Тверская, д. 15, ТЦ 'Галерея Актер'",
      workingHours: "Пн-Вс: 10:00-21:00",
      phone: "+7 (495) 123-45-67",
    },
    {
      id: "msk002",
      address: "пр-т Мира, д. 33, стр. 1, офис 205",
      workingHours: "Пн-Пт: 09:00-19:00, Сб: 10:00-16:00",
      phone: "+7 (495) 234-56-78",
    },
    {
      id: "msk003",
      address: "ул. Арбат, д. 24/2, помещение 15",
      workingHours: "Пн-Вс: 08:00-22:00",
      phone: "+7 (495) 345-67-89",
    },
    {
      id: "msk004",
      address: "Ленинский пр-т, д. 47, ТЦ 'Мосмарт'",
      workingHours: "Пн-Вс: 10:00-22:00",
      phone: "+7 (495) 456-78-90",
    },
    {
      id: "msk005",
      address: "ул. Профсоюзная, д. 109, корп. 2",
      workingHours: "Пн-Пт: 09:00-20:00, Сб-Вс: 10:00-18:00",
      phone: "+7 (495) 567-89-01",
    },
  ];

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
  const deliveryPrice = delivery === "cdek" ? 300 : 0;
  const finalTotal = total + deliveryPrice;

  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          minHeight: "100vh",
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Военный хедер корзины */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor:
              "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            padding: "8px 16px",
            borderBottom: "2px solid #4a5568",
            position: "relative",
          }}
        >
          <Title
            weight="1"
            style={{
              color: "#e2e8f0",
              fontSize: "24px",
              fontWeight: "700",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            корзина
          </Title>
          <Text
            style={{
              color: "#a0aec0",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginTop: "4px",
            }}
          >
            {items.length} ед. снаряжения
          </Text>
        </div>

        {/* Основной контент */}
        <div style={{ flex: 1, padding: "24px 16px" }}>
          {items.length === 0 ? (
            <Card
              style={{
                padding: "40px 20px",
                backgroundColor: "#2d3748",
                border: "1px solid #4a5568",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "18px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                СКЛАД ПУСТ
              </Text>
              <Text
                style={{
                  color: "#68d391",
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                Добавьте снаряжение для оформления заказа
              </Text>
            </Card>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {items.map((item) => (
                <Card
                  key={item.id}
                  style={{
                    padding: 0,
                    backgroundColor: "#2d3748",
                    border: "1px solid #4a5568",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    style={{ padding: "16px", display: "flex", gap: "16px" }}
                  >
                    <div style={{ position: "relative" }}>
                      <Image
                        src={item.img}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          boxShadow: "none",
                          borderRadius: "8px",
                          border: "2px solid #4a5568",
                        }}
                      />
                      {/* Военный бейдж */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-8px",
                          backgroundColor: "#38a169",
                          color: "white",
                          padding: "4px 8px",
                          fontSize: "10px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        ✓
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <Text
                        style={{
                          color: "#e2e8f0",
                          fontSize: "16px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.title}
                      </Text>

                      {/* Технические данные */}
                      <div
                        style={{
                          backgroundColor: "#1a202c",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          border: "1px solid #4a5568",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <Text
                            style={{
                              color: "#68d391",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            КОЛ-ВО:
                          </Text>
                          <Text
                            style={{
                              color: "#e2e8f0",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            {item.qty} ШТ.
                          </Text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              color: "#68d391",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            СТОИМОСТЬ:
                          </Text>
                          <Text
                            style={{
                              color: "#e2e8f0",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            {(item.price * item.qty).toLocaleString()} ₽
                          </Text>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "8px",
                        }}
                      >
                        {/* Здесь будут кнопки для изменения количества */}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Способ доставки */}
          {items.length > 0 && (
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <Text
                weight="2"
                style={{
                  color: "#e2e8f0",
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "16px",
                }}
              >
                СПОСОБ ДОСТАВКИ
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
                  <SegmentedControl.Item
                    selected={delivery === "pickup"}
                    onClick={() => {
                      setDelivery("pickup");
                      setSelectedCdekPoint(""); // Сбрасываем выбор пункта СДЭК
                    }}
                    style={{
                      backgroundColor:
                        delivery === "pickup" ? "#38a169" : "transparent",
                      color: delivery === "pickup" ? "white" : "#a0aec0",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "14px",
                    }}
                  >
                    САМОВЫВОЗ
                  </SegmentedControl.Item>
                  <SegmentedControl.Item
                    selected={delivery === "cdek"}
                    onClick={() => setDelivery("cdek")}
                    style={{
                      backgroundColor:
                        delivery === "cdek" ? "#38a169" : "transparent",
                      color: delivery === "cdek" ? "white" : "#a0aec0",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "14px",
                    }}
                  >
                    СДЭК
                  </SegmentedControl.Item>
                </SegmentedControl>
              </div>

              <div style={{ marginTop: "16px" }}>
                {delivery === "pickup" ? (
                  // Адрес самовывоза
                  <div>
                    <div style={{ marginBottom: "12px" }}>
                      <Text
                        style={{
                          color: "#68d391",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        📍 ПУНКТ ВЫДАЧИ
                      </Text>
                    </div>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginBottom: "8px",
                      }}
                    >
                      г. Москва, ул. Пушкина, д. 4
                    </Text>
                    <div
                      style={{
                        backgroundColor: "#1a202c",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #4a5568",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          РЕЖИМ РАБОТЫ:
                        </Text>
                        <Text
                          style={{
                            color: "#e2e8f0",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          Пн-Пт: 09:00-18:00
                        </Text>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          ТЕЛЕФОН:
                        </Text>
                        <Text
                          style={{
                            color: "#e2e8f0",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          +7 (495) 123-45-67
                        </Text>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          СТОИМОСТЬ:
                        </Text>
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          БЕСПЛАТНО
                        </Text>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Пункты выдачи СДЭК
                  <div>
                    <Text
                      style={{
                        color: "#68d391",
                        fontSize: "14px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "12px",
                      }}
                    >
                      📦 ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ СДЭК
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {cdekPoints.map((point) => (
                        <Card
                          key={point.id}
                          style={{
                            padding: "12px",
                            backgroundColor:
                              selectedCdekPoint === point.id
                                ? "#2d3748"
                                : "#1a202c",
                            border:
                              selectedCdekPoint === point.id
                                ? "1px solid #38a169"
                                : "1px solid #4a5568",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onClick={() => setSelectedCdekPoint(point.id)}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                            }}
                          >
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor:
                                  selectedCdekPoint === point.id
                                    ? "#38a169"
                                    : "transparent",
                                border:
                                  "2px solid " +
                                  (selectedCdekPoint === point.id
                                    ? "#38a169"
                                    : "#4a5568"),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "2px",
                              }}
                            >
                              {selectedCdekPoint === point.id && (
                                <div
                                  style={{
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                  }}
                                />
                              )}
                            </div>
                            <div style={{ flex: 1 }}>
                              <Text
                                style={{
                                  color: "#e2e8f0",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  marginBottom: "4px",
                                }}
                              >
                                {point.address}
                              </Text>
                              <Text
                                style={{
                                  color: "#a0aec0",
                                  fontSize: "12px",
                                  marginBottom: "2px",
                                }}
                              >
                                {point.workingHours}
                              </Text>
                              <Text
                                style={{
                                  color: "#68d391",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                {point.phone}
                              </Text>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div
                      style={{
                        backgroundColor: "#1a202c",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #4a5568",
                        marginTop: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          СТОИМОСТЬ ДОСТАВКИ:
                        </Text>
                        <Text
                          style={{
                            color: "#e2e8f0",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          300 ₽
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Итоговая кнопка */}
          {items.length > 0 && (
            <div style={{ marginTop: "24px" }}>
              <Button
                size="l"
                stretched
                disabled={
                  items.length === 0 ||
                  (delivery === "cdek" && !selectedCdekPoint)
                }
                style={{
                  backgroundColor:
                    items.length === 0 ||
                    (delivery === "cdek" && !selectedCdekPoint)
                      ? "#4a5568"
                      : "#38a169",
                  color: "white",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "12px",
                  padding: "18px",
                  boxShadow:
                    items.length === 0 ||
                    (delivery === "cdek" && !selectedCdekPoint)
                      ? "none"
                      : "0 4px 16px rgba(56, 161, 105, 0.3)",
                  fontSize: "16px",
                }}
              >
                {delivery === "cdek" && !selectedCdekPoint
                  ? "ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ"
                  : `ОФОРМИТЬ ЗАКАЗ • ${finalTotal.toLocaleString()} ₽`}
              </Button>

              {/* Детализация стоимости */}
              {deliveryPrice > 0 && (
                <div
                  style={{
                    backgroundColor: "#1a202c",
                    padding: "12px",
                    borderRadius: "8px",
                    marginTop: "12px",
                    border: "1px solid #4a5568",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <Text style={{ color: "#a0aec0", fontSize: "14px" }}>
                      Товары:
                    </Text>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {total.toLocaleString()} ₽
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <Text style={{ color: "#a0aec0", fontSize: "14px" }}>
                      Доставка СДЭК:
                    </Text>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {deliveryPrice.toLocaleString()} ₽
                    </Text>
                  </div>
                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid #4a5568",
                      margin: "8px 0",
                    }}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text
                      style={{
                        color: "#68d391",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      ИТОГО:
                    </Text>
                    <Text
                      style={{
                        color: "#68d391",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {finalTotal.toLocaleString()} ₽
                    </Text>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};
