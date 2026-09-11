import Card from "../../components/card/Card.tsx";


function GamePage() {
  return (
    <main>
      <Card card={{ suit: "hearts", rank: "A" }} />
      <h1>Video Poker</h1>
      <p>Her skal selve spillet være.</p>
    </main>
  );
}
export default GamePage;
