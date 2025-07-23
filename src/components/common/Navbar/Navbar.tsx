import type { FC } from "react";
import { FixedLayout, Tabbar, Badge, Avatar } from "@telegram-apps/telegram-ui";
import storeIcon from "@/static/icons/store.svg";
import shoppingCartIcon from "@/static/icons/shopping_cart.svg";
import Icon from "../Icon/Icon";

interface NavBarProps {
  /** Какая вкладка активна */
  active: "home" | "cart" | "profile";
  /** Сколько товаров в корзине – для бейджа */
  cartCount?: number;
  /** Колбэк при переключении вкладки */
  onNavigate: (section: "home" | "cart" | "profile") => void;
}

export const NavBar: FC<NavBarProps> = ({
  active,
  cartCount = 0,
  onNavigate,
}) => (
  <FixedLayout vertical="bottom">
    <Tabbar style={{ gap: "8px", height: "80px" }}>
      <Tabbar.Item
        text="БАЗА"
        selected={active === "home"}
        onClick={() => onNavigate("home")}
        style={{
          flex: 1,
          color: active === "home" ? "var(--military-secondary)" : undefined,
        }}
      >
        <Icon src={storeIcon} isActive={active === "home"} />
      </Tabbar.Item>

      <Tabbar.Item
        text="КОРЗИНА"
        selected={active === "cart"}
        onClick={() => onNavigate("cart")}
        style={{
          flex: 1,
          color: active === "cart" ? "var(--military-secondary)" : undefined,
        }}
      >
        <div style={{ position: "relative", margin: "0 4px" }}>
          {cartCount > 0 && (
            <Badge
              type="number"
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                backgroundColor: "#e53e3e",
                color: "white",
                fontSize: "10px",
                fontWeight: "700",
                minWidth: "18px",
                height: "18px",
                borderRadius: "9px",
                zIndex: 10,
              }}
            >
              {cartCount > 99 ? "99+" : cartCount}
            </Badge>
          )}

          <Icon src={shoppingCartIcon} isActive={active === "cart"} />
        </div>
      </Tabbar.Item>

      <Tabbar.Item
        text="ПРОФИЛЬ"
        selected={active === "profile"}
        onClick={() => onNavigate("profile")}
        style={{
          flex: 1,
          color: active === "profile" ? "var(--military-secondary)" : undefined,
        }}
      >
        <Avatar
          size={24}
          src="https://avatars.dicebear.com/api/initials/AB.svg"
        />
      </Tabbar.Item>
    </Tabbar>
  </FixedLayout>
);
