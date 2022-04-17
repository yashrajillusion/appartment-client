import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./Redux/store";
import { Provider as ReduxProvider } from "react-redux";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
