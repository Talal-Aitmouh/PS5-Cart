import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ onShowCart }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><img src="/img/nav-left.png" alt="Back" />Back</li>
          <li><img className="sett" src="/img/preferences.png" alt="Settings" /></li>
          <li>Playstation</li>
          <li>Xbox</li>
        </ul>
      </nav>
      <button onClick={onShowCart}><img src="/img/shopping-cart.png" alt="Cart" /></button>
    </header>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
