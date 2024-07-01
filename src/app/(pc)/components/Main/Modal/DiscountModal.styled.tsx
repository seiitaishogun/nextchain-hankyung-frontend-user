import styled from 'styled-components';

const Layout = styled.div`
  width: 900px;
  box-sizing: border-box;
  outline: 0;
  div {
    box-sizing: border-box;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 28px;
  background: #d9d9d9;
  border-radius: 28px;
  img {
    position: relative !important;
    border-radius: 28px;
    cursor: pointer;
  }
`;

const OptionButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  font-family: ${({ theme }) => theme.fontFamilies.notoSans};
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-bottom: 17px;
`;

const HideOneDay = styled.div`
  cursor: pointer;
`;

const Close = styled.div`
  cursor: pointer;
`;

export { Layout, ModalContent, OptionButton, HideOneDay, Close };
