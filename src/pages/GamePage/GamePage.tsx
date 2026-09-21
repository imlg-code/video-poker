import {usePlayerStore} from "../../store/playerStore.ts"
import {useGameStore}from "../../store/gameStore.ts"
import TotalCoins from "../../components/totalCoins/TotalCoins.tsx";
import CurrentBet from "../../components/currentBet/CurrentBet.tsx";
import PokerHandDisplay from "../../components/pokerHandDisplay/PokerHandDisplay.tsx";
//Viser spillsiden med navn og coins for den valgte spilleren
function GamePage() {
  const players = usePlayerStore((state) => state.players);
  const selectedPlayerId = usePlayerStore((state) => state.selectedPlayerId);
  //Finner spiller med valgt id eller gir undefined hvis den ikke har noen match
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId
    
);
const currentBet = useGameStore((state) => state.currentBet);
const pokerHand = useGameStore((state) => state.pokerHand);
  return (
    <main>
      <h1>Video Poker</h1>
     {selectedPlayer ? (
    <>
        <p>Player: {selectedPlayer.name}</p>
        <TotalCoins coins={selectedPlayer.coins} />
    </>
) : (
    <p>Please choose a player on the players page.</p>
)}
<CurrentBet bet = {currentBet}/>
<PokerHandDisplay hand={pokerHand}/>
    </main>
  );
}
export default GamePage;
