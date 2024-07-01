import styled from 'styled-components';

const StepNavigationLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6px);
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StepNavigationItem = styled.div<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props =>
    props.$isActive
      ? props.theme.colors.gray500
      : props.theme.colors.placeholder};
`;

export { StepNavigationLayout, StepNavigationItem };
