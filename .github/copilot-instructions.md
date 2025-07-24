# Copilot Instructions for Armor Store Telegram Mini App

## Project Overview

This is a Telegram Mini App built with React/TypeScript for selling military armor plates. The app features a distinctive **military theme** with dark colors, tactical terminology, and uppercase styling throughout the interface.

## Architecture & Key Components

### Navigation & Routing

- **Router**: Uses `react-router-dom` with `HashRouter` for Telegram compatibility
- **Route definitions**: Centralized in `src/navigation/routes.tsx` with type-safe `AppRoute` interface
- **Page wrapper**: All pages use `<Page>` component that handles Telegram back button and bottom navigation
- **Bottom nav**: Military-themed tabs: "БАЗА" (home), "КОРЗИНА" (cart), "ПРОФИЛЬ" (profile)

### Page Structure Pattern

```tsx
// All pages follow this pattern:
<Page back={true | false}>
  <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-base)" }}>
    {/* Military header with gradient */}
    <div
      style={{
        background:
          "linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-base) 100%)",
        padding: "20px 16px",
        borderBottom: "2px solid var(--brand)",
      }}
    >
      {/* Green accent line at top */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, var(--brand) 0%, var(--color-accent) 50%, var(--brand) 100%)",
        }}
      />
      {/* Page content */}
    </div>
  </div>
</Page>
```

### Design System & Color Tokens

#### Functional Color Variables (in `src/index.css`)

```css
:root {
  /* ОСНОВНЫЕ ПЛОСКОСТИ */
  --bg-base: #0d2117; /* Основной фон приложения */
  --bg-subtle: #20382d; /* Фон карточек, модальных окон */
  --surface-raised: #595046; /* Поднятые элементы (аватары, кнопки) */

  /* ТЕКСТ И ТИПОГРАФИКА */
  --text-primary: #f2e4d8; /* Основной текст (заголовки, важная информация) */
  --text-secondary: #aabfad; /* Вторичный текст (описания, лейблы) */
  --text-gray: #8e968f; /* Неактивные элементы, placeholder */
  --text-accent: #ffffff; /* Акцентный текст (имена, цены) */
  --text-disabled: rgba(170, 191, 173, 0.4); /* Отключенный текст */

  /* ИКОНКИ */
  --icon-default: var(--text-secondary); /* Иконки по умолчанию */
  --icon-disabled: #595046; /* Отключенные иконки */

  /* БРЕНД И АКТИВНЫЕ ЭЛЕМЕНТЫ */
  --brand: #aabfad; /* Основной бренд (активные табы, акценты) */
  --focus-ring: rgba(170, 191, 173, 0.5); /* Кольцо фокуса */

  /* КНОПКИ */
  --btn-primary-bg: var(--brand); /* Фон основных кнопок */
  --btn-primary-text: #022601; /* Текст основных кнопок */
  --btn-primary-bg-hover: #b2c5b5; /* Ховер основных кнопок */
  --btn-primary-bg-active: #99ab9b; /* Нажатие основных кнопок */

  --btn-secondary-border: var(--brand); /* Границы вторичных кнопок */
  --btn-secondary-text: var(--brand); /* Текст вторичных кнопок */
  --btn-secondary-bg-hover: rgba(170, 191, 173, 0.1); /* Ховер вторичных */

  /* СТАТУСЫ И СОСТОЯНИЯ */
  --color-success: #5c8b58; /* Успешные операции (completed заказы) */
  --color-accent: #e18932; /* Акценты (shipped заказы, badges) */
  --color-gray: #8e968f; /* Нейтральные состояния (processing) */

  /* УТИЛИТАРНЫЕ ЦВЕТА */
  --white: #ffffff; /* Белый для контраста */
  --black: #000000; /* Черный для контраста */
  --blue: #3182ce; /* Синий для ссылок, трекинга */
}

/* СВЕТЛАЯ ТЕМА */
[data-theme="light"] {
  --bg-base: #f8f6f3; /* Светлый фон */
  --bg-subtle: #bcdcce6f; /* Светлые карточки */
  --surface-raised: #ffffff; /* Белые поднятые элементы */
  --divider: rgba(13, 33, 23, 0.08); /* Разделители */

  --text-primary: #0d2117cd; /* Темный основной текст */
  --text-secondary: #595046; /* Темный вторичный текст */
  --text-accent: #081a11; /* Темный акцентный текст */
  --text-disabled: rgba(89, 80, 70, 0.4);

  --brand: #2d5241; /* Темнее для светлой темы */
  --focus-ring: rgba(13, 33, 23, 0.45);

  --btn-primary-text: #ffffff;
  --btn-primary-bg-hover: #13311f;
  --btn-primary-bg-active: #081a11b0;
  --btn-secondary-bg-hover: rgba(13, 33, 23, 0.07);
}
```

#### Typography Patterns

- **Headers**: `textTransform: "uppercase"`, `letterSpacing: "0.5px"`, `fontWeight: "700"`
- **Military terminology**: "ОПЕРАЦИИ ПО СНАБЖЕНИЮ" (operations), "ВОЕННЫЙ СТАНДАРТ" (military standard)
- **Status badges**: Uppercase with letter spacing, colored by status

#### Theme System

```tsx
// Theme toggle implementation
const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { theme, toggleTheme };
};
```

#### Component Styling Conventions

**Backgrounds & Surfaces:**

- **Page backgrounds**: `var(--bg-base)` - основной фон приложения
- **Card backgrounds**: `var(--bg-subtle)` - карточки, модальные окна
- **Raised elements**: `var(--surface-raised)` - аватары, поднятые кнопки

**Typography:**

