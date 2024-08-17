import React, { useState } from 'react';
import LottieOnClick from './LottieOnClick';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { addVote } from '../data/data';


interface FighterResultProps {
  isWinner: boolean;
  result: string;
  name: string;
  piggyvotes: number;
  fighterNum: string;
  fight_id: number
}

const FighterResult = ({ isWinner, result, name, piggyvotes: initialPiggyVotes, fighterNum, fight_id }: FighterResultProps) => {
  const [piggyvotes, setPiggyvotes] = useState(initialPiggyVotes);

  //handel when someone clicked to vote
  const voteClick = () => { 
    console.log('Vote Clicked!');  // Simple log to test

    const timesVoted = parseInt(localStorage.getItem('timesVoted') || '0', 10); //get times Voted from localStorage

    //check if someone voted 2 times they cant vote anymore
    if (timesVoted < 2) {
      localStorage.setItem('timesVoted', (timesVoted + 1).toString()); // Increment the vote count in localStorage

      addVote(fighterNum, fight_id); //update database
      setPiggyvotes(piggyvotes + 1); //update visual
      console.log('Called Add Vote function');
    } else {
      alert('Max number of votes reached. You have already voted for 2 fights on this card.');
      return;
    }
  };

  if (isWinner) {
    return (
      <div className="font-bold text-center p-2 relative">
        <div className="text-xl glow-text-turquoise absolute inset-x-0 top-[-20px]">WINNER</div>
        <div className="text-xl">{name}</div>
      </div>
    );
  } else if (result == null || result === '') {
    return (
      <div className="text-center p-2">
        <div className="font-bold text-xl">{name}</div>
      </div>
    );
  } else {
    return (
      <div className="text-center p-2">
        <div className="text-red-700">Was he robbed?</div>
        <div className="font-bold text-xl">{name}</div>
        <LottieOnClick onClick={voteClick} />
        <div
          className="text-sm text-gray-200 sm:inline-flex items-center"
          onClick={voteClick}
        >
          {piggyvotes} PiggyVotes&nbsp;
          <PlusCircleIcon width={30} className="animate-ping-twice" />
        </div>
      </div>
    );
  }
};

export default FighterResult;