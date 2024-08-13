import Image from "next/image";
import { VoteLeaderData } from "../data/definitions";


interface VoteLeaderProps {
    leaderData: VoteLeaderData;
}

const VoteLeader = ({ leaderData }: VoteLeaderProps) => {
    if (!leaderData) {
        return null; // Or you can return some fallback UI if needed
    }
    const { leader, piggyvotes } = leaderData;

    if (piggyvotes != 0) {
        return (
            <div className="p-12 bg-gray-200 w-96 sm:w-1/2 mt-10 w-1/2 justify-center text-center items-center flex flex-row text-black space-x-10">
                <div className="flex flex-col justify-center items-center">
                    {Array.from({ length: piggyvotes }).map((_, index) => (
                        <Image
                            key={index}
                            className=""
                            width={30}
                            height={30}
                            src={'/Coin.svg'}
                            alt="Coin"
                        />
                    ))}
                    <span className="text-sm text-gray-600">{piggyvotes} PiggyVotes</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Image
                            className="mt-4"
                            width={80}
                            height={80}
                            src={'/PiggyBank.svg'}
                            alt="Piggy Bank"
                    />
                    <div className="text-white text-xl sm:text-3xl font-bold glow-text-purple">Piggy of the Card</div>
                    <div className="font-bold text-xl sm:text-3xl">{leader}</div>
                </div>
            </div>
        );
    }
};

export default VoteLeader;
