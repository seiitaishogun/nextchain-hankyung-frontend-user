import styled from 'styled-components';

const FormStepLayout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1001;
  box-sizing: border-box;
  width: 100%;
  // max-width: ${props => props.theme.maxDeviceWidth};
  // min-width: ${props => props.theme.minDeviceWidth};
  height: auto;
  padding: 27px 14px 26px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${props => props.theme.colors.white};
  text-align: center;
`;

const InfoTitle = styled.div`
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.placeholder};
  line-height: 19px;
`;

const InfoContentName = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  color: ${props => props.theme.colors.black100};
`;

const InfoContentPrice = styled.div`
  margin-top: 9px;
  font-size: 26px;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  line-height: 31px;
`;

const InfoContentOldPrice = styled.div`
  margin-top: 9px;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.placeholder};
  line-height: 27px;
  text-decoration: line-through;
`;

const InfoContentDiscountPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
`;

const InfoContentDiscountPrice = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  line-height: 31px;
`;

const InfoContentDiscountPercent = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 27px;
  height: 27px;
  text-align: center;
  background-color: #ff3e3e;
  padding: 0px 3px;
`;

const InfoDescription = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: ${props => props.theme.colors.placeholder};
  line-height: 16px;
`;

const FormLayout = styled.div`
  .label-group {
    margin-top: 14px;
  }
`;

const FormDescription = styled.div`
  margin-top: 29px;
  padding-bottom: 3px;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  line-height: 14px;
  color: ${props => props.theme.colors.placeholder};
`;

export {
  FormStepLayout,
  InfoTitle,
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  FormLayout,
  FormDescription,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
};
