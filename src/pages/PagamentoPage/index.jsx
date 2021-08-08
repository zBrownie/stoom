import React, { useEffect } from "react";

import PagamentoPageOrganism from "./../../components/organisms/PagamentoPage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectPedidoMassa,
  selectPedidoTamanho,
  selectPedidoSabor,
  selectFormasPagamento,
  getFormasPag,
  addPagamento,
  selectedPedidoPagamento,
  reset,
  selectPoints,
} from "./../../redux/pedido/index";
import { addPoints } from "../../redux/usuario";
import MainTemplate from "../../components/templates/MainTemplate";
import { Modal } from "antd";
import { useState } from "react";
import { CardTextContent } from "../../components/templates/MainTemplate/components/PizzaDoDiaMolecule/styles";
import Text from "../../components/atoms/Text";
import { useHistory } from "react-router-dom";

function PagamentoPage() {
  const dispatch = useDispatch();
  const pedidoMassa = useSelector(selectPedidoMassa);
  const pedidoPoints = useSelector(selectPoints);
  const pedidoTamanho = useSelector(selectPedidoTamanho);
  const pedidoSabor = useSelector(selectPedidoSabor);
  const formasPagamento = useSelector(selectFormasPagamento);
  const pedidoPagamento = useSelector(selectedPedidoPagamento);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (formasPagamento == null) dispatch(getFormasPag());

    if (pedidoMassa === null || pedidoSabor === null || pedidoTamanho === null)
      history.push("/");
  }, []);

  const handleSelectPagamento = (pagamento) => {
    dispatch(addPagamento(pagamento));
  };
  const handleAddPoints = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (pedidoPoints) {
        dispatch(addPoints(pedidoPoints));
      }
      dispatch(reset());
      handleModal();
      history.push("/");
    }, 2000);
  };

  const handleCalcPreco = () => {
    let preco = 0;
    preco += pedidoMassa?.preco;
    preco += pedidoSabor?.preco;
    preco += pedidoTamanho?.preco;
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <MainTemplate>
      <PagamentoPageOrganism
        selected={pedidoPagamento}
        formasPagamento={formasPagamento}
        callBackPagamento={handleSelectPagamento}
        callBack={handleModal}
      />
      <Modal
        title="Confimar pedido"
        centered
        visible={showModal}
        confirmLoading={isLoading}
        onCancel={() => handleModal()}
        onOk={() => handleAddPoints()}
        cancelText="Voltar"
        okButtonProps={{ style: { background: "#00a752", border: "none" } }}
        okText="Confirmar"
      >        
        <Text color="#333" size="1.4rem" weight={600}>
          {pedidoSabor?.nome}
        </Text>
        <CardTextContent isTitle>Massa:</CardTextContent>
        <CardTextContent>{pedidoMassa?.nome}</CardTextContent>
        <CardTextContent isTitle>Ingredientes:</CardTextContent>
        <CardTextContent>
          {pedidoSabor?.ingredientes?.map((ing) => `${ing}, `)}
        </CardTextContent>
        <CardTextContent isTitle>Tamanho:</CardTextContent>
        <CardTextContent>
          {pedidoTamanho?.nome} - {pedidoTamanho?.info}
        </CardTextContent>
        <CardTextContent isTitle>Pagamento:</CardTextContent>
        <CardTextContent>{pedidoPagamento?.forma}</CardTextContent>
        <Text color="#00a752" weight={600} size="1.2rem">
          {handleCalcPreco()}
        </Text>
        <Text color="#de9f43" weight={400} size="1rem">
          StoomPoints - {pedidoPoints || "0"}
        </Text>
      </Modal>
    </MainTemplate>
  );
}

export default PagamentoPage;
