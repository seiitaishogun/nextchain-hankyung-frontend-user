import styled from 'styled-components';

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.black100};
  line-height: 19px;

  span {
    text-align: center;
  }
`;

const ButtonLayout = styled.div<{ $isValid: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1001;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 20px 15px;
  background: rgba(255, 255, 255, 0.9);

  .button-box {
    width: 100%;
    max-width: ${props => props.theme.maxDeviceWidth};
    min-width: ${props => props.theme.minDeviceWidth};
  }

  button {
    width: 100%;
    height: 55px;
    border-radius: 16px;
    background: ${props =>
      props.$isValid ? props.theme.colors.primary : 'rgba(155, 165, 183, 0.2)'};
    font-family: ${props => props.theme.fontFamilies.inner};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    color: ${props =>
      props.$isValid
        ? props.theme.colors.white
        : props.theme.colors.placeholder};
  }
`;

const AgreementBox = styled.div`
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  max-height: calc(100vh - 100px);
  margin-top: 20px;
  padding: 10px 14px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.black100};
  line-height: 21px;
  text-align: left;
  word-break: break-word;

  // &::-webkit-scrollbar-track, &::-webkit-scrollbar {
  //   background: ${props => props.theme.colors.white};
  // }
  //
  // &::-webkit-scrollbar-thumb {
  //   border: 6px solid transparent;
  //   border-radius: 30px;
  //   background-color: ${props => props.theme.colors.borderGray};
  // }
`;

const AgreementCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 14px;
`;

const AgreementLabelBox = styled.div`
  display: flex;
  align-items: center;
`;

const AgreementCheckLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black100};
  text-align: left;
  cursor: pointer;
`;

const AgreeDetailButton = styled.button`
  font-size: 14px;
  color: ${props => props.theme.colors.gray500};
  text-decoration: underline;
`;

export {
  MessageBox,
  ButtonLayout,
  AgreementBox,
  AgreementCheck,
  AgreementLabelBox,
  AgreementCheckLabel,
  AgreeDetailButton,
};
