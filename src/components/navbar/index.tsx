import Link from 'next/link';
import data from './menu.json'
import { LogoSquare } from '@/components/icon/logo-square';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';


export type Menu = {
  title: string;
  path: string;
}

export default function Navbar() {
  const menu = data.menu;
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-4 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              <code>Gibify Dev</code>
            </div>
          </Link>
          <DesktopMenu menu={menu} />
        </div>
      </div>
    </nav>
  );
}
