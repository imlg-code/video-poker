import type { Suit, Rank, PlayingCard } from "../types/game";

const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
const ranks: Rank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

/*Denne funksjonen oppretter en ny kortstokk med 52 kort og kombinerer dem etter farge og verdi*/

export function createDeck(): PlayingCard[] {
  const deck: PlayingCard[] = [];

  /*Løkker gjennom alle fargene og verdiene for å lage en kortstokk med 52 kort*/
  for (const suit of suits) {
    for (const rank of ranks) {
      /*Oppretter et nytt kortobjekt med farge og verdi og legger det til i kortstokken*/
      deck.push({ suit, rank });
    }
  }
  /*Returnerer den ferdige kortstokken når funksjonen kalles på*/
  return deck;
}

/*Funksjonen shuffler kortene i en kortstokk*/
export function shuffleCard(deck: PlayingCard[]): PlayingCard[] {
  /*Lager en kopi av kortstokken for å unngå å endre den originale kortstokken*/
  const shuffledDeck = [...deck];
  /*Løkker gjennom kortstokken baklengs og bytter hvert kort med et tilfeldig kort foran det*/
  for (let a = shuffledDeck.length - 1; a > 0; a--) {
    /*Genererer et tilfeldig tall fra 0 til a for å velge et kort å bytte med*/
    const b = Math.floor(Math.random() * (a + 1));
    /*Tar vare på kortet på plass a før det byttes*/
    const cardToMove = shuffledDeck[a];
    shuffledDeck[a] = shuffledDeck[b];
    shuffledDeck[b ] = cardToMove;
  }
  return shuffledDeck;
}
