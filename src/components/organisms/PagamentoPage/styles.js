import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  background: white;
  padding: 1rem;
  border-radius: 0.7rem;
  text-align: start;
`;

export const ItemListPagamento = styled.div`
  margin: 0.9rem auto;
  border-radius: 0.6rem;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.3);
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 1s;

  background: ${(props) => (props.selected ? "#00a75255" : "white")};
  color: ${(props) => (props.selected ? "white" : "#3f3a4f")};
  font-weight: 600;
  :hover {
    opacity: 0.6;
    transform: scale(1.05);
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
