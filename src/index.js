import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ThemeProvider, Container } from "react-bootstrap";
import  Route  from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
  <React.StrictMode>
    <ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}>
          <Route />
    </ThemeProvider>
  </React.StrictMode>
);
