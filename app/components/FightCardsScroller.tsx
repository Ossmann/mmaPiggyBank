
import { getFightCards } from '../data/data';
import { FightCard } from '../data/definitions';
import React, { useState } from 'react';


export default async function FightCardsScroller() {
    const fightCards = await getFightCards();

    return (
        <div className="scroll-container">
        {fightCards.map((fightCard) => (
          <div className="scroll-item" key={fightCard.fight_card_id}>
            {fightCard.name}
          </div>
        ))}
        <div className='scroll-item'>test1</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
        <div className='scroll-item'>test2</div>
      </div>      
    );
}

