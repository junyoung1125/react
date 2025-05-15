import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CounterContextProvider } from "./contexts/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Context Provider로 감싸서 App 하위 모든 컴포넌트에 컨텍스트를 제공 */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>
);
