"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByHero = void 0;
const heroe_1 = require("../data/heroe");
const findByHero = (id) => {
    return heroe_1.heroes.find((hero) => hero.id === id);
};
exports.findByHero = findByHero;
