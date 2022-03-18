import { StyledEngineProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./components/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesProvider>
  </Provider>,
  document.getElementById("root")
);
