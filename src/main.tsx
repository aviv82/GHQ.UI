import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ContextProvider } from "./contexts/providers/ContextProvider.tsx";
import { ThemeWrapper } from "./contexts/wrappers/ThemeWrapper.tsx";

import { RouterProvider } from "react-router";
import { routeBrowser } from "./router/routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <ThemeWrapper>
        <RouterProvider router={routeBrowser} />
      </ThemeWrapper>
    </ContextProvider>
  </StrictMode>
);
