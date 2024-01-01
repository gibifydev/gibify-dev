'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { Menu } from '@/components/navbar'
import { usePathname } from 'next/navigation';
import { inter } from '@/fonts';
export function DesktopMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname()
  return (
    <>
      {menu.length ? (
        <ul className={`hidden gap-4 text-sm md:flex md:items-center ${inter.className}`}>
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className={clsx('text-xs py-2 font-normal rounded-xs dark:text-white uppercase', {
                  'text-green-500 dark:text-green-500 font-semibold': pathname === item.path,
                })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}