import { ContentDetailT } from '@module/types/content/detail';

interface ContentHeaderProps {
  content: ContentDetailT;
}

interface ContentCategoryProps {
  category?: string;
  type: string;
  isUnderline?: boolean;
}

interface ContentCountProps {
  view_count: number;
  like_count: number;
  share_count: number;
  isPay: boolean;
}

export type { ContentHeaderProps, ContentCategoryProps, ContentCountProps };
