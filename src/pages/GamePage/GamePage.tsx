import { usePlayerStore } from "../../store/playerStore.ts";
import { useGameStore } from "../../store/gameStore.ts";
import TotalCoins from "../../components/totalCoins/TotalCoins.tsx";
import CurrentBet from "../../components/currentBet/CurrentBet.tsx";
import PokerHandDisplay from "../../components/pokerHandDisplay/PokerHandDisplay.tsx";
import BetControls from "../../components/betControls/BetControls.tsx";
import Card from "../../components/card/Card.tsx";
//Viser spillsiden med navn og coins for den valgte spilleren
function GamePage() {
  const players = usePlayerStore((state) => state.players);
  const selectedPlayerId = usePlayerStore((state) => state.selectedPlayerId);
  //Finner spiller med valgt id eller gir undefined hvis den ikke har noen match
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId,
  );
  const currentBet = useGameStore((state) => state.currentBet);
  const pokerHand = useGameStore((state) => state.pokerHand);
  const hand = useGameStore((state) => state.hand);
  return (
    <main>
      <h1>Video Poker</h1>
      {selectedPlayer ? (
        <>
          <p>Player: {selectedPlayer.name}</p>
          <TotalCoins coins={selectedPlayer.coins} />
          <CurrentBet bet={currentBet} />
          <BetControls coins={selectedPlayer.coins} />
         <div className="card-table">
    <div className="hand">
        {Array.from({ length: 5 }, (_, index) => (
            <div className="card-slot" key={index}>
                {hand[index] && <Card card={hand[index]} faceDown={false} />}
            </div>
        ))}
    </div>

    <div className="deck-stack" role="img" aria-label="Draw pile">
        <div className="card card-back" aria-hidden="true">
            <span className="card-back-top">╔</span>
            <span className="card-back-bottom">╝</span>
        </div>
    </div>
</div>
          <PokerHandDisplay hand={pokerHand} />
        </>
      ) : (
        <p>Please choose a player on the players page.</p>
      )}
    </main>
  );
}
export default GamePage;
