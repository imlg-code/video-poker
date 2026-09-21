import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Player } from "../types/game";

type PlayerStore = {
    players: Player[];
    selectedPlayerId: string | null;
    addPlayer: (name: string) => void;
    selectPlayer: (playerId: string) => void;
    subtractCoins: (playerId: string, amount: number) => boolean;
};

// Lagrer spillere og valgt spiller i localStorage.
export const usePlayerStore = create<PlayerStore>()(
    persist(
        (set, get) => ({
            players: [],
            selectedPlayerId: null,

            // Oppretter en spiller med oppgitt navn, unik ID og 100 coins.
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

            // Tar imot en spiller-ID og lagrer hvilken spiller som er valgt.
            selectPlayer: (playerId) => {
                set({ selectedPlayerId: playerId });
            },

            // Trekker beløpet fra spilleren hvis beløpet er gyldig og saldoen er stor nok.
            // Returnerer true hvis trekket lykkes, ellers false.
            subtractCoins: (playerId, amount) => {
                const player = get().players.find(
                    (player) => player.id === playerId
                );

                if (!player || !Number.isInteger(amount) || amount <= 0) {
                    return false;
                }

                if (player.coins < amount) {
                    return false;
                }

                set((state) => ({
                    players: state.players.map((player) =>
                        player.id === playerId
                            ? { ...player, coins: player.coins - amount }
                            : player
                    ),
                }));

                return true;
            },
        }),
        {
            // Navnet som brukes for lagringen i localStorage.
            name: "video-poker-players",
        }
    )
);