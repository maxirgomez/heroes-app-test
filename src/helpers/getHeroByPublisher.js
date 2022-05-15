import { heroes } from '../data/heroes'

export const getHeroByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if( !validPublishers.includes(publisher) ) {
        throw new Error( `${ publisher } is not a valid publisher` );
    }
    //* Retornamos los heroes que sean iguales al publisher que nos llega por parámetro
    return heroes.filter( hero => hero.publisher === publisher );
    
}