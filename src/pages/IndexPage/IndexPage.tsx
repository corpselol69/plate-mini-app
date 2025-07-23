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

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Image
              src={logo}
              style={{
                boxShadow: "0 0 20px rgba(56, 161, 105, 0.3)",
                width: "60px",
                minWidth: "60px",
                height: "60px",
                backgroundColor: "transparent",
                border: "2px solid #38a169",
                borderRadius: "50%",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Title
                weight="1"
                style={{
                  color: "#e2e8f0",
                  fontSize: "20px",
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  letterSpacing: "0.5px",
                }}
              >
                АРМЕЙСКИЙ МАГАЗИН
              </Title>
              <Text
                style={{
                  color: "#a0aec0",
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
              backgroundColor: "#2d3748",
              border: "1px solid #4a5568",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
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
                  backgroundColor: "#38a169",
                  color: "white",
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
                  color: "#e2e8f0",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                БРОНЕПЛАСТИНА
              </Title>

              <Text
                style={{
                  color: "#a0aec0",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}
              >
                Сертифицированная защита класса IIIA. Индивидуальная или парная
                комплектация по вашему выбору.
              </Text>

              <div
                style={{
                  backgroundColor: "#1a202c",
                  padding: "16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
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
                    КЕРАМИКА
                  </Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text
                    style={{
                      color: "#68d391",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    СТАТУС:
                  </Text>
                  <Text
                    style={{
                      color: "#68d391",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    В НАЛИЧИИ
                  </Text>
                </div>
              </div>

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
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 16px rgba(56, 161, 105, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                ПЕРЕЙТИ К ВЫБОРУ
              </Button>
            </div>
          </Card>
        </div>

        <div
          style={{
            backgroundColor: "#1a202c",
            padding: "16px",
            borderTop: "1px solid #4a5568",
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
            НАДЕЖНОСТЬ • КАЧЕСТВО • БЕЗОПАСНОСТЬ
          </Text>
        </div>
      </div>
    </Page>
  );
};
