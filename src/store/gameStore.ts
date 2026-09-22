import type { PlayingCard, PokerHand } from "../types/game";
import { persist } from "zustand/middleware";
import { createDeck, shuffleCard } from "../Game/deck";
import { usePlayerStore } from "./playerStore";

import { create } from "zustand";
//Beskriver hvilke fase spillet er i
type GamePhase = "ready" | "draw" | "finished";
//Beskriver dataene som skal lagres for spillet
type GameStore = {
  deck: PlayingCard[];
  hand: PlayingCard[];
  discardedCards: PlayingCard[];
  currentBet: number;
  phase: GamePhase;
  pokerHand: PokerHand | null;
  setBet: (newBet: number) => void;
  dealCards: () => void;
  selectPlayer:  (playerId: string) => boolean;
};
//Oppretter spillets store med tomme kort lister og startverdier
export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      deck: [],
      hand: [],
      discardedCards: [],
      currentBet: 0,
      phase: "ready",
      pokerHand: null,
      //Setter bet til 2 eller 5 med mindre runden pågår
      setBet: (newBet) => {
        //Sjekker hvilke fase i spillet man er i, så innsatsen ikke kan endres etter kort er delt ut
        if (get().phase === "draw") {
          return;
        }
        if (newBet !== 2 && newBet !== 5) {
          return;
        }
        set({ currentBet: newBet });
      },
      selectPlayer: (playerId) => {
        const {players, selectedPlayerId} = usePlayerStore.getState();
        if (get().phase === "draw" && playerId !==selectedPlayerId){
          return false;
        }
        if (!players.some((player) => player.id === playerId)) {
          return false;
        }
        usePlayerStore.setState({selectedPlayerId: playerId}); 
        return true;
      },
      // Stopper utdelingen hvis en runde pågår eller innsatsen er ugyldig.
      dealCards: () => {
        const { phase, currentBet } = get();

        if (phase === "draw") {
          return;
        }

        if (currentBet !== 2 && currentBet !== 5) {
          return;
        }
        const { selectedPlayerId, subtractCoins } = usePlayerStore.getState();

        if (selectedPlayerId === null) {
          return;
        }

        const paymentSucceeded = subtractCoins(selectedPlayerId, currentBet);

        if (!paymentSucceeded) {
          return;
        }
        // Lager en ny stokket kortstokk og deler ut fem kort.
        const shuffledDeck = shuffleCard(createDeck());

        set({
          hand: shuffledDeck.slice(0, 5),
          deck: shuffledDeck.slice(5),
          discardedCards: [],
          pokerHand: null,
          phase: "draw",
        });
      },
    }),
    {
      name: "video-poker-game",
    },
  ),
);
