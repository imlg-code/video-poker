import { useGameStore } from "../../store/gameStore";
type RoundButtonProp = {
  coins: number;
};
export default function RoundButton({ coins }: RoundButtonProp) {
  const currentBet = useGameStore((state) => state.currentBet);
  const phase = useGameStore((state) => state.phase);
  const dealCards = useGameStore((state) => state.dealCards);
  const drawCards = useGameStore((state) => state.drawCards);
  const newRound = useGameStore((state) => state.newRound);

  if (phase === "finished") {
    return (
      <button type="button" onClick={newRound}>
        New round
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={phase === "draw" ? drawCards : dealCards}
      disabled={
        phase === "ready" &&
        ((currentBet !== 2 && currentBet !== 5) || currentBet > coins)
      }
    >
      {phase === "draw" ? "Draw" : "Deal"}
    </button>
  );
}
