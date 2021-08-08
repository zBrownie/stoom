import { createSlice } from "@reduxjs/toolkit";
import { usuarioData } from "../../mock/usuario";

const initialState = {
  usuario: null,
};

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    getUser: (state) => {
      state.usuario = usuarioData;
    },
    addPoints: (state, action) => {
      state.usuario.stoompoints = action.payload;
    },
  },
});

export const { getUser, addPoints } = usuarioSlice.actions;

export const selectUsuario = (state) => state.usuario.usuario;

export default usuarioSlice.reducer;
