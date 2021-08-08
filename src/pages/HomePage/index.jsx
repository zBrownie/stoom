import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HomePageOrganism from "../../components/organisms/HomePage";
import MainTemplate from "../../components/templates/MainTemplate";
import { addMassa, selectPedidoMassa } from "../../redux/pedido";
import { getPizzData, selectPizzaData } from "../../redux/pizza";

// import { Container } from './styles';

function HomePage() {
  const history = useHistory();
  const pizzaData = useSelector(selectPizzaData);
  const pedidoMassa = useSelector(selectPedidoMassa);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pizzaData == null) dispatch(getPizzData());
  }, [pizzaData]);

  const handleSelectMassa = (massa) => {
    dispatch(addMassa(massa));
  };
  const handleAvancarPage = () => {
    history.push("/montar/1");
    document.getElementById("initScreen").scrollIntoView();
  };
  return (
    <MainTemplate>
      <HomePageOrganism
        data={pizzaData}
        selectedMassa={pedidoMassa}
        callBack={handleSelectMassa}
        callBackPage={handleAvancarPage}
      />
    </MainTemplate>
  );
}

export default HomePage;
