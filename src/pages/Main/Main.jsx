import styles from './Main.module.scss';

import React, { useEffect, useState, useLayoutEffect } from 'react';
import axios from 'axios';

import Sidebar from '../../components/Sidebar/Sidebar';
import GameBlock from '../../components/GameBlock/GameBlock';
import Skeleton from '../../components/GameBlock/Skeleton';
import Sort from '../../components/Sort/Sort';
import Pagination from '../../components/Pagination/Pagination';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size[0];
}

function Main() {
    const [gamesList, setGamesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const width = useWindowSize();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items`).then((response) => {
            setTimeout(() => {
                setGamesList(response.data);
                setIsLoading(false);
            }, 1000);
        });
    }, []);

    return (
        <div className={styles.main}>
            <Sort />
            <div className={styles.main__body}>
                {width > 1030 && <Sidebar />}
                <div className={styles.games_list}>
                    {isLoading
                        ? [...new Array(12)].map((_, id) => <Skeleton key={id} />)
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
            <Pagination />
        </div>
    );
}

export default Main;
