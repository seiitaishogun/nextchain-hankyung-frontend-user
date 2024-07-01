import { ContentListLimit } from '@module/types/content/list';
import { MainContentT } from '@module/types/main';

interface MainProps {
  data: MainContentT[];
}

interface MainDetailProps {
  data: MainContentT;
}

interface MainContent {
  data: ContentListLimit;
}

interface MainContentApiProps {
  data: ContentListLimit;
}

export type { MainProps, MainDetailProps, MainContent, MainContentApiProps };
