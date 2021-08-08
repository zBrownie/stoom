import { createSlice } from "@reduxjs/toolkit";
import { pizzaData, pizzaDia } from "../../mock/pizzas";

const initialState = {
  pizzaData: null,
  pizzaDoDia: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getPizzData: (state) => {
      state.pizzaData = pizzaData;
    },
    getPizzDoDia: (state) => {
      state.pizzaDoDia = pizzaDia;
    },
  },
});

export const { getPizzData, getPizzDoDia } = pizzaSlice.actions;

export const selectPizzaData = (state) => state.pizza?.pizzaData;
export const selectPizzaDoDia = (state) => state.pizza?.pizzaDoDia;

export default pizzaSlice.reducer;
