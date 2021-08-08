import styled from "styled-components";

export const ButtonDesign = styled.button`
  background: ${(props) => props.color};
  color: white;
  width: 100%;
  max-width: ${(props) => props.size};
  padding: 0.2rem 0.4rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 0.6rem;
  transition: 0.7s;
  cursor: pointer;
  letter-spacing: 0.1rem;
  :hover {
    opacity: 0.6;
  }
`;
