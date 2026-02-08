'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-[#CCDFC4] text-[#2D5016] font-semibold shadow-sm' 
          : 'text-[#2D5016] hover:bg-[#7DAA6F] hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;