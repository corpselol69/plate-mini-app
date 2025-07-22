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

/**
 * Нижняя навигационная панель приложения.
 * Использует TelegramUI (Tabbar / FixedLayout) и Tabler‑based иконки из библиотеки.
 */
export const NavBar: FC<NavBarProps> = ({
  active,
  cartCount = 0,
  onNavigate,
}) => (
  <FixedLayout vertical="bottom">
    <Tabbar>
      <Tabbar.Item
        text="Главная"
        selected={active === "home"}
        onClick={() => onNavigate("home")}
      >
        <Icon src={storeIcon} isActive={active === "home"} />
      </Tabbar.Item>

      <Tabbar.Item
        text="Корзина"
        selected={active === "cart"}
        onClick={() => onNavigate("cart")}
      >
        {cartCount > 0 && (
          <Badge
            type="number"
            style={{ position: "absolute", top: 2, right: 2 }}
          >
            {cartCount > 99 ? "99+" : cartCount}
          </Badge>
        )}
        <Icon src={shoppingCartIcon} isActive={active === "cart"} />
      </Tabbar.Item>

      <Tabbar.Item
        text="Профиль"
        selected={active === "profile"}
        onClick={() => onNavigate("profile")}
      >
        <Avatar
          size={24}
          src="https://avatars.dicebear.com/api/initials/AB.svg"
        />
      </Tabbar.Item>
    </Tabbar>
  </FixedLayout>
);
