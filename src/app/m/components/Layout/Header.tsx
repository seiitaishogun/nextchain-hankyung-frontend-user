'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKrBold = Noto_Sans_KR({
  weight: '700',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: ['system-ui'],
  subsets: ['latin'],
});

const HeaderLayout = styled.header<{ $isAsideOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 100%;
  height: 35px;

  ${props =>
    props.$isAsideOpen &&
    css`
      padding-right: 15px;
    `}
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  height: 100%;
  padding: 0 10px 0 14px;
  background: #1a2d63;
`;

const HeaderMenuButton = styled.button`
  overflow: hidden;
  width: 30px;
  height: 25px;
  background: url(${props => `${props.theme.imageUrl}/m/common/menu.svg`})
    no-repeat center center;
  background-size: 22px 17px;
  text-indent: -9999px;
  filter: grayscale(100%) brightness(10);
  -webkit-filter: grayscale(100%) brightness(10);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 21px;
  margin-right: 10px;
  padding-right: 12px;

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    right: 0;
    width: 1px;
    height: 13px;
    background: ${props => props.theme.colors.white};
  }

  i {
    display: inline-block;
    width: 61px;
    height: 21px;
    background: url(${props => `${props.theme.imageUrl}/m/common/logo.svg`})
      no-repeat center left;
    background-size: 61px auto;
    filter: grayscale(100%) brightness(10);
    -webkit-filter: grayscale(100%) brightness(10);
  }

  .hidden {
    width: 0;
    text-indent: -9999px;
    opacity: 0;
  }

  span {
  }
`;

const HeaderLogoText = styled(Link)`
  display: inline-block;
  font-family: ${notoSansKrBold.style.fontFamily};
  margin-top: -3px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

interface Props {
  isAsideOpen: boolean;
  handleToggleAside: () => void;
}

function Header({ isAsideOpen, handleToggleAside }: Props) {
  return (
    <HeaderLayout $isAsideOpen={isAsideOpen}>
      <HeaderBox>
        <HeaderLeft>
          <HeaderLogo href="https://www.hankyung.com" prefetch={false}>
            <i />
            <span className="hidden">한국경제</span>
          </HeaderLogo>
          <HeaderLogoText href="/m" prefetch={false}>
            <span>운세</span>
          </HeaderLogoText>
        </HeaderLeft>
        <HeaderMenuButton type="button" onClick={handleToggleAside}>
          메뉴
        </HeaderMenuButton>
      </HeaderBox>
    </HeaderLayout>
  );
}

export default Header;
