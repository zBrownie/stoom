import React from "react";

import { AppBar, Container, Content, LogoAppBar, UserAppBar } from "./styles";

function MainTemplate({ children }) {
  return (
    <Container>
      <AppBar>
          <LogoAppBar>
              <h1>PizzaStoom</h1>
          </LogoAppBar>
          <UserAppBar>
              <p>Stoompoints 1 pontos</p>
          </UserAppBar>
      </AppBar>
      <Content>{children}</Content>
    </Container>
  );
}

export default MainTemplate;
