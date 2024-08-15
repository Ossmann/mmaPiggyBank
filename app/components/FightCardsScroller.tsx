'use client';

import { getFightCards, getFights, getCardName } from '../data/data';
import { FightCard, Fight, VoteLeaderData } from '../data/definitions';
import React, { useState, useEffect } from 'react';
import FighterResult from './FighterResult';
import VoteLeader from './VoteLeader';
import { getVoteLeader } from '../data/data';



export default function FightCardsScroller() {
    // Use state hooks with explicit types to call and update the values for each selected card
    const [fightCards, setFightCards] = useState<FightCard[]>([]);  // Type as FightCard[]
    const [selectedFightCardId, setSelectedFightCardId] = useState<number | null>(null);  // Type as number or null
    const [fights, setFights] = useState<Fight[]>([]);  // Type as Fight[]
    const [cardName, setCardName] = useState<string>('');  // Type as string only, no null
    const [leaderData, setLeaderData] = useState<VoteLeaderData>(null); //useState for the component that shows how got the most votes on a card
    // const [timesVoted, setTimesVoted] = useState(""); //useState for local storage so every User can only vote once
  
    // // useEffect for localStorage voting once
    // useEffect(() => {
    //   let value
    //   // Get the value from local storage if it exists
    //   value = localStorage.getItem("timesVoted") || ""
    //   setTimesVoted(value)
    // }, [])

    
  
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
      const fetchFightsAndCardName = async () => {
        if (selectedFightCardId !== null) {
          try {
            // Fetch the fights and the card name concurrently
            const [fightsData, cardNameData] = await Promise.all([
              getFights(selectedFightCardId),
              getCardName(selectedFightCardId)
            ]);
    
            console.log('Fetched Fights:', fightsData);
            setFights(fightsData);
    
            console.log('Fetched Card Name:', cardNameData);
            if (cardNameData && cardNameData.rows.length > 0) {
              setCardName(cardNameData.rows[0].name!);  // Assert that name is not null
            } else {
              // Handle the case where cardNameData is null or has no rows, if this is a possibility
              setCardName(''); // or some other default value
            }
          
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

  
    return (
      // make parent overflow hidden so that the child container displaying the fights doesnt scroll.
      <div className='overflow-x-hidden overflow-y-hidden'>
        {/* Horizontal scroll container for fight cards */}
        <div className="scroll-container">
          {fightCards.map((fightCard) => (
            <div
              className={`scroll-item  ${selectedFightCardId === fightCard.fight_card_id ? 'selected' : ''}`}  // Highlight the selected fight card
              key={fightCard.fight_card_id}
              onClick={() => setSelectedFightCardId(fightCard.fight_card_id)}  // Update the selected fight card ID when clicked
            >
              {fightCard.name}
            </div>
          ))}
        </div>

          {/* Show the fighter with currently the most votes */}
        {/* Show the fighter with currently the most votes */}
        <div className=' flex justify-center items-center '>
            <VoteLeader leaderData={leaderData} />
        </div>

        <div className='hidden sm:block text-4xl text-center font-bold mt-10'>
        {cardName}
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
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
