import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import useCategories from '@module/hooks/common/useCategories';

import 'swiper/css';
import 'swiper/css/free-mode';

function NavigationMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const categories = useCategories() || [];

  const checkActiveMenu = (id: number) => {
    const path = `/categories/${id}`;
    return pathname.includes(path);
  };

  const handleClickLink = (
    e: React.MouseEvent<HTMLElement>,
    categoryId: number
  ) => {
    e.preventDefault();

    if (categoryId === 1) {
      router.push('/contents/23');
    } else {
      router.push(`/categories/${categoryId}`);
    }
  };

  return (
    <div className="gnb">
      <ul>
        {categories.map(c => (
          <li
            key={c.id}
            className={classNames({
              active: checkActiveMenu(c.id),
            })}
          >
            <Link
              href={`/categories/${c.id}`}
              title={c.name}
              prefetch={false}
              onClick={e => {
                handleClickLink(e, c.id);
              }}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationMenu;
