import styled from 'styled-components';
import React, { useMemo } from 'react';
import { ParentT, OriginChildrenT } from '@module/types/content/fortune';

interface Props {
  contentId: number;
  parents: ParentT[];
  childrenSaju: OriginChildrenT[];
}

const TitleNavigationLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 12px;
  padding: 10px 8px;
  border-radius: 20px;
  background-color: #f8f4fc;
`;

const TitleNavigationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${props => props.theme.colors.gray100};
  grid-gap: 1px;
`;

const TitleNavigationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f4fc;
  overflow: hidden;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 13px 0;
    font-size: 19px;
    font-weight: 600;
    line-height: normal;
    color: ${props => props.theme.colors.black100};
  }
`;

function TitleNavigation({ contentId, parents, childrenSaju }: Props) {
  const itemList =
    contentId === 39 || contentId === 40 ? childrenSaju : parents;
  const itemNames = useMemo(
    () =>
      itemList
        .filter(p => !!p.name)
        .map(p => ({
          id: p.id,
          name: p.name,
        })),
    [itemList]
  );

  const handleClick = (e: React.MouseEvent<HTMLElement> | any) => {
    e.preventDefault();

    try {
      const id = e.currentTarget.href.split('#')[1];
      const target = document.getElementById(`${id}`) as any;
      const position = (target.scrollTop || target.offsetTop) - 85;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    } catch {
      // console.info('error');
    }
  };

  if (itemNames.length === 0) return null;

  return (
    <TitleNavigationLayout>
      <TitleNavigationList>
        {itemNames.map(item => (
          <TitleNavigationItem key={item.id}>
            <a href={`#parent-title-${item.id}`} onClick={handleClick}>
              {item.name}
            </a>
          </TitleNavigationItem>
        ))}

        {itemNames.length % 2 === 1 && <TitleNavigationItem />}
      </TitleNavigationList>
    </TitleNavigationLayout>
  );
}

export default TitleNavigation;
