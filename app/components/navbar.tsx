'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'My Portfolio' },
    { href: '/hobby', label: 'My Hobby' },
    { href: '/me', label: 'About Me' },
  ];

  return (
    <div>
      <div className='flex justify-between p-4 bg-white border font-light text-sm px-20'>
        <div className='justify-start pl-2 '>
          <div>Jakob Ossmann</div>
          <div className='text-xs lowercase font-mono mt-1"'>fullstack developer</div>
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
