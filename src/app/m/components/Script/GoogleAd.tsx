'use client';

import React from 'react';
import styled from 'styled-components';
import Script from 'next/script';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
  margin-top: 20px;
  padding-bottom: 20px;
`;

function GoogleAd() {
  return (
    <Layout>
      <div
        id={process.env.GOOGLE_AD_ID}
        style={{
          maxWidth: '336px',
          minHeight: '280px',
        }}
      />

      {/* <!-- /3448900/hmsB_bottom01(fortune) --> */}
      <Script
        id="googletag-push"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.googletag.cmd.push(function() {window.googletag.display('${process.env.GOOGLE_AD_ID}');});`,
        }}
      />
    </Layout>
  );
}

export default GoogleAd;
