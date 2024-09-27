import { Metadata } from "next";
import links from "@/data/social-links.json"
import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Children } from "react";
import Avatar from "@/components/Avatar";

export const metadata: Metadata = {
  title: 'Bio'
}

export default function BioPage() {
return (
  <section className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center gap-8">
  <Avatar />
   <ul className='flex flex-col items-center justify-between gap-4 w-full px-4'>
        {Children.toArray(links.social_links.map((link) => {
          return (
            <li
              className={clsx(
                'w-full flex flex-none cursor-pointer p-4 max-w-80  hover:border-neutral-700 items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black rounded-full capitalize')}
            >
              <Link
                href={link.path}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center justify-center"
              >
                <Icon name={link.name} />
                <span className="ml-4">{link.name}</span>
              </Link>
            </li>
          )
        }))}
      </ul>
</section>
)

}