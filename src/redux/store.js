import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";

import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import usuarioReducer from "./usuario";
import pizzaReducer from "./pizza";
import pedidoReducer from "./pedido";

const persistConfig = {
  key: "stoom-store",
  storage,
};

const reducers = combineReducers({
  usuario: usuarioReducer,
  pizza: pizzaReducer,
  pedido: pedidoReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
