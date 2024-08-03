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
        className="h-screen w-full flex flex-col justify-center items-center text-center space-y-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center space-x-4 md:space-x-8">
          {/* Guru Image */}
          <Image
            className="object-cover max-w-full h-auto"
            src="/GuruPortrait.png"
            width={460}
            height={460}
            alt="The MMA Guru - Prey Eyes"
          />

          <div className="max-w-lg">
            {/* Intro */}
            <Headline />
            <div className="space-y-2">
              <p>
                Help to push real Chads, fight injustice, and promote
                fan-friendly fighters.
              </p>
              <p className="-mt-2">
                Vote for fighters that you think deserve the Guru Piggy Bank
                Bonus.
              </p>
            </div>
          </div>

          {/* Piggy Bank LottieFile Animation */}
          <div className="w-full md:w-80">
            <LottiePlayer />
          </div>
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

