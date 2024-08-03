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
    PiggyVotes: number;  
};

export type FightCard = {
    fight_card_id: number;
    name: string;    // Name of the event
    date: Date;      // Date of the event
    location: string; // Location of the event
};


export type Fight = {
    fight_id: number;
    fight_card_id: number; // Links to a specific fight card
    fighter1_id: number;   // ID of the first fighter
    fighter2_id: number;   // ID of the second fighter
    result1: string;       // Result for the first fighter, e.g., 'Win' or 'Loss'
    result2: string;       // Result for the second fighter
    role1: string;         // Role of the first fighter, e.g., 'winner', 'loser'
    role2: string;         // Role of the second fighter
    cardPosition: number;  // Position of the fight on the card
};

export type FighterFight = {
    ff_id: number;      // Unique identifier for each fighter-fight relationship
    fight_id: number;   // Foreign key linking to the Fight table
    fighter_id: number; // Foreign key linking to the Fighter table
    result: 'Win' | 'Loss'; // Result of the fight for this fighter (using string literals for type safety)
    role: 'winner' | 'loser'; // Role of the fighter in the fight (e.g., winner, loser)
};

