import React from "react";
import Text from "../../../atoms/Text";

import {
  CardContent,
  CardPizzas,
  HeaderCheckBox,
  CheckBoxInsidePizza,
  CheckBoxPizza,
} from "./styles";
const iconPizzaContet =
  "https://st.depositphotos.com/1003814/5052/i/600/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg";
function CardPizzaComponent({ data, selected, callBack, type }) {
  const handlerInfo = (type) => {
    switch (type) {
      case "SABOR":
        return (
          <Text color="#3e3b4f" size="1rem" weight={400}>
            {data?.ingredientes?.map((ing) => `${ing}, `)}
          </Text>
        );

      default:
        return (
          <Text color="#3e3b4f" size="0.8rem" weight={400}>
            {data?.info}
          </Text>
        );
    }
  };
  return (
    <CardPizzas url={iconPizzaContet} onClick={() => callBack(data)}>
      <CardContent>
        <HeaderCheckBox>
          <Text color="#3e3b4f" size="1.6rem" weight={600}>
            {data?.nome}
          </Text>
          <CheckBoxPizza checked={selected?.id === data?.id}>
            <CheckBoxInsidePizza checked={selected?.id === data?.id} />
          </CheckBoxPizza>
        </HeaderCheckBox>
        {handlerInfo(type)}
        {/* <Text color="#3e3b4f" size="0.8rem" weight={400}>
          {data?.info}
        </Text> */}
        <Text color="#00a74d" size="1rem" weight={600}>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(data?.preco)}
        </Text>
      </CardContent>
    </CardPizzas>
  );
}

export default CardPizzaComponent;
