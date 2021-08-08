import { createSlice } from "@reduxjs/toolkit";
import { pizzaData } from "../../mock/pizzas";

const initialState = {
  pizzaDoDia: null,
  massas: null,
  sabores: null,
  tamanhos: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getPizzData: (state) => {
      state.pizzaDoDia = pizzaData.pizzaDoDia;
      state.massas = pizzaData.massas;
      state.sabores = pizzaData.sabores;
      state.tamanhos = pizzaData.tamanhos;
    },
  },
});

export const { getPizzData } = pizzaSlice.actions;

export const selectPizzaDoDia = (state) => state.pizza.pizzaDoDia;
export const selectMassas = (state) => state.pizza.massas;
export const selectSabores = (state) => state.pizza.sabores;
export const selectTamanhos = (state) => state.pizza.tamanhos;

export default pizzaSlice.reducer;
