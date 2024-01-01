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
                className={clsx('text-xs py-2 rounded-xs dark:text-white uppercase', {
                  'border-b-2 border-green-500 text-green-500 font-semibold': pathname === item.path,
                  'border-b-1 border-neutral-500 text-neutral-500 font-normal': pathname !== item.path,
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