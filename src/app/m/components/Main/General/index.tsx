import styled from 'styled-components';
import GeneralSection from '@/app/m/components/Main/General/Section';
import List from '@/app/m/components/List';
import { MAIN_GENERAL_DATA } from '@/app/m/data/main';

const Layout = styled.article`
  padding-top: 16px;
  border-top: 2px solid ${props => props.theme.colors.black};
  //border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

function MainGeneral() {
  /**
   const { data } = useQuery(['mainGeneral'], fetchMainGeneral, {
   select: res => res.data,
   suspense: true,
   });
   */

  const firstData = (MAIN_GENERAL_DATA || [])[0];
  const otherData = (MAIN_GENERAL_DATA || []).slice(1);
  return (
    <Layout>
      {firstData && <GeneralSection data={firstData} />}
      <List size="medium" data={otherData} />
    </Layout>
  );
}

export default MainGeneral;
