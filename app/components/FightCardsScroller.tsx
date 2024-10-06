'use client';

import { getFightCards, getFights, getCardNameDate } from '../data/data';
import { FightCard, Fight, VoteLeaderData } from '../data/definitions';
import React, { useState, useEffect, useRef } from 'react';
import FighterResult from './FighterResult';
import VoteLeader from './VoteLeader';
import { getVoteLeader } from '../data/data';



export default function FightCardsScroller() {
    // Use state hooks with explicit types to call and update the values for each selected card
    const [fightCards, setFightCards] = useState<FightCard[]>([]);  // Type as FightCard[]
    const [selectedFightCardId, setSelectedFightCardId] = useState<number | null>(3);  // Type as number or null, 3 by default
    const [fights, setFights] = useState<Fight[]>([]);  // Type as Fight[]
    const [cardNameDate, setCardNameDate] = useState<FightCard | null>(null);
    const [leaderData, setLeaderData] = useState<VoteLeaderData>(null); //useState for the component that shows how got the most votes on a card

  
      // Fetch fight cards when the component mounts
      useEffect(() => {
        console.log('Postgres URL:', process.env.POSTGRES_URL);

        const fetchFightCards = async () => {
            try {
                const data = await getFightCards();
                console.log('Fetched FightCard:', data); // Debugging log
                setFightCards(data);

                // Only set the selected fight card ID if it's not already set to something other than 3
                if (data.length > 0 && selectedFightCardId === 3) {
                    const defaultCard = data.find(card => card.fight_card_id === 3);
                    if (!defaultCard) {
                        // If there's no card with ID 4, set the first card in the list
                        setSelectedFightCardId(data[0].fight_card_id);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch fight cards:', error);
            }
        };

        fetchFightCards();
      }, []);  // Empty dependency array to run only on component mount
  
    // Fetch fights when the selected fight card changes
    useEffect(() => {
      const fetchFightsAndCardName = async () => {
        if (selectedFightCardId !== null) {
          console.log('Test ID fetching:', selectedFightCardId);
          try {
            // Fetch the fights and the card name and the dateconcurrently
            const [fightsData, cardNameDateData] = await Promise.all([
              getFights(selectedFightCardId),
              getCardNameDate(selectedFightCardId)
            ]);
    
            console.log('Fetched Fights:', fightsData);
            setFights(fightsData);
            setCardNameDate(cardNameDateData!);
    
            console.log('Fetched Card Name and Date:', cardNameDateData);
          
          } catch (error) {
            console.error('Failed to fetch fights or card name:', error);
          }
        }
      };
    
      fetchFightsAndCardName();
    }, [selectedFightCardId]);  // Trigger fetching both fights and card name whenever the selected fight card changes
    

     // Fetch the fighter with the most votes when fight card changes
     useEffect(() => {
      const fetchVoteLeader = async () => {
        if (selectedFightCardId !== null) {
          try {
            const data = await getVoteLeader(selectedFightCardId);
            console.log('Fetched VoteLeader:', data);
            setLeaderData(data);
          } catch (error) {
            console.error('Failed to fetch VotesLeader:', error);
          }
        }
      };   

    fetchVoteLeader();
  }, [selectedFightCardId]);

  console.log('FightCardID', selectedFightCardId);

  
    return (
      // make parent overflow hidden so that the child container displaying the fights doesnt scroll.
      <div className='overflow-x-hidden overflow-y-hidden'>
        {/* Horizontal scroll container for fight cards */}
        <div className="scroll-container">
          {fightCards.map((fightCard) => (
            <div
              className={`scroll-item ${selectedFightCardId === fightCard.fight_card_id ? 'selected' : ''} ${fightCard.fight_card_id === 9 ? 'current' : ''}`} // Apply the 'current' class if fight_card_id is 7
              key={fightCard.fight_card_id}
              onClick={() => setSelectedFightCardId(fightCard.fight_card_id)}  // Update the selected fight card ID when clicked
            >
              {fightCard.name}
            </div>
          ))}
        </div>

        {/* Show the fighter with currently the most votes if the event is past */}
        {
          cardNameDate && cardNameDate.date && new Date(cardNameDate.date).getTime() + 20200000 < new Date().getTime() && (
            <div className="flex justify-center items-center">
              <VoteLeader leaderData={leaderData} />
            </div>
          )
        }
        

        <div className='text-2xl sm:text-4xl text-center font-bold mt-10'>
          {cardNameDate ? cardNameDate.name : 'Loading...'}
        </div>
  
        {/* Display fights section for the selected fight card */}
        <div className="mt-10 px-6 md:px-40 space-y-10 fights-container">
          {fights.map((fight) => (
            <div className="flex justify-between rounded-lg border-2 items-center" key={fight.fight_id}>
              <div className="w-1/2 text-center">
              <FighterResult
                isWinner={fight.winner === fight.fighter1_id}
                result={fight.result}
                name={fight.fighter1_name}
                fight_id={fight.fight_id}
                fighterNum='fighter1'
                piggyvotes={fight.fighter1_piggyvotes}
                fight_card_id={selectedFightCardId!}
              />
              </div>
              
              <div className="w-1/2 text-center p-2">
              <FighterResult
                isWinner={fight.winner === fight.fighter2_id}
                result={fight.result}
                name={fight.fighter2_name}
                fight_id={fight.fight_id}
                fighterNum='fighter2'
                piggyvotes={fight.fighter2_piggyvotes}
                fight_card_id={selectedFightCardId!}

              />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
