const findOptimum2 = 
<T>(fn: (x: T, y: T) => T) => 
(arr: T[]): T =>
arr.reduce(fn)

class Card {
   name: string;
   strength: number;
   powers: number;
   tech: number;

   constructor(
    n: string,
    s: number,
    p: number,
    t: number
  ){
    this.name = n;
    this.strength = s;
    this.powers = p;
    this.tech = t;

  }
}


const compareHeroes = (
  card1: Card,
  card2: Card,
): Card => {
  const oneIfBigger = (
    x: number,
    y: number
  ): number => x > y ? 1 : 0;

  const wins1 = 
  oneIfBigger(
    card1.strength, card2.strength
  ) + 
  oneIfBigger(
    card1.powers, card2.powers
  ) + 
  oneIfBigger(
    card1.tech, card2.tech
  );


  
  const wins2 = 
  oneIfBigger(
    card2.strength, card1.strength
  ) + 
  oneIfBigger(
    card2.powers, card1.powers
  ) + 
  oneIfBigger(
    card2.tech, card1.tech
  );

  return wins1 > wins2 ? card1 : card2
};


const codingLeagueOfAmerica = [

  new Card("Forceful", 20, 15, 2),
  new Card("Electrico", 12, 21, 8),
  new Card("Speedist", 8, 11, 4),
  new Card("TechWiz", 6, 16, 30),
]

const findBestHero = 
findOptimum2(compareHeroes)(codingLeagueOfAmerica);

console.log(findBestHero)


// another method
// const findBestHero = 
// findOptimum2(compareHeroes);
// console.log(findBestHero(codingLeagueOfAmerica));
