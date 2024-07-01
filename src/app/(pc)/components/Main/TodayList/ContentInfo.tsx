import {
  TodayContentInfoLayout,
  TodayContentName,
  TodayContentSummary,
} from '@/app/(pc)/components/Main/TodayList/styled';
import { MainDetailProps } from '@/app/(pc)/components/Main/types';

function ContentInfo({ data }: MainDetailProps) {
  return (
    <TodayContentInfoLayout>
      <TodayContentSummary>{data?.summary}</TodayContentSummary>
      <TodayContentName>{data?.name}</TodayContentName>
    </TodayContentInfoLayout>
  );
}

export default ContentInfo;
