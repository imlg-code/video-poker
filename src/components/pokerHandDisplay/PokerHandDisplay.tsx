import type { PokerHand } from "../../types/game";
type PokerHandDisplayProps={
    hand: PokerHand | null;
};

export default function PokerHandDisplay({hand}: PokerHandDisplayProps){
    return(
        <div className="poker-hand">
        <p>Poker hand: {hand ?? "No hand yet."}</p>
        </div>
    )
}