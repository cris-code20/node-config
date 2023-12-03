import { heroes } from "../data/heroe"

export const findByHero = (id: number) =>{
    return heroes.find((hero) => hero.id === id);
}