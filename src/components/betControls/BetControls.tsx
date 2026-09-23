import { useGameStore } from "../../store/gameStore";
type BetControlProps = {
  coins: number;
};

//Viser innsatsen og låser den mens runden går. Sperrer innsats når spiller ikke har mer coins
export default function BetControls({ coins }: BetControlProps) {
  const currentBet = useGameStore((state) => state.currentBet);
  const setBet = useGameStore((state) => state.setBet);
  const phase = useGameStore((state) => state.phase);
  const dealCards = useGameStore((state) => state.dealCards);
  return (
    <fieldset className="bet-container" disabled={phase === "draw"}>
      <legend>Choose your bet</legend>
<div className="bet-btns">
      <button
        type="button"
        onClick={() => setBet(2)}
        disabled={coins < 2}
        aria-pressed={currentBet === 2}
      >
        Bet 2
      </button>

      <button
        type="button"
        onClick={() => setBet(5)}
        disabled={coins < 5}
        aria-pressed={currentBet === 5}
      >
        Bet 5
      </button>
      <button
        type="button"
        onClick={dealCards}
        disabled={(currentBet !== 2 && currentBet !== 5) || currentBet > coins}
      >
        Deal
      </button>
      </div>
    </fieldset>
  );
}
