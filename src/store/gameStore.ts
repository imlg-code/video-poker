import type { PlayingCard, PokerHand } from "../types/game";

import {create} from "zustand";
//Beskriver hvilke fase spillet er i
type GamePhase = "ready"|"draw"| "finished";
//Beskriver dataene som skal lagres for spillet
type GameStore ={
    deck: PlayingCard[];
    hand: PlayingCard[];
    discardedCards: PlayingCard[];
    currentBet: number;
    phase: GamePhase;
    pokerHand: PokerHand|null;
    setBet: (newBet: number)=> void;
}
//Oppretter spillets store med tomme kort lister og startverdier
export const useGameStore = create<GameStore>()((set, get)=> ({

    deck: [],
    hand: [],
    discardedCards: [],
    currentBet: 0,
    phase: "ready",
    pokerHand: null,
    //Tar imot en ny bet og oppdaterer currentBet, sjekker om det er mindre enn null eller heltall
    setBet: (newBet) => {
       //Sjekker hvilke fase i spillet man er i, så innsatsen ikke kan endres etter kort er delt ut
          if (get().phase === "draw"){
            return;
        }
        if (newBet < 0){
            return;
        }
        if (!Number.isInteger(newBet)){
            return;
        }
        set({currentBet: newBet});
       
     
    }
}));