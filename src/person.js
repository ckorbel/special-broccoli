const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export { canDrink, isAdult, isSenior as default };