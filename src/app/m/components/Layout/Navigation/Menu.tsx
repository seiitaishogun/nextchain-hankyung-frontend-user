import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
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
      router.push('/m/contents/23');
    } else if (categoryId === 5) {
      router.push('/m/contents/17');
    } else {
      router.push(`/m/categories/${categoryId}`);
    }
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={14}
      freeMode
      modules={[FreeMode]}
    >
      {categories.map(c => (
        <SwiperSlide
          key={c.id}
          className={classNames({
            active: checkActiveMenu(c.id),
            'category-new': !!c.is_new,
            'category-free': !!c.is_free,
            'category-sale': !!c.is_sale,
          })}
        >
          <Link
            href={`/m/categories/${c.id}`}
            onClick={e => {
              handleClickLink(e, c.id);
            }}
            prefetch={false}
          >
            {c.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NavigationMenu;
