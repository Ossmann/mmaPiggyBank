import React from 'react';

const FighterResult = ({ isWinner, name, piggyvotes }) => {
  if (isWinner) {
    return (
      <div className="text-green-500 font-bold text-center p-2">
        <div className="text-lg">WINNER</div>
        <div className="text-xl">{name}</div>
        <div className="text-sm text-gray-600">{piggyvotes} PiggyVotes</div>
      </div>
    );
  } else {
    return (
      <div className="text-gray-800 text-center p-2">
        <div className="text-xl">{name}</div>
        <div className="text-sm text-gray-600">{piggyvotes} PiggyVotes</div>
      </div>
    );
  }
};

export default FighterResult;