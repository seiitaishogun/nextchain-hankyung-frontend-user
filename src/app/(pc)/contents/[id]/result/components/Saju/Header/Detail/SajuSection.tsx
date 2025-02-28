import { SajuT } from '@module/types/content/result';
import { getCheongan, getJiji, getOhaengColor } from '@/app/(pc)/utils/saju';
import {
  GridBgItem,
  GridBox,
  GridHeaderBgBox,
  GridHeaderBox,
  GridItem,
} from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User/styled';

interface Props {
  saju: SajuT;
}

function SajuSection({ saju }: Props) {
  return (
    <>
      <GridHeaderBox count={5}>
        <div />
        <div>시주</div>
        <div>일주</div>
        <div>월주</div>
        <div>년주</div>
      </GridHeaderBox>
      <GridHeaderBgBox count={5}>
        <div>육친</div>
        {saju.cheongan.map((item, i) => (
          <div key={i}>{i === 1 ? '본원' : item[3]}</div>
        ))}
      </GridHeaderBgBox>

      <GridBox count={5}>
        <GridItem>
          <span>천간</span>
          <span>(오행)</span>
        </GridItem>
        {saju.cheongan.map((item, i) => (
          <GridBgItem $color={getOhaengColor(item[2])} key={i}>
            <span>{getCheongan(item[0])}</span>
            <span>{item[2]}</span>
          </GridBgItem>
        ))}
      </GridBox>

      <GridBox count={5}>
        <GridItem>
          <span>지지</span>
          <span>(오행)</span>
        </GridItem>
        {saju.jiji.map((item, i) => (
          <GridBgItem $color={getOhaengColor(item[2])} key={i}>
            <span>{getJiji(item[0])}</span>
            <span>{item[2]}</span>
          </GridBgItem>
        ))}
      </GridBox>

      <GridHeaderBgBox
        count={5}
        style={{
          marginTop: '12px',
        }}
      >
        <div>육친</div>
        {saju.jiji.map((item, i) => (
          <div key={i}>{item[3]}</div>
        ))}
      </GridHeaderBgBox>
    </>
  );
}

export default SajuSection;
