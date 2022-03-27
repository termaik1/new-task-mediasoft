import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { QueryParamProvider } from "use-query-params";

import { customTheme } from "./config/theme/theme.config";
import { store } from "app/entities/store";

import App from "./app";
import "app/assets/css/reset.css";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider<Theme> theme={customTheme}>
      <BrowserRouter>
        <QueryParamProvider>
          <App />
        </QueryParamProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
