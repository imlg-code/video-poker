import type { PokerHand } from "../../types/game";
type PokerHandDisplayProps={
    hand: PokerHand | null;
};

export default function PokerHandDisplay({hand}: PokerHandDisplayProps){
    return(
        <p>Poker hand: {hand ?? "No hand yet."}</p>
    )
}