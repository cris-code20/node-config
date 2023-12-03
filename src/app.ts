import { findByHero } from "./service/hero.service";

const hero = findByHero(1);
 
console.log(hero?.nombre ?? "no hero found");
