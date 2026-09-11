import type { Suit, Rank, PlayingCard } from "../types/game";

const suits: Suit[] =
 ["hearts", "diamonds", "clubs", "spades"];
 const ranks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
 /*Denne funksjonen oppretter en ny kortstokk med 52 kort og kombinerer dem etter farge og verdi*/
 export function createDeck(): PlayingCard[] {
    const deck: PlayingCard[] = [];
   for (const suit of suits) {
     for (const rank of ranks) {
       deck.push({ suit, rank });
     }}console.log("Deck created:", deck);
    return deck;
    
 };