import { Dispatch, SetStateAction } from 'react';
import { MainProps } from '@/app/(pc)/components/Main/types';

interface TodaySwiperProps extends MainProps {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
}

export type { TodaySwiperProps };
