import type { PokerHand } from "../types/game";

//Beskriver hvor mange ganger innsatsen hver pokerhånd gir i gevinst
export const payouts: Record<PokerHand, number> = {
    "High Card": 0,
    "One Pair": 1,
    "Two Pair": 2,
    "Three of a Kind": 3,
    "Straight": 4,
    "Flush": 6,
    "Full House": 9,
    "Four of a Kind": 15,
    "Straight Flush": 25,
    "Royal Flush": 50,
};
//Tar imot pokerhånd og innsats og returnerer utbelaingen i coins
export function calculatePayout(hand: PokerHand, bet: number): number{
    return payouts[hand] * bet;
}