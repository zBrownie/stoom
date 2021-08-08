import styled from "styled-components";

export const CardPizzas = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  width: 100%;
  height: 18rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  margin: 0.3rem 0;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

export const CardContent = styled.div`
  background: ${(props) => props.theme.whiteDark};
  width: 80%;
  height: 100%;
  padding: 0.5rem 0.3rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const HeaderCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  overflow-y: auto;
`;
export const CheckBoxPizza = styled.div`
  background: ${(props) => (props.checked ? "#00a75244" : "white")};
  border: 0.13rem solid ${(props) => (props.checked ? "#00a752" : "#33333355")};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CheckBoxInsidePizza = styled.div`
  display: ${(props) => (props.checked ? "block" : "none")};
  background: #00a752;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
`;
