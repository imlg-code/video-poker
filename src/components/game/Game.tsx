import { usePlayerStore } from "../../store/playerStore.ts";
import { useGameStore } from "../../store/gameStore.ts";
import TotalCoins from "../../components/totalCoins/TotalCoins.tsx";
import CurrentBet from "../../components/currentBet/CurrentBet.tsx";
import PokerHandDisplay from "../../components/pokerHandDisplay/PokerHandDisplay.tsx";
import BetControls from "../../components/betControls/BetControls.tsx";
import Card from "../../components/card/Card.tsx";
import RoundButton from "../../components/roundButton/RoundButton.tsx";

//Viser spilleren, kortene og kontroller for spillet
function Game() {
  const players = usePlayerStore((state) => state.players);
  const selectedPlayerId = usePlayerStore((state) => state.selectedPlayerId);

  //Finner valgt spiller eller undefined hvis ingen matcher
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId,
  );

  const currentBet = useGameStore((state) => state.currentBet);
  const pokerHand = useGameStore((state) => state.pokerHand);
  const hand = useGameStore((state) => state.hand);
  const holdIndexes = useGameStore((state) => state.holdIndexes);
  const changeHold = useGameStore((state) => state.changeHold);
  const phase = useGameStore((state) => state.phase);
  const payout = useGameStore((state) => state.payout);

  return (
    <>
      

      {selectedPlayer ? (
        <>
          <div className="game-info">
            <p>Player: {selectedPlayer.name}</p>
            <CurrentBet bet={currentBet} />
            <TotalCoins coins={selectedPlayer.coins} />
          </div>

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
                      disabled={phase !== "draw"}
                    >
                      {holdIndexes.includes(index) ? "Keep ✓" : "Keep"}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="round-controls">
              <div className="round-result">
                <PokerHandDisplay hand={pokerHand} />

                {phase === "finished" && (
                  <p className="payout-result" role="status">
                    {payout > 0
                      ? `Payout: ${payout} coins`
                      : "No payout this round."}
                  </p>
                )}
              </div>

              <BetControls coins={selectedPlayer.coins} />

              <p className="keep-info">
                Cards kept
                <span>{holdIndexes.length}/5</span>
              </p>

              <div className="deck-controls">
                <div
                  className="deck-stack card card-back"
                  aria-label="Draw pile"
                  role="img"
                >
                  <span className="card-back-top" aria-hidden="true">
                    ╔
                  </span>
                  <span className="card-back-bottom" aria-hidden="true">
                    ╝
                  </span>
                </div>

                <RoundButton coins={selectedPlayer.coins} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Please choose a player on the Players page.</p>
      )}
    </>
  );
}

export default Game;