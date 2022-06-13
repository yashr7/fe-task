import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnchancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
