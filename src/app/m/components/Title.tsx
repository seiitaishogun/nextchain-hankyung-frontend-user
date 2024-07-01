import Link from 'next/link';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

interface Props {
  text: string;
  linkOptions?: {
    text?: string;
    href: string;
  };
  className?: string;
  isFree?: boolean;
}

function Title({ text, linkOptions, className, isFree }: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (linkOptions) router.push(linkOptions.href);
  };

  return (
    <TitleLayout
      className={classNames(className, 'title')}
      onClick={handleClick}
      $isFree={isFree}
    >
      <div className="text-box">
        <span>{text}</span>
      </div>
      <div>
        {linkOptions && (
          <Link href={linkOptions.href} prefetch={false}>
            더보기
          </Link>
        )}
      </div>
    </TitleLayout>
  );
}

export default Title;
export type { Props as TitleProps };

const TitleLayout = styled.h4<{ $isFree?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2px 16px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: ${props => props.theme.colors.blackText};
  cursor: pointer;

  a {
    display: inline-block;
    overflow: hidden;
    width: 7px;
    height: 12px;
    padding: 3px;
    background: url(${props =>
        `${props.theme.imageUrl}/m/common/arrow_right.webp`})
      no-repeat center center;
    background-size: 7px 12px;
    text-indent: -9999px;
  }

  .text-box {
    ${props =>
      props.$isFree &&
      css`
        display: flex;
        align-items: center;
        width: calc(100% - 28px);

        span {
          display: inline-block;
          position: relative;
          overflow: hidden;
          width: auto;
          max-width: calc(100% - 50px);
          vertical-align: top;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &:after {
          content: 'FREE';
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          height: 23px;
          margin-left: 5px;
          padding: 0 6px;
          background: #1a2d63;
          font-size: 13px;
          font-weight: 500;
          color: ${props.theme.colors.white};
        }
      `}
  }
`;
