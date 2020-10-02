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
          <Link to='filmler'>Filmler</Link>
        </li>
        <li className='nav-item'>
          <Link to='haberler'>Haberler</Link>
        </li>
        <li className='nav-item'>
          <Link to='salonlar'>Salonlar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
