import Navbar from './components/navbar';
import Head from "next/head";
import LottiePlayer from "./components/LottiePlayer";
import Image from 'next/image'
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default async function Home() {

  return (
    <div className='relative h-screen'>

      {/* Guru Image */}
      <Image
      className="fixed -ml-80 top-0 -z-10"
      src="/GuruPortrait.png"
      width={1000}
      height={1000}
      alt="Picture of the author"
    />

    {/* Piggy Bank LottieFile Animation */}
    <div className="fixed absolute bottom-20 right-40 w-80">
          <LottiePlayer />
    </div>

      {/* Intro */}
      <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">The MMA Guru PiggyBank</h1>
        <div className="space-y-0 w-3/4">
          <p>Help to push real Chads, fight injustice and promote fan-friendly fighters.</p>
          <p className="-mt-4">Vote for fighters that you think deserve the Guru Piggy Bank Bonus.</p>
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
