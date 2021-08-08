import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsuario, getUser } from "./../../../redux/usuario/index";
import PizzaDoDiaMolecule from "./../../templates/MainTemplate/components/PizzaDoDiaMolecule";
import {
  getPizzData,
  getPizzDoDia,
  selectPizzaDoDia,
} from "./../../../redux/pizza/index";
import {
  AppBar,
  Container,
  Content,
  IconPizza,
  LogoAppBar,
  SubTitleAppBar,
  TextAppBarContainer,
  TitleAppBar,
  UserAppBar,
  SubTitleUserAppBar,
  TitleUserAppBar,
  UserTextAppBar,
  IconStoomPoins,
  PointsUserAppBar,
  PointsRow,
  SpaceWhite,
} from "./styles";
const imgPizza = "https://img.icons8.com/ios/452/pizza.png";
const iconPoints = "https://image.flaticon.com/icons/png/512/66/66550.png";
function MainTemplate({ children }) {
  const usuario = useSelector(selectUsuario);
  const pizza = useSelector(selectPizzaDoDia);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usuario == null) dispatch(getUser());
  }, [usuario]);

  useEffect(() => {
    if (pizza == null) dispatch(getPizzDoDia());
  }, [pizza]);

  return (
    <Container>
      <AppBar>
        <LogoAppBar>
          <IconPizza src={imgPizza} alt="icon-pizza" />
          <TextAppBarContainer>
            <TitleAppBar>PizzaStoom</TitleAppBar>
            <SubTitleAppBar>é pizza, sim</SubTitleAppBar>
          </TextAppBarContainer>
        </LogoAppBar>
        <UserAppBar>
          <IconStoomPoins src={iconPoints} alt="icon-stoompoints" />
          <UserTextAppBar>
            <TitleUserAppBar>StoomPoints</TitleUserAppBar>
            <PointsRow>
              <PointsUserAppBar>{usuario?.stoomPoints}</PointsUserAppBar>
              <SubTitleUserAppBar>pontos.</SubTitleUserAppBar>
            </PointsRow>
          </UserTextAppBar>
        </UserAppBar>
        <PizzaDoDiaMolecule data={pizza} />
      </AppBar>
      <SpaceWhite />
      <Content>{children}</Content>
    </Container>
  );
}

export default MainTemplate;
