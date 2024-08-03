
import { getFightCards } from '../data/data';
import { FightCard } from '../data/definitions';

export default async function FightCardsScroller() {
    const fightCards = await getFightCards();
    console.log(fightCards);

    return (
        <div className='overflow-x-scroll'>
            {fightCards.map((fightCard) => {
                return (
                    <div key={fightCard.fight_card_id}>
                        {fightCard.name}
                    </div>
                );
            })}
        </div>
    );
}

