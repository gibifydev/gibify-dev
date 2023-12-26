import clsx from 'clsx';
import { LogoIcon } from './logo-icon';
export function LogoSquare() {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl')}
    >
      <LogoIcon />
    </div>
  );
}