import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./usuario";
import pizzaReducer from "./pizza";

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
    pizza: pizzaReducer,
  },
});
