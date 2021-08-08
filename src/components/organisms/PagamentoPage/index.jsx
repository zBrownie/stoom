import React from "react";

import { Container, FooterContent, ItemListPagamento } from "./styles";
import Text from "./../../atoms/Text/index";
import Buttons from "../../atoms/Buttons";

function PagamentoPageOrganism({
  selected,
  formasPagamento,
  callBackPagamento,
  callBack,
}) {
  return (
    <Container>
      <Text color="#0e6fb9" size="1rem" weight={600}>
        Selecione a forma de pagamento:
      </Text>
      {formasPagamento?.map((forma) => (
        <ItemListPagamento
          selected={selected === forma}
          key={forma?.id}
          onClick={() => callBackPagamento(forma)}
        >
          {forma?.forma}
        </ItemListPagamento>
      ))}
      <FooterContent>
        <Buttons size="15rem" color="#00a84e" onClick={callBack}>
          finalizar
        </Buttons>
      </FooterContent>
    </Container>
  );
}

export default PagamentoPageOrganism;
