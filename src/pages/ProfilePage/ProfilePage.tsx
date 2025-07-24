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
import { useTheme } from "@/hooks/useTheme";
import Icon from "@/components/common/Icon/Icon";
import profileIcon from "@/static/icons/actions_28.svg";
import helpIcon from "@/static/icons/discussion_28.svg";
import notifyIcon from "@/static/icons/notifications_28.svg";
import ligthThemeIcon from "@/static/icons/sun_low_24.svg";
import darkThemeIcon from "@/static/icons/nightmode_28.svg";
import avatarIcon from "@/static/icons/guard_28.svg";

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
    address: "Москва, ул. Ленина, 15",
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
      return "var(--color-success)";
    case "shipped":
      return "var(--color-accent)"; // Burnt Amber - secondary CTA
    case "processing":
      return "var(--color-gray)"; // Desert Sage - neutral/disabled
    case "cancelled":
      return "var(--military-error)"; // Armor Red - error state
    default:
      return "var(--military-secondary)"; // Evergreen Shade
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
  const { theme, toggleTheme } = useTheme();

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "var(--surface-raised)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
            >
              <Icon
                src={USER_PROFILE.avatar || avatarIcon}
                style={{ width: "70px", height: "70px" }}
                color="active"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Title
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                  color: "var(--text-accent)",
                }}
              >
                {USER_PROFILE.name}
              </Title>

              <Text
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "12px",
                  marginTop: "2px",
                }}
              >
                {USER_PROFILE.address}
              </Text>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "18px",
                transition: "all 0.3s ease",
                border: "1px solid var(--btn-secondary-border)",
              }}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <Icon src={ligthThemeIcon} color="active" />
              ) : (
                <Icon src={darkThemeIcon} color="active" />
              )}
            </button>
          </div>

          {/* Статистика пользователя */}
          {/* <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "var(--military-darker)",
                padding: "16px 12px",
                borderRadius: "12px",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 4px 12px rgba(4, 50, 34, 0.2)",
              }}
            >
              <Text
                style={{
                  color: "var(--military-accent)",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(225, 137, 50, 0.3)",
                }}
              >
                {USER_PROFILE.totalOrders}{" "}
              </Text>
              <Text
                style={{
                  color: "var(--military-gray)",
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
                backgroundColor: "var(--military-darker)",
                padding: "16px 12px",
                borderRadius: "12px",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 4px 12px rgba(4, 50, 34, 0.2)",
              }}
            >
              <Text
                style={{
                  color: "var(--military-accent)",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(225, 137, 50, 0.3)",
                }}
              >
                {(USER_PROFILE.totalSpent / 1000).toFixed(0)}К{" "}
              </Text>
              <Text
                style={{
                  color: "var(--military-gray)",
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
          </div> */}
        </div>

        <div
          style={{
            padding: "0 16px",
          }}
        >
          <SegmentedControl style={{ backgroundColor: "var(--bg-subtle)" }}>
            <SegmentedControl.Item
              selected={activeTab === "orders"}
              onClick={() => setActiveTab("orders")}
              style={{
                backgroundColor:
                  activeTab === "orders" ? "var(--brand)" : "transparent",
                color:
                  activeTab === "orders"
                    ? "var(--btn-primary-text)"
                    : "var(--text-gray)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "14px",
              }}
            >
              ЗАКАЗЫ
            </SegmentedControl.Item>
            <SegmentedControl.Item
              selected={activeTab === "info"}
              onClick={() => setActiveTab("info")}
              style={{
                backgroundColor:
                  activeTab === "info" ? "var(--brand)" : "transparent",
                color:
                  activeTab === "info"
                    ? "var(--btn-primary-text)"
                    : "var(--text-gray)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "14px",
              }}
            >
              ПРОФИЛЬ
            </SegmentedControl.Item>
          </SegmentedControl>
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
                    borderRadius: "12px",
                    backgroundColor: "var(--bg-subtle)",
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
                          color: "var(--text-primary)",
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
                          color: "var(--text-secondary)",
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
                      backgroundColor: "var(--bg-base)",
                      padding: "12px",
                      borderRadius: "8px",
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
                              color: "var(--text-accent)",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {item.name},{" "}
                          </Text>
                          <Text
                            style={{
                              color: "var(--text-secondary)",
                              fontSize: "12px",
                            }}
                          >
                            {item.quantity}шт.
                          </Text>
                        </div>
                        <Text
                          style={{
                            color: "var(--text-accent)",
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
                      borderRadius: "8px",
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
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        ТИП ДОСТАВКИ:
                      </Text>
                      <Text
                        style={{
                          color: "var(--text-accent)",
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
                            color: "var(--text-secondary)",
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          ТРЕК-НОМЕР:
                        </Text>
                        <Text
                          style={{
                            color: "var(--blue)",
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
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        АДРЕС:
                      </Text>
                      <Text
                        style={{
                          color: "var(--text-accent)",
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
                        color: "var(--text-primary)",
                        fontSize: "18px",
                        fontWeight: "700",

                        letterSpacing: "1px",
                      }}
                    >
                      {order.total.toLocaleString()} ₽
                    </Text>

                    {order.trackingNumber && (
                      <Button
                        size="s"
                        style={{
                          backgroundColor: "var(--blue)",
                          color: "var(--white)",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "12px",
                        }}
                      >
                        Отследить
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
              <div>
                <Title
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  ОСНОВНЫЕ ДАННЫЕ
                </Title>

                <div
                  style={{
                    backgroundColor: "var(--bg-subtle)",
                    padding: "12px",
                    borderRadius: "8px",
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
                      ФИО:
                    </Text>
                    <Text
                      style={{
                        color: "var(--text-accent)",
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
                        color: "var(--text-secondary)",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      АДРЕС:
                    </Text>
                    <Text
                      style={{
                        color: "var(--text-accent)",
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
                        color: "var(--text-secondary)",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      ТЕЛЕФОН:
                    </Text>
                    <Text
                      style={{
                        color: "var(--text-accent)",
                        fontSize: "14px",
                        fontWeight: "700",
                        fontFamily: "monospace",
                      }}
                    >
                      {USER_PROFILE.phone}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Настройки аккаунта */}
              <div>
                <Title
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  НАСТРОЙКИ
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
                      backgroundColor: "var(--bg-subtle)",
                      color: "var(--text-primary)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    before={<Icon src={profileIcon} color="active" />}
                  >
                    ИЗМЕНИТЬ ДАННЫЕ
                  </Button>
                  <Button
                    size="m"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      color: "var(--text-primary)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                    }}
                    before={<Icon src={notifyIcon} color="active" />}
                  >
                    УВЕДОМЛЕНИЯ
                  </Button>
                  <Button
                    size="m"
                    style={{
                      backgroundColor: "var(--bg-subtle)",
                      color: "var(--text-primary)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      borderRadius: "8px",
                      justifyContent: "flex-start",
                    }}
                    before={<Icon src={helpIcon} color="active" />}
                  >
                    ПОДДЕРЖКА
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};
