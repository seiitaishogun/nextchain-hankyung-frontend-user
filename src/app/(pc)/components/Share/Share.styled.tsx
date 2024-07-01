import styled from 'styled-components';

const Layout = styled.div`
  width: ${props => props.theme.maxDeviceWidth};
  height: auto;
  padding: 27px 0 51px;
  border-radius: 40px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.white};
`;

const ShareTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  font-family: ${({ theme }) => theme.fontFamilies.notoSans};
  color: ${props => props.theme.colors.black100};
  text-align: center;
`;

const ShareSocialItem = styled.button<{ image: string }>`
  overflow: hidden;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  text-indent: -9999px;
  cursor: pointer;
`;

const ShareSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
  padding: 0 20px;

  ${ShareSocialItem}, button {
    margin: 0 21px;
  }
`;

export { Layout, ShareTitle, ShareSocial, ShareSocialItem };
