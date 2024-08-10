import Link from 'next/link';
import data from './menu.json'
import { LogoSquare } from '@/components/icon/logo-square';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';
import ChoseLanguageButton from '../ChoseLanguageButton/page';
import { TheGibiLogo } from '../icon/thegibi-logo';


export type Menu = {
  title: string;
  path: string;
}

export default function Navbar() {
  const menu = data.menu;
  return (
    <nav className="w-full flex items-center justify-between p-4 lg:px-6 rounded-full fixed top-4 left-0 right-0 bg-neutral-950 text-neutral-50">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-4 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <TheGibiLogo className='w-[242px] h-[32px]'/>
          </Link>
          <DesktopMenu menu={menu} />
        </div>
      </div>
        <ChoseLanguageButton />
    </nav>
  );
}
