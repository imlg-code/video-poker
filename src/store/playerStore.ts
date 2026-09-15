import { create } from "zustand";
import type { Player } from "../types/game";
import { persist } from "zustand/middleware";

type PlayerStore = {
  players: Player[];
  addPlayer: (name: string) => void;
  selectedPlayerId: string | null;
  selectPlayer: (playerId: string) => void;
};
/*addPlayer skal ta imot spillerens navn som tekst
newPlayer får en unik id, navn og 100coins, set state lager en ny liste med eksisterende spillere
og legger den nyeste bakerst.*/
export const usePlayerStore = create<PlayerStore>()(
    persist(
        (set) => ({
  players: [],
  selectedPlayerId: null,

  //Tar imot et navn og legger til en spiller med unik id og 100 coins
  addPlayer: (name) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name: name,
      coins: 100,
    };

    set((state) => ({
      players: [...state.players, newPlayer],
    }));
  },
  // Tar imot en spiller id og lagrer hvilke spiller som er valgt
  selectPlayer: (playerId) => {
    set({ selectedPlayerId: playerId });
  },
        }),
        {
            //Navnet som brukes for lagringen i localStorage
            name: "video-poker-players"
        }
    )
);
