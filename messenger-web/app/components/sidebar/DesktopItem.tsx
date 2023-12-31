import clsx from 'clsx';
import Link from 'next/link';

type DesktopItemProps = {
  label: string;
  icon: any;
  href: string;
  onClick: (() => Promise<undefined>) | undefined;
  active?: boolean;
};

/**
 * 데스크탑 전용 아이템 컴포넌트
 */
export default function DesktopItem({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}: DesktopItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          `
          group 
          flex 
          gap-x-3 
          rounded-md 
          p-3 
          text-sm 
          leading-6 
          font-semibold 
          text-gray-500 
          hover:text-black 
          hover:bg-gray-100
        `,
          active && 'bg-gray-100 text-black'
        )}
      >
        <Icon className='h-6 w-6 shrink-0' aria-hidden='true' />
        <span className='sr-only'>{label}</span>
      </Link>
    </li>
  );
}
