import { Link } from 'react-router-dom';
import * as Proptypes from 'prop-types';
import PropTypes from 'prop-types';
import CoffeeLogo from '../images/logo.svg';
import CartIcon from '../images/cart.svg';
import './Header.css';

function Header({ cart }) {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Café</h1>
      </Link>
      <div className="menu">
        <Link to="#todo" />
        <img src={CartIcon} alt="Cart" />
        <div className="badge">{cartQuantity}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.arrayOf(Proptypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default Header;
