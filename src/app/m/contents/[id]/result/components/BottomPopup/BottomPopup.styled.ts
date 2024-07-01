import styled from 'styled-components';

const BottomPopupWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: calc(14px + 95px);
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  height: 77px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 16px;
  color: ${props => props.theme.colors.white};
  line-height: 19px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 19px;
  box-sizing: border-box;
`;

const Text = styled.div`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  border-radius: 3px;
  width: 73px;
`;

export { BottomPopupWrap, Text, Button };
