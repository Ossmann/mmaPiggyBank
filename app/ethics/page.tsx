import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Placement() {
  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Navbar />
       </div>

      <div className='p-20'>
        <div className='relative'>
          <div className='absolute inset-0 bg-white opacity-75'></div>
          <div className='relative p-20'>
            <div className='text-4xl font-bold pb-8'>
              My WIL Experience with fluxguide
            </div>
        
            <div className='text-xl font-semibold pt-6 pb-3'>
              Sub-Heading 1
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className='text-xl font-semibold pt-6 pb-3'>
              Sub-Heading 2
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <Image
              src="/mc.jpeg" 
              alt="Placeholder"
              width={40}
              height={40}
              className='float-right'
            />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
