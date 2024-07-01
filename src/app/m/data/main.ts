import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/m/constants/image';

const MAIN_MONEY_TOP: any = {
  id: 1,
  name: '2024 신년 운세를 확인하세요!',
  summary: '2024년 갑진년의 흐름과 내 기운을 쉽고 명쾌하게 풀어드립니다.',
  thumbnail: DEFAULT_THUMBNAIL_LARGE_PATH,
};

const TODAY_DATA: any = [
  {
    id: 1,
    name: '오늘의 운세',
    summary: '하루를 행복하게!',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_1.webp`,
  },
  {
    id: 2,
    name: '오늘의 금전운',
    summary: '투자 전 확인 필수!',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_2.webp`,
  },
  {
    id: 3,
    name: '오늘의 타로',
    summary: '오늘 하루는 어떨까?',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_3.webp`,
  },
  {
    id: 26,
    name: '오늘의 띠별 운세',
    summary: '출근길 확인 필수!',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_26.webp`,
  },
  {
    id: 39,
    name: '2024년 무료 신년 운세',
    summary: '한 해를 완벽하게!',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_39.webp`,
  },
];

const MAIN_MONEY_LAST: any = [
  {
    id: 7,
    name: '나의 평생 재물운은?',
    summary: `내 사주에는 돈이 얼마나 있을까?<br /> 타고난 나의 재물운을 확인하세요.`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_7.webp`,
  },
];

const MAIN_GENERAL_DATA: any = [
  {
    id: 42,
    name: '운수 대통하는 3월 운세',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_sub_42.webp`,
    is_new: true,
  },
  {
    id: 23,
    name: '2024년 신년 운세 OPEN',
    summary: `갑진년 한 해를 완벽하게 분석하고<br/>다가오는 2024년을 대비하세요.`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_23.webp`,
  },
];

const MAIN_HEALTH_DATA: any = [
  {
    id: 43,
    name: '3월 재물운 분석',
    summary: `돈을 쉽게 벌고, 그 돈을 지키는 방법`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_43_mo.webp`,
  },
  {
    id: 11,
    name: '다이어트는 평생',
    summary: `무조건 성공하는 다이어트를 위한 타로`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_11.webp`,
  },
];

const MAIN_TOP_DATA: any = [
  {
    id: 12,
    name: '나는 복권에 당첨될 사주일까?',
    summary: `복권 당첨 사주는 따로 있다`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_12.webp`,
  },
  {
    id: 2,
    name: '오늘의 재물운',
    summary: `투자 전 한 줄 요약!`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_2.webp`,
  },
  {
    id: 43,
    name: '3월 재물운 분석',
    summary: `이번 달 돈 들어오는 곳과 돈 나가는 곳은?`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_30.webp`,
  },
  // {
  //   id: 7,
  //   name: '나의 평생 재물운은?',
  //   summary: `내 사주에는 돈이 얼마나 있을까?`,
  //   thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_7.webp`,
  // },
  {
    id: 16,
    name: '좋은 인연을 만날 수 있을까요?',
    summary: '사주로 보는 내 연애사',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_16.webp`,
  },
  {
    id: 3,
    name: '오늘의 타로',
    summary: `오늘 하루를 점쳐보세요`,
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_3.webp`,
  },
];

const MAIN_LOVE_DATA: any = [
  {
    id: 7,
    name: '나는 부자가 될 팔자일까?',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_7.webp`,
  },
  {
    id: 12,
    summary: '당첨 확률을 높여주는 사주 분석',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_12.webp`,
  },
  {
    id: 13,
    summary: '사업 성공을 원한다면',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_13.webp`,
  },
  {
    id: 15,
    summary: '금전적인 도움이 필요할 때',
    thumbnail: `${process.env.APP_IMAGE_URL}/m/main/thumbnail_large_15.webp`,
  },
];

export {
  MAIN_MONEY_TOP,
  TODAY_DATA,
  MAIN_MONEY_LAST,
  MAIN_GENERAL_DATA,
  MAIN_HEALTH_DATA,
  MAIN_TOP_DATA,
  MAIN_LOVE_DATA,
};
