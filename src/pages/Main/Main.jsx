import './Main.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import GameBlock from '../../components/GameBlock/GameBlock';
import Sort from '../../components/Sort/Sort';

const gamesList = [
    {
        name: 'Ужас Аркхэма. Карточная игра',
        img: 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Ujas_Arkhema/UA_cardgame/JKI_UjasArkhama-1000x416-wm.jpg',
        price: 100,
    },
    {
        name: 'Эпичные схватки боевых магов: Крутагидон. Экстремально острый чипсихоз',
        img: 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Shvatki_Magov/Krutagidon_Chipsihoz/HG/krutogidon_extrimalno_ostriy_chipsio-1000x416-wm.jpg',
        price: 1000,
    },
    {
        name: 'Цитадели Классика',
        img: 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Citadels_Classic/citadels_classic_00-1000x416-wm.jpg',
        price: 10,
    },
    {
        name: 'Мачи Коро',
        img: 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Machi_Koro/2021/Machi-Koro_00-1000x416-wm.jpg',
        price: 10000,
    },
];

function Main() {
    return (
        <>
            <Header />
            <div className="main">
                <Sort />
                <div className="main__body">
                    <Sidebar />
                    <div className="games-list">
                        {gamesList.map((game) => (
                            <GameBlock
                                key={game.name}
                                name={game.name}
                                img={game.img}
                                price={game.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Main;
