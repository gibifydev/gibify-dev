import { Metadata } from "next";
import links from "@/data/social-links.json"
import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: 'Bio'
}

export default function BioPage() {
return (
  <div className="mt-[200px] h-full">
   <ul className='flex flex-col items-center justify-between gap-4 mt-5 w-full'>
        {links.social_links.map((link) => {
          return (
            <li key={link.name}
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
        })}
      </ul>
</div>
)

}