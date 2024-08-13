import Navbar from './components/navbar';
import Head from "next/head";
import LottiePlayer from "./components/LottiePlayer";
import Headline from "./components/headline";
import Image from 'next/image';
import FightCardsScroller from './components/FightCardsScroller';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative h-screen w-screen flex flex-col justify-center items-center text-center space-y-10 px-8 overflow-hidden"
      >
        <div className='absolute text-xs bg-gray-400 p-2 rounded-md border-solid border-2 border-gray-600 top-8 left-8'>
          Under construction
        </div>

        <div className='hidden sm:block'>
        

        {/* Guru Image */}
        <Image
          className="absolute -left-20 top-40 transform object-cover h-auto -z-10" // Positioning image to the left
          src="/GuruPortrait_lean.png"
          width={600}
          height={600}
          alt="The MMA Guru - Prey Eyes"
        />

        {/* Jesus Image */}
        <Image
          className="absolute transform -translate-y-30 translate-x-80 -z-10 rotate-3" // Positioning image to the left
          src="/MMA_guru_Jesus.png"
          width={360}
          height={360}
          alt="The MMA Guru - Prey Eyes"
        />

        {/* Piggy Bank LottieFile Animation */}
        <div className="absolute bottom-40 md:right-20 lg:right-64 bottom w-48"> {/* Positioning animation to the right */}
          <LottiePlayer />
        </div>

        </div>

        {/* Intro */}
        <Headline />
        <div className="space-y-2">
          <p>Help to push real Chads, fight injustice, and promote fan-friendly fighters.</p>
          <p className="-mt-2">Vote for fighters that you think deserve the Guru Piggy Bank Bonus.</p>
        </div>

        <a href="#fightCards" className="pt-10">
          <ChevronDownIcon className="h-16 w-16 animate-bounce" />
        </a>
      </section>


      {/* Fight Cards Section */}
      <section
        id="fightCards"
        className="w-screen flex justify-center"
      >
        <FightCardsScroller />

      </section>
  
      </>
  );
}
