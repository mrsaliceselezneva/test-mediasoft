import './Main.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import GameBlock from '../../components/GameBlock/GameBlock';

import gameImg from '../../components/assets/img/logo.png';

const gamesList = [
    {
        name: 'привет',
        img: gameImg,
        price: 100,
    },
    {
        name: 'kek',
        img: gameImg,
        price: 1000,
    },
    {
        name: 'игра с очень большим названием',
        img: gameImg,
        price: 10,
    },
    {
        name: 'kek',
        img: gameImg,
        price: 10000,
    },
];

function Main() {
    return (
        <div>
            <Header />
            <div className="main">
                <Sidebar />
                <div className="games-list">
                    {gamesList.map((game) => (
                        <GameBlock name={game.name} img={game.img} price={game.price} />
                    ))}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Main;
