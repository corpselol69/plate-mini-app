import type { ComponentType } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { ProductPage } from "@/pages/ProductPage/ProductPage";
import { CartPage } from "@/pages/CartPage/CartPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";

export interface AppRoute {
  path: string;
  Component: ComponentType;
  title?: string;

  children?: AppRoute[];
}

export const routes: AppRoute[] = [
  {
    path: "/",
    Component: IndexPage,
    title: "Главная",
  },
  {
    path: "/product", // выбор 1 или 2 пластин
    Component: ProductPage,
    title: "Пластина",
  },
  {
    path: "/cart",
    Component: CartPage,
    title: "Корзина",

    children: [
      // пример вложенного шага оформления, если он появится:
      // { path: 'checkout', Component: CheckoutPage, title: 'Оформление' },
    ],
  },
  {
    path: "/profile",
    Component: ProfilePage,
    title: "Профиль",
  },
];
