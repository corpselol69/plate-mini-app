import { type PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  hideBackButton,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";

import { NavBar } from "@/components/common/Navbar/Navbar";

export function Page({
  children,
  back = true,
}: PropsWithChildren<{ back?: boolean }>) {
  const navigate = useNavigate();
  const location = useLocation();

  // Настраиваем кнопку «Назад» Telegram-клиента
  useEffect(() => {
    if (back) {
      showBackButton();
      return onBackButtonClick(() => navigate(-1));
    }
    hideBackButton();
  }, [back, navigate]);

  // Определяем активную вкладку по текущему пути
  const active: "home" | "cart" | "profile" = location.pathname.startsWith(
    "/cart"
  )
    ? "cart"
    : location.pathname.startsWith("/profile")
    ? "profile"
    : "home";

  return (
    <>
      {children}
      <NavBar
        active={active}
        cartCount={0 /* TODO: взять из Redux */}
        onNavigate={(section) => {
          if (section === "home") navigate("/");
          if (section === "cart") navigate("/cart");
          if (section === "profile") navigate("/profile");
        }}
      />
    </>
  );
}
