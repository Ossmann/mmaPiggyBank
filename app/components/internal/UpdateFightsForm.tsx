import { updateFightDB } from "../../data/data_submit";
import { Fight } from "@/app/data/definitions";

interface UpdateFightsFormProps {
  existingFight: Fight;
}

export default function UpdateFightsForm({ existingFight }: UpdateFightsFormProps) {
  return (
    <form action={updateFightDB}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

      <div className="flex pb-4 text-gray-400 items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div>Fighter 1: </div>
          <div className="text-black">
            {existingFight.fighter1_name} (id: {existingFight.fighter1_id})
          </div>
        </div>
        <div className="">vs.&nbsp;</div>
        <div className="flex items-center space-x-2">
          <div>Fighter 2: </div>
          <div className="text-black">
            {existingFight.fighter2_name} (id: {existingFight.fighter2_id})
          </div>
        </div>
        <div className="flex items-center">
         FightID: {existingFight.fight_id}
        </div>
      </div>


        <div className="md:flex md:space-x-4 text-black">

        
        {/* Card Position */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Card Position
          </label>
          <div className="relative">
            <input
              type="number"
              id="cardPosition"
              name="cardPosition"
              placeholder={existingFight ? existingFight.cardposition.toString() : "1"}
              className="p-2 border border-gray-300 rounded-md text-black w-20"
            />
          </div>
        </div>

        {/* Winner ID */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Winner ID (0 if draw/no contest)
          </label>
          <div className="relative">
            <input
              type="number"
              id="winner"
              name="winner"
              placeholder={existingFight?.winner?.toString() || "null"}
              className="p-2 border border-gray-300 rounded-md text-black w-20"
            />
          </div>
        </div>

        {/* Result */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Result (KO, Decision Round 1, No Contest)
          </label>
          <div className="relative">
            <input
              type="text"
              id="result"
              name="result"
              placeholder={existingFight ? existingFight.result : "KO"}
              className="p-2 border border-gray-300 rounded-md text-black w-60"
            />
          </div>
        </div>

        {/* Fighter 1 PiggyVotes */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Fighter 1 PiggyVotes
          </label>
          <div className="relative">
            <input
              type="number"
              id="fighter1_PiggyVotes"
              name="fighter1_PiggyVotes"
              placeholder={existingFight ? existingFight.fighter1_piggyvotes.toString() : "0"}
              className="p-2 border border-gray-300 rounded-md text-black w-20"
            />
          </div>
        </div>

        {/* Fighter 2 PiggyVotes */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Fighter 2 PiggyVotes
          </label>
          <div className="relative">
            <input
              type="number"
              id="fighter2_PiggyVotes"
              name="fighter2_PiggyVotes"
              placeholder={existingFight ? existingFight.fighter2_piggyvotes.toString() : "0"}
              className="p-2 border border-gray-300 rounded-md text-black w-20"
            />
          </div>
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Update Fight
        </button>
      </div>

     </div>

    </form>
  );
}
