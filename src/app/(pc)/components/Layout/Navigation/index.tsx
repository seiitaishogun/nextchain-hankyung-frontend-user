'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NavigationMenu from '@/app/(pc)/components/Layout/Navigation/Menu';

const HeaderNavigation = styled.nav`
  height: 60px;

  .gnb-wrap-inner {
    display: flex;
    max-width: ${props => props.theme.desktopDeviceWidth};
    margin: 0 auto;
    padding: 20px 0px;
    background: #142c67;
    height: 60px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .gnb {
    float: left;
  }

  .gnb-wrap-inner::after {
    content: '';
    display: block;
    clear: both;
  }

  .btn-allmenu {
    width: 22px;
    height: 17px;
    margin-top: 3px;
    margin-left: 15px;
    background-image: url(/images/menu_white.svg);
    background-repeat: no-repeat;
    background-position: -1px -1px;
    vertical-align: top;
  }
  h1.logo {
    margin: 0px 0px 0px 15px;
    display: inline-block;
    width: 80.5px;
    height: 20px;
  }

  h1.title {
    margin: 0px 0px 0px 15px;
    display: inline-block;
    height: 20px;
  }
  .gnb-wrap-inner-logo {
    background-image: url(/images/logo_white.svg);
    background-repeat: no-repeat;
    width: 80.5px;
    height: 20px;
  }
  .gnb-wrap-inner-title {
    font-size: 19px;
    color: #ffffff;
    font-weight: bold;
    border-left: 1px solid #ffffff;
    padding-left: 15px;
    line-height: 19px;
  }

  .gnb {
    margin-left: 20px;
  }

  .gnb > ul,
  .gnb > ul > li,
  .gnb > ul > li > a {
    float: left;
    box-sizing: border-box;
  }

  .gnb > ul > li {
    margin-left: 25px;

    &:first-child {
      margin-left: 0;
    }
  }

  .gnb > ul > li > a {
    color: #ffffff;
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    font-weight: 300;
  }

  .gnb > ul > li > a:hover,
  .gnb > ul > li.active > a {
    border-bottom: 4px solid #ffffff;
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Navigation({ handleToggleAside }: Props) {
  return (
    <HeaderNavigation role="navigation">
      <div className="gnb-wrap-inner">
        <button
          type="button"
          className="btn-allmenu"
          onClick={handleToggleAside}
        >
          <span className="blind">전체메뉴</span>
        </button>
        <h1 className="logo">
          <a href="https://www.hankyung.com/ " className="gnb-wrap-inner-logo ">
            <span className="blind">전체메뉴</span>
          </a>
        </h1>
        {/* <h1 className="logo">
          <Link href="/" className="gnb-wrap-inner-logo" prefetch={false}>
            <span className="">한국경제</span>
          </Link>
        </h1> */}
        <h1 className="title">
          <Link href="/ " className=" gnb-wrap-inner-title">
            운세
          </Link>
        </h1>
        <NavigationMenu />
      </div>
    </HeaderNavigation>
  );
}

export default Navigation;
