import './Main.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/Sidebar/Sidebar';
import GameBlock from '../../components/GameBlock/GameBlock';
import Skeleton from '../../components/GameBlock/Skeleton';
import Sort from '../../components/Sort/Sort';

function Main() {
    const [gamesList, setGamesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items`).then((response) => {
            setTimeout(() => {
                setGamesList(response.data);
                setIsLoading(false);
            }, 1000);
        });
    }, []);

    return (
        <div className="main">
            <Sort />
            <div className="main__body">
                <Sidebar />
                <div className="games-list">
                    {isLoading
                        ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
                        : gamesList.map((game) => (
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
    );
}

export default Main;
