import { NavLink } from "react-router";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
        <NavLink to="/">Game</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/rules">Rules</NavLink>
    </nav>);
}
    export default Navigation;