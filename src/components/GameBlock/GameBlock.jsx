import './GameBlock.scss';

import { FiShoppingCart } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';

function GameBlock(props) {
    return (
        <div className="game-block">
            <img
                className="game-block-img"
                src={props.img}
                alt={'здесть скоро будет изображение'}
            />
            <div className="game-block-title">{props.name}</div>
            <div className="game-block-price">
                <FaCartPlus className="game-block-add-cart" />
                {props.price} ₽
            </div>
        </div>
    );
}

export default GameBlock;
