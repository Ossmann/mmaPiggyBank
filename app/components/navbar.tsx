'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: '/placement', label: 'My Placement' },
    { href: '/skills', label: 'My Technical Skills' },
    { href: '/ethics', label: 'My Ethics' },
    { href: '/hobby', label: 'My Hobby' },
    { href: '/me', label: 'About Me' },
  ];

  return (
    <div>
      <div className='flex justify-between p-4 bg-white border font-light text-sm px-20'>
        <div className='flex justify-start hover:underline pl-2'>
          <Link href="/">
            Home
          </Link>
        </div>
  
        <div className='flex justify-center'>
          {links.map((link, index) => (
            <div className='px-4 hover:underline' key={index}>
              <Link className={`link ${pathname === link.href ? 'font-semibold' : ''}`} href={link.href}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
