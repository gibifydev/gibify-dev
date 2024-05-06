'use client'
import { Icon } from '@/components/icon';
import data from './social-links.json';
import Link from 'next/link';
import clsx from 'clsx';
export function SocialLinks() {
  const links = data.social_links;

  return (
    <div className='mt-11 p-4'>
      <span>Redes Sociais</span>
      <ul className='flex justify-between gap-3 mt-5'>
        {links.map((link) => {
          return (
            <li key={link.name}
              className={clsx(
                'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl capitalize')}
            >
              <Link
                href={link.path}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon name={link.name} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}