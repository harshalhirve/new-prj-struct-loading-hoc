import "@babel/polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <ErrorBoundary>
        <Route component={App} />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
