import React from "react";
import Buttons from "./../../../../atoms/Buttons/index";
import { FiCheck } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";

import {
  Container,
  CardPizzas,
  CardContent,
  CardTextContent,
  CardTitleContent,
  FooterCard,
  FooterText,
  Titlecard,
  IconPointsValue,
  TextPoints,
} from "./styles";
const iconPizzaContet =
  "https://st.depositphotos.com/1003814/5052/i/600/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg";
function PizzaDoDiaMolecule({ data, callBack }) {
  const handleCalcPreco = () => {
    let preco = 0;
    preco += data?.massa?.preco;
    preco += data?.sabor?.preco;
    preco += data?.tamanho?.preco;
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };
  return (
    <Container>
      <Titlecard>Pizza do dia</Titlecard>
      <IconPointsValue>
        <BsFillStarFill className="iconStar" />
        <TextPoints>{data?.points} points</TextPoints>
      </IconPointsValue>
      <CardPizzas url={iconPizzaContet}>
        <CardContent>
          <CardTitleContent>{data?.nome}</CardTitleContent>
          <CardTextContent isTitle>Massa:</CardTextContent>
          <CardTextContent>{data?.massa?.nome}</CardTextContent>
          <CardTextContent isTitle>Ingredientes:</CardTextContent>
          <CardTextContent>
            {data?.sabor?.ingredientes.map((ing) => `${ing}, `)}
          </CardTextContent>
          <FooterCard>
            <FooterText>{handleCalcPreco()}</FooterText>
            <Buttons color="#00a94d" onClick={callBack} size="7rem">
              quero! <FiCheck size={28} color="white" />
            </Buttons>
          </FooterCard>
        </CardContent>
      </CardPizzas>
    </Container>
  );
}

export default PizzaDoDiaMolecule;
