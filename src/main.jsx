import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApolloProviderWrapper from "./ApolloProviderWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </StrictMode>
);
