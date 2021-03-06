import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TamanhoPageOrganism from "../../components/organisms/TamanhoPage";
import MainTemplate from "../../components/templates/MainTemplate";
import { addTamanho, selectPedidoTamanho } from "../../redux/pedido";
import { selectPizzaData } from "../../redux/pizza";

// import { Container } from './styles';

function TamanhoPage() {
  const history = useHistory();
  const pizzaData = useSelector(selectPizzaData);
  const pedidoTamanho = useSelector(selectPedidoTamanho);
  const dispatch = useDispatch();

  const handleSelectSabor = (tamanho) => {
    dispatch(addTamanho(tamanho));
  };
  const handleAvancarPage = () => {
    history.push("/pagamento");
    document.getElementById("initScreen").scrollIntoView();
  };

  useEffect(() => {
    if (pizzaData?.tamanhos == null) {
      history.push("/");
    }
  }, [history, pizzaData]);
  return (
    <MainTemplate>
      <TamanhoPageOrganism
        data={pizzaData?.tamanhos}
        selectedTamanho={pedidoTamanho}
        callBack={handleSelectSabor}
        callBackPage={handleAvancarPage}
      />
    </MainTemplate>
  );
}

export default TamanhoPage;
