import React, { useState } from 'react';
import LottieOnClick from './LottieOnClick';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { addVote } from '../data/data';


interface FighterResultProps {
  isWinner: boolean;
  name: string;
  piggyvotes: number;
  fighterNum: string;
  fight_id: number
}

const FighterResult = ({ isWinner, name, piggyvotes: initialPiggyVotes, fighterNum, fight_id }: FighterResultProps) => {
  const [piggyvotes, setPiggyvotes] = useState(initialPiggyVotes);

  const voteClick = () => { 
    console.log('Vote Clicked!');  // Simple log to test
    addVote(fighterNum, fight_id);
    setPiggyvotes(piggyvotes + 1);
    console.log('Called Add Vote function');
  };

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
        <LottieOnClick onClick={voteClick} />
        <div className="text-sm sm:inline-flex items-center"
            onClick={voteClick}
        >
          {piggyvotes} PiggyVotes&nbsp;
          <PlusCircleIcon width={30}/>
        </div>
      </div>
    );
  }
};

export default FighterResult;