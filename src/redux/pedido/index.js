import { createSlice } from "@reduxjs/toolkit";
import { formasPagamento } from "../../mock/pedido";

const initialState = {
  massa: null,
  tamanho: null,
  sabor: null,
  pagamento: null,
  stoomPoints: null,
  formasPagamento: null,
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
    addPoints: (state, action) => {
      state.stoomPoints = action.payload;
    },
    getFormasPag: (state) => {
      state.formasPagamento = formasPagamento;
    },
    addPagamento: (state, action) => {
      state.pagamento = action.payload;
    },
    reset: (state) => Object.assign(state, initialState),
  },
});

export const {
  addMassa,
  addTamanho,
  addSabor,
  addPoints,
  addPagamento,
  getFormasPag,
  handlePagar,
  reset,
} = pedidoSlice.actions;

export const selectPedidoMassa = (state) => state.pedido?.massa;
export const selectPedidoTamanho = (state) => state.pedido?.tamanho;
export const selectPedidoSabor = (state) => state.pedido?.sabor;
export const selectedPedidoPagamento = (state) => state.pedido?.pagamento;
export const selectFormasPagamento = (state) => state.pedido?.formasPagamento;
export const selectPoints = (state) => state.pedido?.stoomPoints;

export default pedidoSlice.reducer;
