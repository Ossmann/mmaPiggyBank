import Navbar from './components/navbar';
import Image from 'next/image'
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default async function Home() {

  return (
    <div className='relative h-screen'>

      {/* Guru Image */}
      <Image
      className='fixed left-0 top-0 z-0'
      src="/GuruPortrait.png"
      width={1000}
      height={1000}
      alt="Picture of the author"
    />

      {/* Intro */}
      <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">The MMA Guru PiggyBank</h1>
        <div className="space-y-0 w-3/4">
          <p>Help to push real Chads, fight injustice and promote fan-friendly fighters.</p>
          <p className="-mt-4">Vote for fighters that you think deserve the Guru Piggy Bank Bonus.</p>
        </div>
        <div className="flex gap-5">
          <a href="mailto:Jakobossmann@gmail.com">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button>
          </a>
          <a href="/CV_Jakob_Ossmann.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-gray-300 text-white hover:bg-blue-800">
              Download resume
            </button>
          </a>
        </div>
        <a href="#portfolio" className='pt-10'>
          <ChevronDownIcon className="h-16 w-16 animate-bounce " />
        </a>
      </section>

      {/* Empty bottom space */}
      <div className='p-16'></div>
    </div>
  );
}
