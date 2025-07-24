import { type FC } from "react";

import { Page } from "@/components/Page.tsx";
import { Card, Title, Button, Text, Image } from "@telegram-apps/telegram-ui";
import logo from "@/static/logo.png";
import broneImg from "@/static/placeholders/brone.webp";
import { useNavigate } from "react-router-dom";

export const IndexPage: FC = () => {
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/product");
  };
  return (
    <Page back={false}>
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
            background:
              "linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-base) 100%)",
            padding: "16px",
            borderRadius: "0 0 12px 12px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image
              src={logo}
              style={{
                width: "60px",
                minWidth: "60px",
                height: "60px",
                backgroundColor: "transparent",
                borderRadius: "50%",
                border: "none",
                boxShadow: "none",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Title
                weight="1"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "20px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                АРМЕЙСКИЙ МАГАЗИН
              </Title>
              <Text
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                ПРОВЕРЕНО БОЕМ
              </Text>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, padding: "24px 16px" }}>
          <Card
            style={{
              padding: 0,
              backgroundColor: "var(--bg-subtle)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
            type="plain"
          >
            <div style={{ position: "relative" }}>
              <Image
                src={broneImg}
                style={{
                  boxShadow: "none",
                  width: "100%",
                  minWidth: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "var(--color-success)",
                  color: "var(--white)",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  borderRadius: "4px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                MILITARY GRADE
              </div>
            </div>

            <div style={{ padding: "20px" }}>
              <Title
                weight="2"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                БРОНЕПЛАСТИНА
              </Title>

              <Text
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                Сертифицированная защита класса IIIA. Индивидуальная или парная
                комплектация по вашему выбору.
              </Text>

              <div
                style={{
                  backgroundColor: "var(--bg-base)",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  marginTop: "8px",
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
                    IIIA
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
                    КЕРАМИКА
                  </Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    СТАТУС:
                  </Text>
                  <Text
                    style={{
                      color: "var(--color-success)",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    В НАЛИЧИИ
                  </Text>
                </div>
              </div>

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
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 16px rgba(170, 191, 173, 0.3)",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
              >
                Подробнее
              </Button>
            </div>
          </Card>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg-subtle)",
            padding: "16px",
            textAlign: "center",
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
            НАДЕЖНОСТЬ • КАЧЕСТВО • БЕЗОПАСНОСТЬ
          </Text>
        </div>
      </div>
    </Page>
  );
};
