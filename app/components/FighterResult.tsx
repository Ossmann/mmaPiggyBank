import React from 'react';
import LottieOnClick from './LottieOnClick';
import { PlusCircleIcon } from '@heroicons/react/24/solid';


interface FighterResultProps {
  isWinner: boolean;
  name: string;
  piggyvotes: number;
}

const FighterResult = ({ isWinner, name, piggyvotes }: FighterResultProps) => {
  if (isWinner) {
    return (
      <div className="font-bold text-black text-center p-2">
        <div className="text-lg text-red-800 ">WINNER</div>
        <div className="text-xl">{name}</div>
      </div>
    );
  } else {
    return (
      <div className="text-gray-800 text-center p-2">
        <div className="text-lg text-red-800 ">robbed?</div>
        <div className="text-xl">{name}</div>
        <LottieOnClick />
        <div className="text-sm inline-flex items-center">
          {piggyvotes} PiggyVotes&nbsp;
          <PlusCircleIcon width={20}/>
        </div>
      </div>
    );
  }
};

export default FighterResult;