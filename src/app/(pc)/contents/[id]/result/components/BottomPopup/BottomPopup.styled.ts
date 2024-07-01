import styled from 'styled-components';

const BottomPopupWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: ${props => props.theme.contentWidth};
  height: 49px;
  font-weight: bold;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: ${props => props.theme.colors.white};
  line-height: 19px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 19px;
  box-sizing: border-box;
`;

const Text = styled.div`
  text-align: left;
  font-size: 1em;
  font-weight: 600;
`;

const Button = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  border-radius: 5px;
  font-size: 0.875em;
  font-weight: 400;
  height: 26px;
  width: 113.13px;
`;

export { BottomPopupWrap, Text, Button };
