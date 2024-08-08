// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Fighter = {
    fighter_id: number;  // Assuming IDs are numeric
    first_name: string;
    last_name: string;
    nickname?: string;   
    photo?: string;      
    age: number;
    height: number;      
    PiggyVotes_total: number;  
};

export type FightCard = {
    fight_card_id: number;
    name: string;    // Name of the event
    date: Date;      // Date of the event
    location: string; // Location of the event
};


export type Fight = {
    fight_id: number;
    fight_card_id: number; // Ensure this is part of the SQL result if needed
    cardPosition: number;
    fighter1_name: string;
    fighter1_piggyvotes: number;
    fighter2_name: string;
    fighter2_piggyvotes: number;
    winner: number;
    result: string;
};

export type FighterFight = {
    ff_id: number;      // Unique identifier for each fighter-fight relationship
    fight_id: number;   // Foreign key linking to the Fight table
    fighter_id: number; // Foreign key linking to the Fighter table
    result: 'Win' | 'Loss'; // Result of the fight for this fighter (using string literals for type safety)
    role: 'winner' | 'loser'; // Role of the fighter in the fight (e.g., winner, loser)
    PiggyVotes: number;  
};

