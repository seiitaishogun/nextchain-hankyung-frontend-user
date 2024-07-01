import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: './font/pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: './font/pretendard/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: './font/pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './font/pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  style: 'normal',
  display: 'swap',
});

const fontFamilies = {
  default:
    '-apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif',
  inner: `${pretendard.style.fontFamily}, -apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif`,
};

const colors = {
  primary: '#7440D7',
  black: '#000000',
  black100: '#121212',
  white: '#ffffff',
  gray100: '#e4e4e4',
  gray200: '#eef1f4',
  gray500: '#545F71',
  placeholder: '#9ba5b7',
  borderGray: '#d9d9d9',
  sajuGray: '#e7e7e7',
  red: '#e01f27',
};

const minDeviceWidth = '280px';
const maxDeviceWidth = '375px';
const desktopDeviceWidth = '1100px';
const contentWidth = '726px';

const theme: any = {
  fontFamilies,
  colors,
  minDeviceWidth,
  maxDeviceWidth,
  desktopDeviceWidth,
  contentWidth,
  imageUrl: process.env.APP_IMAGE_URL,
};
export default theme;
