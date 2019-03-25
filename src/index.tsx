import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { StoreContext } from "redux-react-hook";
import App from "./components/App";
import rootReducer from "./store";

const store = createStore(rootReducer);

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
