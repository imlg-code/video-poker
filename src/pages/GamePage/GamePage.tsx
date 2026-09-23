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
  const holdIndexes = useGameStore((state) => state.holdIndexes);
  const changeHold = useGameStore((state) => state.changeHold);
  const phase = useGameStore((state) => state.phase);
 
  return (
    <main>
      <h1>Video Poker</h1>
      {selectedPlayer ? (
        <>
          <p>Player: {selectedPlayer.name}</p>
          <TotalCoins coins={selectedPlayer.coins} />
          <CurrentBet bet={currentBet} />
          
          <div className="card-table">
            <div className="hand">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <div className="card-slot">
                    {hand[index] && (
                      <Card card={hand[index]} faceDown={false} />
                    )}
                  </div>

                  {hand[index] && (
                    <button
                    className="keep-btn"
                      type="button"
                      onClick={() => changeHold(index)}
                      aria-pressed={holdIndexes.includes(index)}
                      aria-label={`Keep card ${index + 1}`}
                      disabled={
                        phase !== "draw"
                      }
                    >
                      {holdIndexes.includes(index) ? "Keep ✓" : "Keep"}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="deck-stack" role="img" aria-label="Draw pile">
              <div className="card card-back" aria-hidden="true">
                <span className="card-back-top">╔</span>
                <span className="card-back-bottom">╝</span>
              </div>
            </div>
            <div className="action-row">
            
            <p className="keep-info">
                Keep as many cards as you want.
                <span>{holdIndexes.length}/5</span>
              </p>
              <BetControls coins={selectedPlayer.coins} />
          
          <PokerHandDisplay hand={pokerHand} />
          </div>
          </div>
        </>
      ) : (
        <p>Please choose a player on the players page.</p>
      )}
      
    </main>
  );
}
export default GamePage;
