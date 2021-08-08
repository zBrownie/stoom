import React from "react";
import Text from "../../atoms/Text";
import CardPizzaComponent from "../../molecules/HomePage/CardPizza";
import Buttons from "./../../atoms/Buttons/index";
import {
  Container,
  CardHomePageContent,
  HeaderContent,
  CountStepper,
  FooterContent,
} from "./styles";
import { MdPlayArrow } from "react-icons/md";

function HomePageOrganism({ data, callBack, selectedMassa, callBackPage }) {
  return (
    <Container>
      <CardHomePageContent>
        <Text color="#3d3a51" size="1.6rem" weight={600}>
          ou monte sua pizza.
        </Text>
        <HeaderContent>
          <Text color="#0e6fb9" size="1rem" weight={600}>
            Selecione sua massa:
          </Text>
          <CountStepper>
            <Text color="#39363e" size="1rem" weight={600}>
              1/3
            </Text>
          </CountStepper>
        </HeaderContent>
        {data?.massas?.map((massa) => {
          return (
            <CardPizzaComponent
              data={massa}
              selected={selectedMassa}
              key={massa.id}
              callBack={callBack}
            />
          );
        })}
        <FooterContent>
          <Buttons size="15rem" color="#00a84e" onClick={callBackPage}>
            montar meu pedido <MdPlayArrow size={30} color="white" />
          </Buttons>
        </FooterContent>
      </CardHomePageContent>
    </Container>
  );
}

export default HomePageOrganism;
