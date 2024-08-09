'use client';

import { getFightCards, getFights } from '../data/data';
import { FightCard, Fight } from '../data/definitions';
import React, { useState, useEffect } from 'react';
import FighterResult from './FighterResult';



export default function FightCardsScroller() {
    // Use state hooks with explicit types to call and update the values for each selected card
    const [fightCards, setFightCards] = useState<FightCard[]>([]);  // Type as FightCard[]
    const [selectedFightCardId, setSelectedFightCardId] = useState<number | null>(null);  // Type as number or null
    const [fights, setFights] = useState<Fight[]>([]);  // Type as Fight[]
  
    // Fetch fight cards when the component mounts
    useEffect(() => {
        console.log('Postgres URL:', process.env.POSTGRES_URL);

      const fetchFightCards = async () => {
        try {
          const data = await getFightCards();
          console.log('Fetched FightCard:', data); // Debugging log
          setFightCards(data);
  
          // Set the first fight card as selected by default if available
          if (data.length > 0) {
            setSelectedFightCardId(data[0].fight_card_id);
          }
        } catch (error) {
          console.error('Failed to fetch fight cards:', error);
        }
      };
  
      fetchFightCards();
    }, []);
  
    // Fetch fights when the selected fight card changes
    useEffect(() => {
      const fetchFights = async () => {
        if (selectedFightCardId !== null) {
          try {
            const data = await getFights(selectedFightCardId);
            console.log('Fetched Fights:', data);
            setFights(data);
          } catch (error) {
            console.error('Failed to fetch fights:', error);
          }
        }
      };
  
      fetchFights();
    }, [selectedFightCardId]);  // Trigger fetching fights whenever the selected fight card changes
  
    return (
      <div>
        {/* Horizontal scroll container for fight cards */}
        <div className="scroll-container">
          {fightCards.map((fightCard) => (
            <div
              className={`scroll-item ${selectedFightCardId === fightCard.fight_card_id ? 'selected' : ''}`}  // Highlight the selected fight card
              key={fightCard.fight_card_id}
              onClick={() => setSelectedFightCardId(fightCard.fight_card_id)}  // Update the selected fight card ID when clicked
            >
              {fightCard.name}
            </div>
          ))}
          <div className='scroll-item'>TestItem1</div>
          <div className='scroll-item'>TestItem1</div>
          <div className='scroll-item'>TestItem1</div>
          <div className='scroll-item'>TestItem1</div>
          
        </div>
  
        {/* Display fights for the selected fight card */}
        <div className="mt-20 space-y-10">
          {fights.map((fight) => (
            <div className="flex justify-between p-2 bg-gray-100 rounded-lg shadow-md" key={fight.fight_id}>
              <div className="w-1/2 text-center p-2 border-r border-gray-300">
              <FighterResult
                isWinner={fight.winner === 1}
                name={fight.fighter1_name}
                fight_id={fight.fight_id}
                fighterNum='fighter1'
                piggyvotes={fight.fighter1_piggyvotes}
              />
              </div>
              
              <div className="w-1/2 text-center p-2">
              <FighterResult
                isWinner={fight.winner === 2}
                name={fight.fighter2_name}
                fight_id={fight.fight_id}
                fighterNum='fighter2'
                piggyvotes={fight.fighter2_piggyvotes}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
