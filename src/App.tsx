import { Route, Routes } from "react-router";
import GamePage from "./pages/GamePage/GamePage.tsx";
import PlayersPage from "./pages/PlayersPage/PlayersPage.tsx";
import RulesPage from "./pages/RulesPage/RulesPage.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PlayersPage />} />
        <Route path="/game" element={<GamePage/>}/>
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </>
  );
}
export default App;