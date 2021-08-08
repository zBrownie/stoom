import React from "react";

import PagamentoPageOrganism from "./../../components/organisms/PagamentoPage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectPedidoMassa,
  selectPedidoTamanho,
  selectPedidoSabor,
} from "./../../redux/pedido/index";
import { addPoints, selectUsuario } from "../../redux/usuario";

function PagamentoPage() {
  const dispatch = useDispatch();
  const pedidoMassa = useSelector(selectPedidoMassa);
  const pedidoTamanho = useSelector(selectPedidoTamanho);
  const pedidoSabor = useSelector(selectPedidoSabor);
  const usuario = useSelector(selectUsuario);

  const handleAddPoints = () => {
    dispatch(addPoints());
  };

  return <PagamentoPageOrganism />;
}

export default PagamentoPage;
