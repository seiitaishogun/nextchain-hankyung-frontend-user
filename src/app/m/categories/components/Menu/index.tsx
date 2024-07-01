import styled from 'styled-components';
import useCategories from '@module/hooks/common/useCategories';
import Title from '@/app/m/components/Title';

const CategoryBox = styled.div`
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
          linkOptions={{
            href: `/m/categories/${c.id}`,
          }}
        />
      ))}
    </CategoryBox>
  );
}

export default CategoryMenu;
