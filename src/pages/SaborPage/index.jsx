import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SaborPageOrganism from "../../components/organisms/SaborPage";
import MainTemplate from "../../components/templates/MainTemplate";
import { addSabor, selectPedidoSabor } from "../../redux/pedido";
import { selectPizzaData } from "../../redux/pizza";

// import { Container } from './styles';

function SaborPage() {
  const history = useHistory();
  const pizzaData = useSelector(selectPizzaData);
  const pedidoSabor = useSelector(selectPedidoSabor);
  const dispatch = useDispatch();

  const handleSelectSabor = (sabor) => {
    dispatch(addSabor(sabor));
  };
  const handleAvancarPage = () => {
    history.push("/montar/2");
    document.getElementById("initScreen").scrollIntoView();
  };

  useEffect(() => {
    if (pizzaData?.sabores == null) {
      history.push("/");
    }
  }, [history, pizzaData]);
  return (
    <MainTemplate>
      <SaborPageOrganism
        data={pizzaData?.sabores}
        selectedSabor={pedidoSabor}
        callBack={handleSelectSabor}
        callBackPage={handleAvancarPage}
      />
    </MainTemplate>
  );
}

export default SaborPage;
