import styled from 'styled-components';

const UnknownButton = styled.button<{ $isBirthedTime: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 67px;
  height: 48px;
  border: 0;
  border-radius: 6px;
  background: ${props =>
    !props.$isBirthedTime
      ? props.theme.colors.primary
      : 'rgba(155, 165, 183, 0.2)'};
  font-size: 16px;
  color: ${props =>
    !props.$isBirthedTime
      ? props.theme.colors.white
      : props.theme.colors.placeholder};
  letter-spacing: -0.32px;

  i {
    width: 16px;
    height: 16px;
    margin-right: 2px;
    background: url(${props =>
        !props.$isBirthedTime
          ? `${process.env.APP_IMAGE_URL}/m/common/check_on.webp`
          : `${process.env.APP_IMAGE_URL}/m/common/check_off.webp`})
      no-repeat center center;
    background-size: cover;
  }
`;

export { UnknownButton };
