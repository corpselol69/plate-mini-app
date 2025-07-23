import type { FC } from "react";
import { useState } from "react";
import { Page } from "@/components/Page.tsx";
import {
  Card,
  Title,
  Text,
  Button,
  SegmentedControl,
} from "@telegram-apps/telegram-ui";

// Типы данных
interface Order {
  id: string;
  date: string;
  status: "completed" | "shipped" | "processing" | "cancelled";
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  deliveryType: "pickup" | "cdek";
  trackingNumber?: string;
  address?: string;
}

interface UserProfile {
  id: string;
  name: string;
  address: string;
  phone: string;
  avatar?: string;
  registrationDate: string;
  totalOrders: number;
  totalSpent: number;
}

// Моковые данные пользователя
const USER_PROFILE: UserProfile = {
  id: "usr_001",
  name: "Сергей Михайлов",
  address: "Москва, ул. Пушкина, д. 4, кв. 15",
  phone: "+7 (905) 123-45-67",
  registrationDate: "2024-01-15",
  totalOrders: 12,
  totalSpent: 180500,
};

// Моковые данные заказов
const ORDERS: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-07-20",
    status: "shipped",
    items: [
      { name: "Бронепластина (комплект)", quantity: 1, price: 9500 },
      { name: "Тактический жилет", quantity: 1, price: 12000 },
    ],
    total: 21500,
    deliveryType: "cdek",
    trackingNumber: "1234567890123",
    address: "Москва, ул. Ленина, 15, пункт выдачи СДЭК",
  },
  {
    id: "ORD-2024-002",
    date: "2024-07-15",
    status: "completed",
    items: [{ name: "Бронепластина", quantity: 2, price: 5000 }],
    total: 10000,
    deliveryType: "pickup",
    address: "Москва, ул. Пушкина, 4",
  },
  {
    id: "ORD-2024-003",
    date: "2024-07-10",
    status: "processing",
    items: [
      { name: "Тактические очки", quantity: 1, price: 3500 },
      { name: "Перчатки тактические", quantity: 1, price: 2500 },
    ],
    total: 6000,
    deliveryType: "pickup",
    address: "Москва, ул. Пушкина, 4",
  },
];

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "completed":
      return "#38a169";
    case "shipped":
      return "#3182ce";
    case "processing":
      return "#d69e2e";
    case "cancelled":
      return "#e53e3e";
    default:
      return "#4a5568";
  }
};

const getStatusText = (status: Order["status"]) => {
  switch (status) {
    case "completed":
      return "ВЫПОЛНЕН";
    case "shipped":
      return "В ПУТИ";
    case "processing":
      return "ОБРАБОТКА";
    case "cancelled":
      return "ОТМЕНЕН";
    default:
      return "НЕИЗВЕСТНО";
  }
};

