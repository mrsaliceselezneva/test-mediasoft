import './CartLogo.scss';
import { FiShoppingCart } from 'react-icons/fi';

function CartLogo() {
    return (
        <div className="background-cart-logo">
            <FiShoppingCart className="cart-logo" />
        </div>
    );
}

export default CartLogo;
