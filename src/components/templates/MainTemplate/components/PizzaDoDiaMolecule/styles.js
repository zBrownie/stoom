import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.whiteDark};
  border-radius: 0.7rem;
  padding: 1rem;
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
  top: 10rem;
`;

export const Titlecard = styled.h1`
  color: #6a6b82;
  font-weight: 600;
`;

export const IconPointsValue = styled.div`
  position: absolute;
  top: -2.5rem;
  right: -1.7rem;

  .iconStar {
    z-index: 100;
    font-size: 5rem;
    color: #0099d0;
  }
`;

export const TextPoints = styled.p`
  color: white;
  font-weight: 600;
  z-index: 102;
  position: absolute;
  left: 2rem;
  bottom: 1rem;
  width: 1rem;
  font-size: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardPizzas = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  width: 100%;
  height: 13rem;
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
  align-self: flex-end;
  padding-left: 1.2rem;
`;

export const CardTitleContent = styled.h2`
  color: #3f3a4f;
  font-weight: 600;
  margin: 0;
`;
export const CardTextContent = styled.p`
  color: ${(props) => (props.isTitle ? "#797f80" : "#484459")};
  font-weight: ${(props) => (props.isTitle ? 600 : 400)};
  margin: 0;
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const FooterText = styled.h2`
  color: ${(props) => props.theme.green};
  font-weight: 600;
`;
