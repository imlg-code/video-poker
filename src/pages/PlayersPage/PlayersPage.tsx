import { useState } from "react";
import { usePlayerStore } from "../../store/playerStore";
import { useNavigate } from "react-router";

//Viser spillersiden der man kan opprette eller velge spiller
function PlayersPage() {
  const addPlayer = usePlayerStore((state) => state.addPlayer);
  const players = usePlayerStore((state) => state.players);
  const [name, setName] = useState("");
  const trimName = name.trim();
  const selectPlayer = usePlayerStore((state) => state.selectPlayer);
  const selectedPlayerId = usePlayerStore((state) => state.selectedPlayerId);
  const navigate = useNavigate();

  //Oppretter en spiller med navnet fra inputfelt
  //Avbryter hvis navnet er tomt eller bare inneholder mellomrom
  function handleCreatePlayer() {
    if (trimName === "") {
      return;
    }
    addPlayer(trimName);
    setName("");
  }
  //Velger spiller med id og navigerer til spillsiden
  function handleSelectPlayer(playerId: string) {
    selectPlayer(playerId);
    navigate("/game");
  }
  return (
    <main>
       <form 
       className="player-form"
        onSubmit={(event) => {
          //Hindrer at nettleseren laster siden på nytt når skjemaet sendes inn
          event.preventDefault();
          handleCreatePlayer();
        }}
      >
      <label htmlFor="player-name">Player name: </label>
      <input
        id="player-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
     
        <button type="submit">Create player</button>
      </form>
      <h2>Players</h2>
      <ul className="player-list">
        {players.map((player) => (
          <li key={player.id}>
            <button
              type="button"
              onClick={() => handleSelectPlayer(player.id)}
              aria-pressed={selectedPlayerId === player.id}
            >
            {player.name} - {player.coins} coins
            {selectedPlayerId === player.id &&(
              <span aria-hidden="true"> ✓</span>)}
            </button>
          </li>
        ))}
      </ul>
      <p>Choose an excisting player, or add a new player.</p>
    </main>
  );
}

export default PlayersPage;
