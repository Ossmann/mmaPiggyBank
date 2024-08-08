'use client';

import { getFightCards, getFights } from '../data/data';
import { FightCard, Fight } from '../data/definitions';
import React, { useState, useEffect } from 'react';


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
        </div>
  
        {/* Display fights for the selected fight card */}
        <div className="fights-container">
          {fights.map((fight) => (
            <div className="fight-item" key={fight.fight_id}>
              <p>Fighter 1: {fight.fighter1_name}</p>
              <p>Fighter 2: {fight.fighter2_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
