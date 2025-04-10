import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white text-black shadow-md p-4">
      <ul className="flex space-x-4 text-lg font-semibold">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;


