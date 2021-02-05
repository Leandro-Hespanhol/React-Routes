import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/Home">Início</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param/legal">Param #02</Link>
        </li>
        <li>
          <Link to="/About">Sobre</Link>
        </li>
        <li>
          <Link to="/NãoExiste">NãoExiste</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
