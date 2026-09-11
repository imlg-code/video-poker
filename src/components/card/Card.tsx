import type { PlayingCard } from "../../types/game.ts";
import "./Card.css";
type CardProps = {
  card: PlayingCard;
};
const suitSymbols = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠",
};
export default function Card({ card }: CardProps) {
    return(
        <div className="card">
        <span className="card-rank">{card.rank}</span>
        <span className="card-suit">{suitSymbols[card.suit]}</span>
        </div>
    );
}