
import { getFightCards } from '../data/data';
import { FightCard } from '../data/definitions';

export default async function FightCardsScroller() {
    const fightCards = await getFightCards();

    return (
        <div className='overflow-x-auto whitespace-nowrap'>
            {fightCards.map((fightCard) => (
                <div className='inline-block px-4 py-2' key={fightCard.fight_card_id}>
                    {fightCard.name}
                </div>
            ))}
        </div>
    );
}

