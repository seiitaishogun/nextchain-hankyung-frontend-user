'use client';

import styled from 'styled-components';
import React from 'react';
import Navigation from '@/app/(pc)/components/Layout/Navigation';

const HeaderLayout = styled.header`
  margin-top: 50px;
  position: relative;
  background: #fff;

  .header-inner {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: ${props => props.theme.desktopDeviceWidth};
    margin: 0 auto;

    .logo {
      margin: 28px 20px 0 10px;
    }

    .logo-hankyung {
      display: inline-block;
      width: 221px;
      height: 55px;
      background: url(https://static.hankyung.com/img/logo/logo-hk.svg)
        no-repeat 0 0 / contain;
      vertical-align: top;
    }
  }

  .service-area {
    display: flex;
    align-items: center;
    padding: 29px 0 0 0;

    .service-list > li {
      float: left;
      margin-left: 20px;

      .hit {
        display: inline-block;
        position: relative;
        padding-top: 35px;
      }

      .hit::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('https://static.hankyung.com/img/www/w/main/2020/spr-main-2023.svg');
        background-repeat: no-repeat;
        background-size: auto;
      }
    }

    .txt {
      font-size: 13px;
      vertical-align: top;
    }

    .mn-hktv {
      position: relative;

      .hit::before {
        width: 27px;
        height: 26px;
        background-position: -1px -1px;
      }

      .badge-live {
        content: '';
        position: absolute;
        top: 2px;
        right: -16px;
        width: 28px;
        height: 12px;
        background-position: -2px -41px;
        pointer-events: none;
        animation: 0.7s linear alternate showHide forwards infinite;
      }
    }

    .mn-newspaper .hit::before {
      top: 5px;
      width: 28px;
      height: 21px;
      background-position: -47px -6px;
    }

    .mn-wsj .hit::before {
      top: 5px;
      width: 31px;
      height: 18px;
      background-position: -94px -6px;
    }

    .mn-ked .hit::before {
      top: 5px;
      width: 50px;
      height: 25px;
      background-position: -145px -6px;
    }

    .mn-ked .gnb-dropdown-menu {
      top: 55px;
      min-width: auto;
      width: 85px;
    }

    .mn-ked .gnb-dropdown-menu ul {
      padding-left: 20px;
    }

    .mn-subscribe .hit::before {
      top: 3px;
      width: 22px;
      height: 27px;
      background-position: -214px -4px;
    }
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Header({ handleToggleAside }: Props) {
  return (
    <HeaderLayout>
      {/* <div className="header-inner">
        <h1 className="logo">
          <Link href="/" className="logo-hankyung" prefetch={false}>
            <span className="blind">한국경제</span>
          </Link>
        </h1>

        <div className="service-area">
          <ul className="service-list">
            <li className="mn-hktv">
              <Link
                href="https://www.wowtv.co.kr/"
                target="_blank"
                rel="nofollow noreferrer"
                className="hit"
              >
                <span className="txt">
                  한경<span className="txt-en">TV</span>
                </span>
              </Link>
              <span className="badge-live">
                <span className="blind">LIVE</span>
              </span>
            </li>
            <li className="mn-newspaper">
              <Link
                href="https://plus.hankyung.com/?utm_source=dotcom&amp;utm_medium=header&amp;utm_campaign=affiliate"
                target="_blank"
                rel="nofollow noreferrer"
                className="hit paper_link"
              >
                <span className="txt">신문보기</span>
              </Link>
            </li>
            <li className="mn-wsj">
              <Link
                href="https://plus.hankyung.com/apps/wsj.index?utm_source=dotcom&amp;utm_medium=header&amp;utm_campaign=affiliate"
                target="_blank"
                rel="nofollow noreferrer"
                className="hit paper_link"
              >
                <span className="txt">
                  <span className="txt-en">WSJ</span>보기
                </span>
              </Link>
            </li>
            <li className="mn-ked">
              <Link
                href="https://www.kedglobal.com/"
                target="_blank"
                rel="nofollow noreferrer"
                className="hit txt"
              >
                외국어뉴스
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      <Navigation handleToggleAside={handleToggleAside} />
    </HeaderLayout>
  );
}

export default Header;
