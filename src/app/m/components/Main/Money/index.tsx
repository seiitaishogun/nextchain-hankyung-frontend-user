import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchMainMoney } from '@module/api/main';
import MoneySection from '@/app/m/components/Main/Money/Section';
import List from '@/app/m/components/List';

const Layout = styled.article`
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

function MainMoney() {
  const { data } = useQuery(['mainMoney'], fetchMainMoney, {
    select: res => res.data,
    suspense: true,
  });

  const firstData = (data || [])[0];
  const otherData = (data || []).slice(1);

  return (
    <Layout>
      {firstData && <MoneySection data={firstData} />}
      <List size="medium" data={otherData} />
    </Layout>
  );
}

export default MainMoney;
