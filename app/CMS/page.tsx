import { updateFightDB } from "../data/data_submit";

export default function Form(){
    return (
      <form action={updateFightDB}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">

          {/*  Result */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              What was the fight result? (KO, Descision Round 1, No Contest)
            </label>
            <div className="relative">
                <input
                type="text"
                id="--"
                name="result"
                placeholder="KO"
                className="p-2 border border-gray-300 rounded-md text-black w-60"
                />
            </div>
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Create Recommendations</button>
        </div>
      </form>
    );
}


