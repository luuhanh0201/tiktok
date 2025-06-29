import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@/components/GlobalStyles";
createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <BrowserRouter>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </BrowserRouter>,
    // </StrictMode>,
);
