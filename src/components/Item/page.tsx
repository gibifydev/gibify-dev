"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Icon } from "@/components/icon";
import Link from "next/link";

export default function Item(link: { name: string, path: string }) {
  const linkVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

return (
  <motion.li
    key={link.name}
    initial="hidden"
    animate="visible" variants={linkVariants}
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
  </motion.li>
)
}