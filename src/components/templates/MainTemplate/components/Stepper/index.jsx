import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Container } from "./styles";
import { useLocation, useParams } from "react-router-dom";
const { Step } = Steps;
function Stepper() {
  const location = useLocation();
  const [currentStepper, setCurrentStepper] = useState(0);
  useEffect(() => {
    const handler = () => {
      const { pathname } = location;
      switch (pathname) {
        case "/":
          setCurrentStepper(0);
          break;
        case "/montar/1":
          setCurrentStepper(1);
          break;
        case "/montar/2":
          setCurrentStepper(2);
          break;
        case "/pagamento":
          setCurrentStepper(3);
          break;
        default:
          setCurrentStepper(0);
          break;
      }
    };
    handler();
  }, [location]);

  return (
    <Container id="initScreen">
      <Steps
        size="small"
        current={currentStepper}
        responsive
        className="stepper-container"
      >
        <Step title="Massa" />
        <Step title="Sabor" />
        <Step title="Tamanho" />
        <Step title="Finalizar" />
      </Steps>
    </Container>
  );
}

export default Stepper;
