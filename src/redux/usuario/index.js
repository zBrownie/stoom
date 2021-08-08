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
  },
});

export const { getUser } = usuarioSlice.actions;

export const selectUsuario = (state) => state.usuario.usuario;

export default usuarioSlice.reducer;
