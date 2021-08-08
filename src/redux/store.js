import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./usuario";
import pizzaReducer from "./pizza";
import pedidoReducer from "./pedido";

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
    pizza: pizzaReducer,
    pedido: pedidoReducer,
  },
});
