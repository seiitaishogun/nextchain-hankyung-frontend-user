import { useRouter } from 'next/navigation';
import { BottomPopupWrap, Text, Button } from './BottomPopup.styled';

function BottomPopup() {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push('/contents/23');
  };

  return (
    <BottomPopupWrap>
      <Text>
        지금 50% 할인 중!
        <br />
        월별 운세까지 분석해주는
        <br />더 상세한 신년 운세를 보고싶다면?
      </Text>
      <Button onClick={handleClick}>
        신년 운세
        <br />
        바로 가기
      </Button>
    </BottomPopupWrap>
  );
}

export default BottomPopup;
