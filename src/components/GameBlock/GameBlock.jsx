import './GameBlock.scss';

import { FaCartPlus } from 'react-icons/fa';

function GameBlock(props) {
    return (
        <div className="game-block">
            <img
                className="game-block__img"
                src={props.img}
                alt={'здесть скоро будет изображение'}
            />
            <div className="game-block__title">{props.name}</div>
            <div className="game-block__price">
                <FaCartPlus className="game-block__price__add-cart" />
                {props.price} ₽
            </div>
        </div>
    );
}

export default GameBlock;
