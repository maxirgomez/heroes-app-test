import { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroByPublisher(publisher), [publisher]);

    return (
        <>
            <h1>Hero List - {publisher}</h1>
            <div className="container">
                <div className="row">
                    {
                        heroes.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
