import styled from 'styled-components';

const ContentPaymentLayout = styled.div`
  overflow: hidden;
  width: 726px;
  height: 100vh;
  margin: 0 auto;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export { ContentPaymentLayout };
