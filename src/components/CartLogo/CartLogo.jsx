import './CartLogo.scss';
import { FiShoppingCart } from 'react-icons/fi';

function CartLogo() {
    return (
        <a className="background-cart-logo" href={`${process.env.REACT_APP_URL}/cart`}>
            <FiShoppingCart className="cart-logo" />
        </a>
    );
}

export default CartLogo;
