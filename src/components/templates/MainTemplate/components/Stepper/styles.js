import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  margin: 1rem auto;
  padding: 0 1rem;

  .stepper-container {
  }
  .ant-steps-item-process .ant-steps-item-icon,
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: ${(props) => props.theme.green};
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: ${(props) => props.theme.green};
  }

  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: ${(props) => props.theme.green};
  }

  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background: ${(props) => props.theme.green};
  }
`;
