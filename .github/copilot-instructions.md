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
  <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}>
    {/* Military header with gradient */}
    <div
      style={{
        background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
        padding: "20px 16px",
        borderBottom: "2px solid #4a5568",
      }}
    >
      {/* Green accent line at top */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, #38a169 0%, #68d391 50%, #38a169 100%)",
        }}
      />
      {/* Page content */}
    </div>
  </div>
</Page>
```

### Military Design System

#### Color Variables (in `src/index.css`)

```css
:root {
  --military-primary: #38a169; /* Tactical green */
  --military-secondary: #68d391; /* Light green */
  --military-dark: #1a202c; /* Dark background */
  --military-gray: #2d3748; /* Card backgrounds */
  --military-light: #e2e8f0; /* Text color */
  --military-accent: #4a5568; /* Borders */
}
```

#### Typography Patterns

- **Headers**: `textTransform: "uppercase"`, `letterSpacing: "0.5px"`, `fontWeight: "700"`
- **Military terminology**: "ОПЕРАЦИИ ПО СНАБЖЕНИЮ" (operations), "ВОЕННЫЙ СТАНДАРТ" (military standard)
- **Status badges**: Uppercase with letter spacing, colored by status

#### Component Styling Conventions

- **Cards**: Dark backgrounds with military accent borders
- **Buttons**: Green military theme with uppercase text
- **Badges**: Positioned absolutely with military colors and shadows
- **Technical specs**: Grid layout with green labels and white values

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
  completed: "#38a169", // Military green
  shipped: "#3182ce", // Blue
  processing: "#d69e2e", // Yellow
  cancelled: "#e53e3e", // Red
});
```

#### Telegram UI Overrides

Global CSS overrides in `src/index.css` to apply military theme to Telegram UI components:

```css
.telegram-ui-button {
  background-color: var(--military-primary) !important;
  text-transform: uppercase !important;
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
