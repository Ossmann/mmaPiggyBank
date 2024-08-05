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
        className="relative h-screen w-full flex flex-col justify-center items-center text-center space-y-10"
      >
        {/* Guru Image */}
        <Image
          className="absolute -left-20 top-1/2 transform -translate-y-1/2 object-cover h-auto -z-10" // Positioning image to the left
          src="/GuruPortrait.png"
          width={480}
          height={480}
          alt="The MMA Guru - Prey Eyes"
        />

        {/* Piggy Bank LottieFile Animation */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80"> {/* Positioning animation to the right */}
          <LottiePlayer />
        </div>

        {/* Clear floats */}
        <div className="clear-both"></div>

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
        className="h-screen flex justify-center items-center"
      >
        <FightCardsScroller />
      </section>

      {/* Empty bottom space */}
      <div className="p-16"></div>
    </>
  );
}

