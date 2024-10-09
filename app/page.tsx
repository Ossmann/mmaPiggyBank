import LottiePlayer from "./components/LottiePlayer";
import Headline from "./components/headline";
import FightCardsScroller from './components/FightCardsScroller';
import { ChevronDownIcon } from '@heroicons/react/24/solid';


export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative h-screen w-screen flex flex-col justify-center items-center text-center space-y-10 px-8 overflow-hidden"
      >
        {/* <div className='absolute text-xs bg-gray-400 p-2 rounded-md border-solid border-2 border-gray-600 top-8 left-8'>
          Under construction
        </div> */}

        <div className='hidden sm:block'>

        {/* Piggy Bank LottieFile Animation */}
        <div className="absolute bottom-40 md:right-20 lg:right-64 bottom w-48"> {/* Positioning animation to the right */}
          <LottiePlayer />
        </div>

        </div>

        {/* Intro */}
        <Headline />
        <div className="space-y-2">
          <p>Help to fight injustice and promote fan-friendly fighters.</p>
          <p className="-mt-2">Vote for fighters that you think deserve the Piggy Bank Bonus.</p>
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

      <div className='text-sm p-8 text-right'>
        <a href='/Contact'>Contact</a>
      </div>
  
      </>
  );
}