export const ProfilePage: FC = () => {
  const [activeTab, setActiveTab] = useState<"orders" | "info">("orders");

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor:
              "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
            padding: "20px 16px",
            borderBottom: "2px solid #4a5568",
            position: "relative",
          }}
        >
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

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#4a5568",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #38a169",
                fontSize: "32px",
              }}
            >
              🪖
            </div>
            <div style={{ flex: 1 }}>
              <Title
                style={{
                  color: "#e2e8f0",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  letterSpacing: "0.5px",
                  marginBottom: "4px",
                }}
              >
                {USER_PROFILE.name}
              </Title>

              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "12px",
                  marginTop: "2px",
                }}
              >
                {USER_PROFILE.address}
              </Text>
            </div>
          </div>

          {/* Статистика пользователя */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "#1a202c",
                padding: "16px 12px",
                borderRadius: "12px",
                border: "2px solid #38a169",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 4px 12px rgba(56, 161, 105, 0.2)",
              }}
            >
              <Text
                style={{
                  color: "#68d391",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(104, 211, 145, 0.3)",
                }}
              >
                {USER_PROFILE.totalOrders}{" "}
              </Text>
              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  marginTop: "4px",
                }}
              >
                заказов
              </Text>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: "#1a202c",
                padding: "16px 12px",
                borderRadius: "12px",
                border: "2px solid #38a169",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 4px 12px rgba(56, 161, 105, 0.2)",
              }}
            >
              <Text
                style={{
                  color: "#68d391",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(104, 211, 145, 0.3)",
                }}
              >
                {(USER_PROFILE.totalSpent / 1000).toFixed(0)}К{" "}
              </Text>
              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  marginTop: "4px",
                }}
              >
                Потрачено, ₽
              </Text>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "#2d3748",
            borderBottom: "1px solid #4a5568",
          }}
        >
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
                selected={activeTab === "orders"}
                onClick={() => setActiveTab("orders")}
                style={{
                  backgroundColor:
                    activeTab === "orders" ? "#38a169" : "transparent",
                  color: activeTab === "orders" ? "white" : "#a0aec0",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "14px",
                }}
              >
                📦 ЗАКАЗЫ
              </SegmentedControl.Item>
              <SegmentedControl.Item
                selected={activeTab === "info"}
                onClick={() => setActiveTab("info")}
                style={{
                  backgroundColor:
                    activeTab === "info" ? "#38a169" : "transparent",
                  color: activeTab === "info" ? "white" : "#a0aec0",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "14px",
                }}
              >
                👤 ПРОФИЛЬ
              </SegmentedControl.Item>
            </SegmentedControl>
          </div>
        </div>

        {/* Основной контент */}
        <div style={{ flex: 1, padding: "16px" }}>
          {activeTab === "orders" && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {ORDERS.map((order) => (
                <Card
                  key={order.id}
                  style={{
                    padding: "16px",
                    backgroundColor: "#2d3748",
                    border: "1px solid #4a5568",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <Text
                        style={{
                          color: "#e2e8f0",
                          fontSize: "16px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {order.id}{" "}
                      </Text>
                      <Text
                        style={{
                          color: "#a0aec0",
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        {new Date(order.date).toLocaleDateString("ru-RU")}
                      </Text>
                    </div>
                    <div
                      style={{
                        backgroundColor: getStatusColor(order.status),
                        color: "white",
                        padding: "6px 12px",
                        fontSize: "10px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      {getStatusText(order.status)}
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#1a202c",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #4a5568",
                      marginBottom: "12px",
                    }}
                  >
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom:
                            index < order.items.length - 1 ? "8px" : "0",
                        }}
                      >
                        <div>
                          <Text
                            style={{
                              color: "#e2e8f0",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {item.name},{" "}
                          </Text>
                          <Text
                            style={{
                              color: "#a0aec0",
                              fontSize: "12px",
                            }}
                          >
                            {item.quantity}шт.
                          </Text>
                        </div>
                        <Text
                          style={{
                            color: "#68d391",
                            fontSize: "14px",
                            fontWeight: "700",
                          }}
                        >
                          {item.price.toLocaleString()} ₽
                        </Text>
                      </div>
                    ))}
                  </div>

                  {/* Доставка и трекинг */}
                  <div
                    style={{
                      backgroundColor: "#1a202c",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #4a5568",
                      marginBottom: "12px",
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
                          fontSize: "12px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        ТИП ДОСТАВКИ:
                      </Text>
                      <Text
                        style={{
                          color: "#e2e8f0",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        {order.deliveryType === "pickup" ? "САМОВЫВОЗ" : "СДЭК"}
                      </Text>
                    </div>

                    {order.trackingNumber && (
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
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          ТРЕК-НОМЕР:
                        </Text>
                        <Text
                          style={{
                            color: "#3182ce",
                            fontSize: "12px",
                            fontWeight: "700",
                            fontFamily: "monospace",
                          }}
                        >
                          {order.trackingNumber}
                        </Text>
                      </div>
                    )}

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
                          textTransform: "uppercase",
                        }}
                      >
                        АДРЕС:
                      </Text>
                      <Text
                        style={{
                          color: "#e2e8f0",
                          fontSize: "12px",
                          textAlign: "right",
                          maxWidth: "180px",
                        }}
                      >
                        {order.address}
                      </Text>
                    </div>
                  </div>

                  {/* Итого и кнопки */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#68d391",
                        fontSize: "18px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      ИТОГО: {order.total.toLocaleString()} ₽
                    </Text>

                    {order.trackingNumber && (
                      <Button
                        size="s"
                        style={{
                          backgroundColor: "#3182ce",
                          color: "white",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "12px",
                        }}
                      >
                        🚚 ОТСЛЕДИТЬ
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "info" && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <Card
                style={{
                  padding: "16px",
                  backgroundColor: "#2d3748",
                  border: "1px solid #4a5568",
                  borderRadius: "12px",
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
                  📋 ОСНОВНЫЕ ДАННЫЕ
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
                      ФИО:
                    </Text>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {USER_PROFILE.name}
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
                      АДРЕС:
                    </Text>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: "700",
                        textAlign: "right",
                        maxWidth: "180px",
                      }}
                    >
                      {USER_PROFILE.address}
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
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      ТЕЛЕФОН:
                    </Text>
                    <Text
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: "700",
                        fontFamily: "monospace",
                      }}
                    >
                      {USER_PROFILE.phone}
                    </Text>
                  </div>
                </div>
              </Card>

              {/* Настройки аккаунта */}
              <Card
                style={{
                  padding: "16px",
                  backgroundColor: "#2d3748",
                  border: "1px solid #4a5568",
                  borderRadius: "12px",
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
                  ⚙️ НАСТРОЙКИ
                </Title>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Button
                    size="m"
                    style={{
                      backgroundColor: "#4a5568",
                      color: "#e2e8f0",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      border: "1px solid #68d391",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                    }}
                  >
                    📝 ИЗМЕНИТЬ ДАННЫЕ
                  </Button>
                  <Button
                    size="m"
                    style={{
                      backgroundColor: "#4a5568",
                      color: "#e2e8f0",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      border: "1px solid #68d391",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                    }}
                  >
                    🔔 УВЕДОМЛЕНИЯ
                  </Button>
                  <Button
                    size="m"
                    style={{
                      backgroundColor: "#4a5568",
                      color: "#e2e8f0",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      border: "1px solid #68d391",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                    }}
                  >
                    📞 ПОДДЕРЖКА
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};
