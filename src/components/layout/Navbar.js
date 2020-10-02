import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>Ana Sayfa</Link>
        </li>
        <li className='nav-item'>
          <Link to='/films'>Filmler</Link>
        </li>
        <li className='nav-item'>
          <Link to='/news'>Haberler</Link>
        </li>
        <li className='nav-item'>
          <Link to='/theathers'>Salonlar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