- **Main headers**: `var(--text-primary)` + `textTransform: "uppercase"` + `letterSpacing: "0.5px"`
- **Secondary text**: `var(--text-secondary)` - описания, лейблы полей
- **Accent text**: `var(--text-accent)` - имена пользователей, цены
- **Disabled text**: `var(--text-disabled)` - неактивные элементы

**Interactive Elements:**

- **Primary buttons**: `backgroundColor: var(--btn-primary-bg)`, `color: var(--btn-primary-text)`
- **Secondary buttons**: `border: 1px solid var(--btn-secondary-border)`, `color: var(--btn-secondary-text)`
- **Active tabs**: `backgroundColor: var(--brand)`, `color: var(--btn-primary-text)`
- **Inactive tabs**: `backgroundColor: transparent`, `color: var(--text-gray)`

**Status Indicators:**

- **Success states**: `var(--color-success)` (completed заказы, успешные операции)
- **Accent/Warning**: `var(--color-accent)` (shipped заказы, новые badge)
- **Neutral/Processing**: `var(--color-gray)` (processing заказы)
- **Links/Tracking**: `var(--blue)` (трек-номера, внешние ссылки)

**Military Theme Elements:**

- **Headers**: `textTransform: "uppercase"`, `letterSpacing: "0.5px"`, `fontWeight: "700"`
- **Military terminology**: "ОПЕРАЦИИ ПО СНАБЖЕНИЮ", "ВОЕННЫЙ СТАНДАРТ"
- **Status badges**: Uppercase with letter spacing, colored by status
- **Always use CSS variables** for colors to support theme switching

### Data Structure Patterns

#### Mock Data Format

```tsx
// Orders with delivery tracking
interface Order {
  id: string; // Format: "ORD-2024-001"
  status: "completed" | "shipped" | "processing" | "cancelled";
  deliveryType: "pickup" | "cdek";
  trackingNumber?: string; // For CDEK deliveries
  items: Array<{ name: string; quantity: number; price: number }>;
}

// Product variants pattern
const VARIANTS = [
  { id: "single", label: "Одна пластина", price: 5000 },
  { id: "double", label: "Комплект (2 шт.)", price: 9500 },
] as const;
```

#### Delivery System

- **Pickup**: Moscow address "ул. Пушкина, 4"
- **CDEK**: Multiple pickup points with tracking numbers
- **Address selection**: Dynamic UI based on delivery type

### Development Workflows

#### Essential Commands

```bash
npm run dev:https    # HTTPS development server (required for Telegram)
npm run build        # TypeScript check + Vite build
npm run lint:fix     # Auto-fix ESLint issues
```

#### Telegram Integration

- **Environment**: Uses `src/mockEnv.ts` for local development
- **SDK**: `@telegram-apps/sdk-react` for platform integration
- **UI**: `@telegram-apps/telegram-ui` components with military overrides

#### File Organization

```
src/
├── components/
│   ├── Page.tsx          # Layout wrapper with nav
│   └── common/
│       ├── Navbar/       # Bottom navigation
│       └── Icon/         # SVG icon wrapper
├── pages/
│   ├── IndexPage/        # Product catalog
│   ├── ProductPage/      # Single product details
│   ├── CartPage/         # Cart with delivery options
│   └── ProfilePage/      # User profile & order history
└── static/
    ├── icons/            # SVG icons
    └── placeholders/     # Product images
```

### Key Implementation Patterns

#### Status Color Mapping

```tsx
const getStatusColor = (status: Order["status"]) => ({
  completed: "var(--color-success)", // Успешные заказы
  shipped: "var(--color-accent)", // Заказы в пути
  processing: "var(--color-gray)", // Заказы в обработке
  cancelled: "var(--military-error)", // Отмененные заказы
});
```

#### Telegram UI Overrides

Global CSS overrides in `src/index.css` to apply military theme to Telegram UI components:

```css
.telegram-ui-button {
  background-color: var(--btn-primary-bg) !important;
  color: var(--btn-primary-text) !important;
  text-transform: uppercase !important;
}

.telegram-ui-card {
  background-color: var(--bg-subtle) !important;
  border: 1px solid var(--brand) !important;
}

.telegram-ui-text {
  color: var(--text-secondary) !important;
}
```

#### Mobile-Optimized Patterns

- Fixed bottom navigation with 80px height
- Content padding: `paddingBottom: "80px"` to avoid nav overlap
- Responsive text sizing for mobile screens
- Touch-friendly button sizes and spacing

### State Management (Planned Implementation)

The app is currently using local component state but plans to implement centralized state management:

#### Cart State Management

```tsx
// Planned Redux slice structure
interface CartState {
  items: Array<{
    id: string;
    variant: "single" | "double";
    quantity: number;
    price: number;
  }>;
  deliveryType: "pickup" | "cdek";
  selectedAddress?: string;
  total: number;
}

// Current placeholder in Page.tsx:
cartCount={0 /* TODO: взять из Redux */}
```

#### User Profile Context

```tsx
// Planned Context for user data
interface UserContextType {
  profile: UserProfile;
  orders: Order[];
  updateProfile: (data: Partial<UserProfile>) => void;
  addOrder: (order: Order) => void;
}
```

#### Implementation Strategy

- **Redux Toolkit** for cart and order management (transactional data)
- **React Context** for user profile and app settings (slower-changing data)
- **Local storage persistence** for cart state across sessions
- **Optimistic updates** for better UX in Telegram environment

## Development Notes

- All text should maintain military theme (uppercase headers, tactical terminology)
- Use Russian language for UI text
- Prices in rubles with `.toLocaleString()` formatting
- Status badges should use color coding and uppercase text
- Mobile-first responsive design throughout
