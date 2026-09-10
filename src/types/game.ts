export type Suit = "hearts" | "diamonds" | "clubs" | "spades";
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" 
| "10" | "J" | "Q" | "K" | "A";
export type PlayingCard= {
    suit: Suit;
    rank: Rank;
};
export type Player = {
    id: string;
    name: string;
    coins: number;
};
export type PokerHand= "High Card" | "One Pair" | "Two Pair" | "Three of a Kind" | "Straight" | "Flush" | "Full House" | "Four of a Kind" | "Straight Flush" | "Royal Flush";
