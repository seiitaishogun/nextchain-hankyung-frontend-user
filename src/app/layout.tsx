import React from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import GoogleAd from '@/app/m/components/Script/GoogleAd';

export const metadata: Metadata = {
  title: '한국경제 운세',
  description: '한국경제 운세 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.APP_ENV === 'production';
  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
      </Head>

      {isProduction && (
        <Script
          strategy="afterInteractive"
          src="https://static.hankyung.com/js/ga/googleTagManager.js"
        />
      )}
      {isProduction && (
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.GOOGLE_GTM_ID}');
        `}
        </Script>
      )}

      {isProduction && (
        <Script
          strategy="afterInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
      )}
      {isProduction && (
        <Script id="googletag" strategy="lazyOnload">
          {`
           window.googletag = window.googletag || {cmd: []};
           window.googletag.cmd.push(function() {
            window.googletag.defineSlot('/3448900/hmsB_bottom01(fortune)', [336, 280], '${process.env.GOOGLE_AD_ID}').addService(window.googletag.pubads());
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();
           });
          `}
        </Script>
      )}

      {isProduction && (
        <Script id="google-tag-manager-fles" strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GOOGLE_GTM_ID_FLES}');
          `}
        </Script>
      )}

      <body>
        {isProduction && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_GTM_ID}"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        {isProduction && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_GTM_ID_FLES}"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        {children}

        {isProduction && <GoogleAd />}
      </body>
    </html>
  );
}
