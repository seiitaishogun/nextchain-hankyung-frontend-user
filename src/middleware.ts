import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('/healthcheck')) return NextResponse.next();
  if (req.nextUrl.pathname.includes('/images')) return NextResponse.next();

  const { device } = userAgent(req);
  const isMobile = device.type === 'mobile';

  if (isMobile && !req.nextUrl.pathname.includes('/m')) {
    const url = req.nextUrl.clone();
    url.pathname = `/m${req.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  if (!isMobile && req.nextUrl.pathname.includes('/m')) {
    const url = req.nextUrl.clone();
    url.pathname = req.nextUrl.pathname.replace('/m', '');
    return NextResponse.redirect(url);
  }

  const isProduction = process.env.APP_ENV === 'production';
  if (isProduction && req.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(
      `https://fortune.hankyung.com/${req.nextUrl.pathname}`,
      301
    );
  }

  const purchaseHash = req.cookies.get(USER_PURCHASE_HASH_KEY);
  if (req.nextUrl.pathname.includes('/contents/replays/lists')) {
    const url = req.nextUrl.clone();
    url.pathname = '/contents/replays';
    if (!purchaseHash) return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/:path*'] };
