import { useMemo } from "react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import {
  retrieveLaunchParams,
  useSignal,
  isMiniAppDark,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { routes } from "@/navigation/routes.tsx";

function renderRoutes(list = routes): React.ReactNode {
  return list.map(({ path, Component, children }) => (
    <Route key={path} path={path} element={<Component />}>
      {children && renderRoutes(children)}
    </Route>
  ));
}
export function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"}
    >
      <HashRouter>
        <Routes>
          {renderRoutes()}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
