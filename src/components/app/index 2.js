import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Game } from "../game";

export function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
