'use client';

import Link from 'next/link';
import styled from 'styled-components';

const FooterLayout = styled.footer`
  padding: 20px 14px;
  font-size: 14px;
  line-height: 20px;

  .copyright {
    padding-bottom: 5px;
    font-weight: bold;
  }

  .hk-family dt {
    float: left;
    padding: 5px 0;
  }

  .item {
    display: inline-block;
    padding: 5px 0;
  }

  .hk-family dt::after,
  .item:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 0 11px 0 15px;
    font-weight: normal;
    vertical-align: -2px;
    background: ${props => props.theme.colors.black100};
  }
`;

function Footer() {
  return (
    <FooterLayout>
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
            rel="noopener noreferrer"
            className="item"
          >
            한국경제<span className="txt-en">TV</span>
          </Link>
          <Link
            href="https://magazine.hankyung.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            한국경제매거진
          </Link>
          <Link
            href="https://bp.hankyung.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            <span className="txt-en">Book</span>
          </Link>
          <Link
            href="https://www.artetv.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            한경<span className="txt-en">arteTV</span>
          </Link>
          <Link
            href="https://tenasia.hankyung.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            텐아시아
          </Link>
          <Link
            href="https://www.kedglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            <span className="txt-en">KED Global</span>
          </Link>
        </dd>
      </dl>
    </FooterLayout>
  );
}

export default Footer;
