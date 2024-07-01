import styled from 'styled-components';

const Layout = styled.div`
  padding: 20px 8px;
  background-color: #eaeef3;
  text-align: center;
  letter-spacing: -0.5px;
  font-size: 12px;
  font-weight: normal;
  line-height: 22px;

  .companyInfo {
    margin: 0 auto;
    width: fit-content;
    color: #929294;
  }

  dl {
    display: flex;
  }

  dt {
    padding-right: 10px;
    min-width: 100px;
    text-align: left;
  }
`;

function TempFooter() {
  return (
    <Layout>
      <div className="companyInfo">
        <dl>
          <dd>㈜에프엘이에스</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>서울특별시 강서구 마곡중앙로 161-8 A동 614호</dd>
        </dl>
        <dl>
          <dt>대표</dt>
          <dd>김우현</dd>
        </dl>
        <dl>
          <dt>사업자등록번호</dt>
          <dd>174-81-01556</dd>
        </dl>
        <dl>
          <dt>통신판매업 신고번호</dt>
          <dd>2020-서울금천-0132</dd>
        </dl>
        <dl>
          <dt>고객센터</dt>
          <dd>02-6956-5671 , fles@fles.co.kr</dd>
        </dl>
        <dl>
          <dt>FAX</dt>
          <dd>02-6956-5672</dd>
        </dl>
      </div>
    </Layout>
  );
}

export default TempFooter;
