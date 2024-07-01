import styled from 'styled-components';
import useCategories from '@module/hooks/common/useCategories';
import Title from '@/app/(pc)/components/Title';

const CategoryBox = styled.div`
  margin-top: 20px;

  .sub-title {
    padding: 14px 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray100};
  }
`;

function CategoryMenu() {
  const categoryData = useCategories() || [];

  return (
    <CategoryBox>
      {categoryData.map(c => (
        <Title
          key={c.id}
          className="sub-title"
          text={c.name}
          href={`/categories/${c.id}`}
        />
      ))}
    </CategoryBox>
  );
}

export default CategoryMenu;
