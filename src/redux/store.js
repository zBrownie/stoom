import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./usuario";

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
});
