import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ onShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src="/img/menu.png" alt="Menu" />
      </button>
      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <ul>
          <li><img src="/img/nav-left.png" alt="Back" />Back</li>
          <li><img className="sett" src="/img/preferences.png" alt="Settings" /></li>
          <li>Playstation</li>
          <li>Xbox</li>
        </ul>
      </nav>
      <button className="cart-button" onClick={onShowCart}>
        <img src="/img/shopping-cart.png" alt="Cart" />
      </button>
    </header>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
