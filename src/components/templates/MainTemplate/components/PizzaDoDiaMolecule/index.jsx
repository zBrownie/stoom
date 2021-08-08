import React from "react";
import Buttons from "./../../../../atoms/Buttons/index";
import { FiCheck } from "react-icons/fi";
import {
  Container,
  CardPizzas,
  CardContent,
  CardTextContent,
  CardTitleContent,
  FooterCard,
  FooterText,
  Titlecard,
} from "./styles";
const iconPizzaContet =
  "https://st.depositphotos.com/1003814/5052/i/600/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg";
function PizzaDoDiaMolecule() {
  return (
    <Container>
      <Titlecard>Pizza do dia</Titlecard>
      <CardPizzas url={iconPizzaContet}>
        <CardContent>
          <CardTitleContent>Pizza Napolitana</CardTitleContent>
          <CardTextContent isTitle>Massa:</CardTextContent>
          <CardTextContent>Napolitana</CardTextContent>
          <CardTextContent isTitle>Massa:</CardTextContent>
          <CardTextContent>
            mussarela,peito de peru,palmito,parmesão,orégano
          </CardTextContent>
          <FooterCard>
            <FooterText>R$ 37,00</FooterText>
            <Buttons
              color="#00a94d"
              onClick={() => alert("PIZZA DO DIA")}
              size="7rem"
            >
              quero! <FiCheck size={28} color="white" />
            </Buttons>
          </FooterCard>
        </CardContent>
      </CardPizzas>
    </Container>
  );
}

export default PizzaDoDiaMolecule;
