import React from "react";
import { MdPlayArrow } from "react-icons/md";
import Buttons from "../../atoms/Buttons";
import Text from "../../atoms/Text";
import CardPizzaComponent from "../../molecules/HomePage/CardPizza";

import {
  Container,
  CardHomePageContent,
  CountStepper,
  FooterContent,
  HeaderContent,
} from "./styles";

function TamanhoPageOrganism({
  data,
  selectedTamanho,
  callBack,
  callBackPage,
}) {
  return (
    <Container>
      <CardHomePageContent>
        <Text color="#3d3a51" size="1.6rem" weight={600}>
          ou monte sua pizza.
        </Text>
        <HeaderContent>
          <Text color="#0e6fb9" size="1rem" weight={600}>
            Selecione sua massa.
          </Text>
          <CountStepper>
            <Text color="#39363e" size="1rem" weight={600}>
              3/3
            </Text>
          </CountStepper>
        </HeaderContent>
        {data?.tamanhos?.map((tamanho) => {
          return (
            <CardPizzaComponent
              data={tamanho}
              selected={selectedTamanho}
              key={tamanho.id}
              callBack={callBack}              
            />
          );
        })}
        <FooterContent>
          <Buttons size="15rem" color="#00a84e" onClick={callBackPage}>
            finalizar
          </Buttons>
        </FooterContent>
      </CardHomePageContent>
    </Container>
  );
}

export default TamanhoPageOrganism;
