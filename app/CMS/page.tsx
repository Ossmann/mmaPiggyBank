'use client'

import { useState } from "react";
import { getFights } from "../data/data";
import UpdateFightsForm from "../components/internal/UpdateFightsForm";
import { Fight } from "../data/definitions";

export default function CMS() {
  const [fightCardID, setFightCardID] = useState<number | null>(null);
  const [fights, setFights] = useState<Fight[]>([]);  // Type as Fight[]

  const handleGetFights = async () => {
    const fightIDToFetch = fightCardID ?? 1; // Use the default value 1 if fightCardID is null
    const fetchedFights = await getFights(fightIDToFetch);
    console.log(fetchedFights); // Log the fetched fights data
    setFights(fetchedFights); // Update the state with the fetched fights
  };

  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-black">
          Enter Fight Card ID
        </label>
        <div className="relative">
          <input
            type="number"
            value={fightCardID ?? 1} // Set default value to 1 if fightCardID is null
            onChange={(e) => {
              const value = e.target.valueAsNumber;
              setFightCardID(isNaN(value) ? null : value);
            }}
            placeholder="Enter Fight Card ID"
            className="p-2 border border-gray-300 rounded-md text-black w-60"
          />
        </div>
      </div>

      <button
        onClick={handleGetFights}
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
      >
        Get Fights
      </button>

      {fights.map((fight, index) => (
        <UpdateFightsForm 
          key={index} 
          existingFight={fight} 
        />
      ))}
    </div>
  );
}