'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterLayout = styled.footer`
  margin-top: 30px;
  padding: 0 20px;

  a {
    display: inline-block;
  }

  > div > .foot-inner {
    max-width: ${props => props.theme.desktopDeviceWidth};
    margin: 0 auto;
    padding: 25px 0;
    border-top: 1px solid #c3c3c3;
    box-sizing: border-box;
    font-size: 14px;
  }

  > div:first-child > .foot-inner {
    border-top-color: #121212;
  }

  > div:last-child > .foot-inner {
    padding-bottom: 70px;
  }

  > div.footer-sponsor > .foot-inner {
    padding: 20px 0;
  }

  .footer-sponsor-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .footer-sponsor-list [class^='f-sponsor'] {
    flex: 0 1 auto;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    vertical-align: top;
  }

  .footer-sponsor-list .f-sponsor-samsung {
    width: 94px;
    height: 14px;
    background-image: url('https://static.hankyung.com/resource/common/img/footer/footer-sponsor-samsung.svg');
  }

  .footer-sponsor-list .f-sponsor-wooribank {
    width: 76px;
    height: 18px;
    background-image: url('https://static.hankyung.com/resource/common/img/footer/footer-sponsor-wooribank.svg');
  }

  .footer-sponsor-list .f-sponsor-kbstar {
    width: 109px;
    height: 18px;
    background-image: url('https://static.hankyung.com/resource/common/img/footer/footer-sponsor-kbstar.svg');
  }

  .footer-sitemap .service-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
  }

  .footer-sitemap .service-list + .service-list {
    margin-top: 25px;
  }

  .footer-infomation .f-row + .f-row {
    margin-top: 25px;
  }

  .footer-infomation dt {
    font-weight: bold;
  }

  .footer-infomation .item {
    display: inline-block;
    padding: 5px 0;
  }

  .footer-infomation .item:not(:last-child)::after,
  .footer-infomation .hk-family dt::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 0 11px 0 15px;
    font-weight: normal;
    vertical-align: -2px;
    background: #121212;
  }

  .footer-infomation .f-define dt {
    margin-bottom: 5px;
  }

  .footer-infomation .hk-family dt {
    float: left;
    padding: 5px 0;
  }

  .footer-infomation .hk-family dt::after {
    margin: 0 15px;
  }

  .footer-infomation .copyright {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

function Footer() {
  return (
    <FooterLayout id="footer" className="footer-module">
      <div className="footer-sponsor">
        <div className="foot-inner">
          <div className="footer-sponsor-list">
            <Link
              href="https://www.samsung.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="f-sponsor-samsung"
            >
              <span className="blind">삼성</span>
            </Link>
            <Link
              href="https://www.wooribank.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="f-sponsor-wooribank"
            >
              <span className="blind">우리은행</span>
            </Link>
            <Link
              href="https://www.kbstar.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="f-sponsor-kbstar"
            >
              <span className="blind">국민은행</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-sitemap">
        <div className="foot-inner">
          <ul className="service-list">
            <li>
              <Link href="https://www.hankyung.com/economy">경제</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/finance">증권</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/realestate">부동산</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/financial-market">금융</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/industry">산업</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/politics">정치</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/society">사회</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/international">국제</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/it">IT·과학</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/life">라이프</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/culture">문화</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/golf">골프</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/sports">스포츠</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/entertainment">연예</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/opinion">오피니언</Link>
            </li>
          </ul>
          <ul className="service-list">
            <li>
              <Link href="https://www.hankyung.com/koreamarket/">
                한경코리아마켓
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/globalmarket/">
                한경글로벌마켓
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/realestate">집코노미</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/">회원전용</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/choinsight">
                한경 <span className="txt-en">CHO Insight</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/geeks">
                한경 <span className="txt-en">Geeks</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/bioinsight">
                한경 <span className="txt-en">BIO Insight</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/esg">
                한경<span className="txt-en">ESG</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/thepen/moneyist">
                <span className="txt-en">The Moneyist</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/thepen/lifeist">
                <span className="txt-en">The Lifeist</span>
              </Link>
            </li>
            <li>
              <Link href="https://datacenter.hankyung.com">데이터센터</Link>
            </li>
            <li>
              <Link href="https://www.hankyung.com/special-reports">
                스페셜 리포트
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-infomation">
        <div className="foot-inner">
          <div className="f-row">
            <dl className="f-define hk">
              <dt>한국경제신문</dt>
              <dd>
                <Link
                  href="https://company.hankyung.com/ked/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  회사소개
                </Link>
                <Link
                  href="https://members.hankyung.com/?utm_source=dotcom&amp;utm_medium=footer&amp;utm_campaign=affiliate"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  구독신청
                </Link>
                <Link
                  href="https://company.hankyung.com/ked/kor/ombudsman"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  고충처리
                </Link>
                <Link
                  href="https://company.hankyung.com/ked/kor/ad"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  광고안내
                </Link>
                <span className="item">
                  대표번호 : <span className="txt-num">02-3604-114</span>
                </span>
              </dd>
            </dl>
          </div>
          <div className="f-row">
            <dl className="f-define hk-dotcom">
              <dt>한경닷컴</dt>
              <dd>
                <Link
                  href="https://company.hankyung.com/dotcom/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  회사소개
                </Link>
                <span className="item">
                  <Link
                    href="https://company.hankyung.com/dotcom/partnership/business/"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    제휴
                  </Link>{' '}
                  /{' '}
                  <Link
                    href="https://company.hankyung.com/dotcom/partnership/contents/"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    콘텐츠구입
                  </Link>
                </span>
                <Link
                  href="https://company.hankyung.com/dotcom/partnership/advertising/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  광고안내
                </Link>
                <Link
                  href="https://www.hankyung.com/sitemap.html"
                  target="_blank"
                  className="item"
                  rel="noreferrer"
                >
                  사이트맵
                </Link>
                <Link
                  href="https://www.hankyung.com/help"
                  target="_blank"
                  className="item"
                  rel="noreferrer"
                >
                  <strong>고객센터</strong>
                </Link>
                <Link
                  href="https://www.hankyung.com/help/qna"
                  target="_blank"
                  className="item"
                  rel="noreferrer"
                >
                  <strong>1:1 문의</strong>
                </Link>
                <Link
                  href="https://www.hankyung.com/feed"
                  target="_blank"
                  className="item"
                  rel="noreferrer"
                >
                  RSS
                </Link>
              </dd>
              <dd>
                <Link
                  href="https://www.hankyung.com/help/policy?category=%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  이용약관
                </Link>
                <Link
                  href="https://www.hankyung.com/help/policy?category=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  <strong>개인정보처리방침</strong>
                </Link>
                <Link
                  href="https://www.hankyung.com/help/policy?category=%EC%B2%AD%EC%86%8C%EB%85%84%EB%B3%B4%ED%98%B8%EC%A0%95%EC%B1%85"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  청소년보호정책(책임자 : 이지연)
                </Link>
              </dd>
              <dd>
                <address className="item">
                  서울시 중구 청파로 <span className="txt-num">463</span>{' '}
                  한국경제신문사
                </address>
                <span className="item">
                  대표번호 : <span className="txt-num">02-3277-9900</span>
                </span>
              </dd>
              <dd>
                <span className="item">
                  사업자번호 : <span className="txt-num">104-81-47984</span>
                </span>
                <span className="item">
                  통신판매번호 : 중구<span className="txt-num">00606</span>
                </span>
                <span className="item">
                  인터넷신문등록번호 : 서울 아
                  <span className="txt-num">01035</span>
                </span>
                <span className="item">
                  등록(발행)일자 : <span className="txt-num">2009.11.23</span>
                </span>
                <span className="item">발행·편집인 : 정종태</span>
              </dd>
            </dl>
          </div>
          <div className="f-row">
            <p className="copyright">
              <span className="txt-en">Copyright 1999-2023.</span> 한경닷컴{' '}
              <span className="txt-en">All rights reserved.</span>
            </p>
            <dl className="hk-family">
              <dt>
                한국경제<span className="txt-en">Family</span>
              </dt>
              <dd>
                <Link
                  href="https://www.wowtv.co.kr/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  한국경제<span className="txt-en">TV</span>
                </Link>
                <Link
                  href="https://magazine.hankyung.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  한국경제매거진
                </Link>
                <Link
                  href="https://bp.hankyung.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  <span className="txt-en">Book</span>
                </Link>
                <Link
                  href="https://www.artetv.co.kr/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  한경<span className="txt-en">arteTV</span>
                </Link>
                <Link
                  href="https://tenasia.hankyung.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  텐아시아
                </Link>
                <Link
                  href="https://www.kedglobal.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="item"
                >
                  <span className="txt-en">KED Global</span>
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </FooterLayout>
  );
}

export default Footer;
