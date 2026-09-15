import {usePlayerStore} from "../../store/playerStore.ts"

//Viser spillsiden med navn og coins for den valgte spilleren
function GamePage() {
  const players = usePlayerStore((state) => state.players);
  const selectedPlayerId = usePlayerStore((state) => state.selectedPlayerId);
  //Finner spiller med valgt id eller gir undefined hvis den ikke har noen match
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId
);
  return (
    <main>
      <h1>Video Poker</h1>
      {selectedPlayer ? (
      <p> Player: {selectedPlayer.name} - {selectedPlayer.coins} coins</p>
      ): (
      <p>Please choose a player on the players page.</p>
      )}
    </main>
  );
}
export default GamePage;
