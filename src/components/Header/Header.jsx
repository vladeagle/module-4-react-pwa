import { NavLink } from "react-router-dom";
import { AuthStatus } from "@components/AuthStatus";

export function Header() {

  return (
    <div className="app__header">
      <div className="header__container">
        <ul className="header__menu">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Герои</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Локации</NavLink>
          </li>
          <li>
            <NavLink to="/episodes">Эпизоды</NavLink>
          </li>
        </ul>
        <div className="header__user">
          <AuthStatus />
        </div>
      </div>
    </div>
  );
}
