import { Barlow_Condensed } from '@next/font/google';

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'], // Specify the subsets you need
    weight: '500', // Specify the font weight
  });
  
  export default function Headline() {
    return (
    <div className={`${barlowCondensed.className} font-barlowCondensed text-3xl md:text-6xl font-bold mb-4`}>
            <div className="flex justify-center items-center space-x-2">
                <div className="glow-text-purple">THE</div>
                <div className="glow-text-turquoise">MMA</div>
                <div className="glow-text-purple">GURU</div>
            </div>
            <div className="glow-text-purple mt-2">PiggyBank</div>
      </div>
    );
  }