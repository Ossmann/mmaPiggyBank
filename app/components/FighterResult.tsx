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
  fight_id: number;
  fight_card_id: number
}

const FighterResult = ({ isWinner, result, name, piggyvotes: initialPiggyVotes, fighterNum, fight_id, fight_card_id }: FighterResultProps) => {
  const [piggyvotes, setPiggyvotes] = useState(initialPiggyVotes);

  const voteClick = () => {
    console.log('Vote Clicked!');  // Simple log to test

    const timesVotedKey = `timesVoted_${fight_card_id}`; // Create a unique key for each fight card
    let timesVoted = parseInt(localStorage.getItem(timesVotedKey) || '0', 10); // Get the number of votes for this fight card

    // Check if the user has already voted 2 times for this fight card
    if (timesVoted < 2) {
      timesVoted += 1; // Increment the vote count
      localStorage.setItem(timesVotedKey, timesVoted.toString()); // Update the vote count for this fight card

      addVote(fighterNum, fight_id); // Update the database
      setPiggyvotes(piggyvotes + 1); // Update the visual count
      console.log('Called Add Vote function');
    } else {
      alert('Max number of votes reached. You have already voted 2 times on this card.');
      return;
    }
  };


  return (
    <>
      {result == null || result === '' ? (
        <div className="font-bold text-center py-3 relative">
          <div className="text-xl whitespace-nowrap inline-block">{name}</div>
        </div>
      ) : (
        <div className="font-bold text-center py-8 relative">
            <div className="text-xl whitespace-nowrap inline-block">{name}</div>
          <div className="absolute inset-x-0">
            <LottieOnClick onClick={voteClick} />
            <div
              className="text-sm text-gray-200 sm:inline-flex items-center"
              onClick={voteClick}
            >
              {piggyvotes} PiggyVotes&nbsp;
              <PlusCircleIcon width={30} className="animate-ping-twice" />
            </div>
          </div>
  
          {isWinner ? (
            <div className="text-xl glow-text-turquoise absolute inset-x-0 top-[2px]">
              WINNER
            </div>
          ) : (
            <div className="text-red-700 absolute inset-x-0 top-[4px]">
              Was he robbed?
            </div>
          )}
        </div>
      )}
    </>
  );
  
}
  
export default FighterResult;