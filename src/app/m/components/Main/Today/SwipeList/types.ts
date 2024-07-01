import { Dispatch, SetStateAction } from 'react';
import { MainProps } from '@/app/m/components/Main/types';

interface TodaySwiperProps extends MainProps {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
}

export type { TodaySwiperProps };
