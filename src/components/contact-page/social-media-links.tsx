'use client'
import { Icon } from '@/components/icon';
import data from './social-media-links.json';
import Link from 'next/link';
import clsx from 'clsx';
export function SocialMediaLinks() {
  const links = data.social_media_links;

  return (
    <div>
      <ul className='flex gap-4'>
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