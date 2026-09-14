import type { PlayingCard } from "../../types/game.ts";
import "./Card.css";
type CardProps = {
  card: PlayingCard;
  faceDown?: boolean;
};
const suitSymbols = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠",
};
const suitNames = {
    hearts: "hjerter",
    diamonds: "ruter",
    spades: "spar",
    clubs: "kløver"
} 
 const rankNames = {
        A: "ess",
        K: "konge",
        Q: "dame", 
        J: "knekt"
    }
export default function Card({ card, faceDown = false }: CardProps) {
  const rankName = 
    card.rank === "A" ||
    card.rank === "K" ||
    card.rank === "Q" ||
    card.rank === "J" 
    ?rankNames [card.rank]
    : card.rank;

  
    if(faceDown) {
        return(
            <div
            role="img"
            aria-label="kort med baksiden opp" 
            className="card card-back">
                <span className="card-back-top" aria-hidden="true">╔</span>
                <span className="card-back-bottom" aria-hidden="true">╝</span>
            </div>
        );
    }
    return(
        <div
        role="img"
        aria-label={`${suitNames[card.suit]} ${rankName}`}
                 className="card">
        <span className="card-rank" aria-hidden="true">{card.rank}</span>
        <span className="card-suit" aria-hidden="true">{suitSymbols[card.suit]}</span>
        </div>
    );
}