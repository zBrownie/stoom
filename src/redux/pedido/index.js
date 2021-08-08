import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  massa: null,
  tamanho: null,
  sabor: null,
};

export const pedidoSlice = createSlice({
  name: "pedido",
  initialState,
  reducers: {
    addMassa: (state, action) => {
      state.massa = action.payload;
    },
    addTamanho: (state, action) => {
      state.tamanho = action.payload;
    },
    addSabor: (state, action) => {
      state.sabor = action.payload;
    },
  },
});

export const { addMassa, addTamanho, addSabor } = pedidoSlice.actions;

export const selectPedidoMassa = (state) => state.pedido?.massa;
export const selectPedidoTamanho = (state) => state.pedido?.tamanho;
export const selectPedidoSabor = (state) => state.pedido?.sabor;

export default pedidoSlice.reducer;
