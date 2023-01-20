import './Cart.scss';

function Cart() {
    return (
        <div className="cart">
            <div className="cart__empty">
                <div className="cart__empty__text">Корзина пуста</div>
                <div className="cart__empty__text">Выберите игры и возвращайтесь</div>
                <a href="/">
                    <button className="cart__empty__button">За покупками</button>
                </a>
            </div>
            <div className="cart__fill"></div>
        </div>
    );
}

export default Cart;
