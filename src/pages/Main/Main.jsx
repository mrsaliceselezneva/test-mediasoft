import styles from './Main.module.scss';

import React, { useEffect, useState, useLayoutEffect, useContext } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changePage, changeNumPages } from '../../redux/slices/paginationSlice';

import { SearchContext } from '../../App';
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
    const { selectPage, numPages, firstPage, mediumPage, lastPage, showPages } = useSelector(
        (state) => state.paginationReducer,
    );
    const dispatch = useDispatch();

    const { searchValue } = useContext(SearchContext);

    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const width = useWindowSize();

    console.log('---------');
    console.log('firstPage=', firstPage);
    console.log('mediumPage=', mediumPage);
    console.log('lastPage=', lastPage);
    console.log('selectPage=', selectPage);
    console.log('numPages=', numPages);
    console.log('showPages=', showPages);

    useEffect(() => {
        setIsLoading(true);
        if (searchValue) {
            axios
                .get(`${process.env.REACT_APP_API_URL}/items?search=${searchValue}`)
                .then((response) => {
                    setTimeout(() => {
                        setGames(response.data);
                        setIsLoading(false);
                    }, 1000);
                });
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/items`).then((response) => {
                dispatch(changeNumPages(Math.ceil(response.data.length / 6)));
            });
            axios
                .get(`${process.env.REACT_APP_API_URL}/items?page=${selectPage}&limit=6`)
                .then((response) => {
                    setTimeout(() => {
                        setGames(response.data);
                        setIsLoading(false);
                    }, 1000);
                });
        }
    }, [searchValue, selectPage]);

    if (games.length === 0 && !isLoading)
        return (
            <div className={styles.main}>
                <Sort />
                <div className={styles.main__body}>
                    {width > 1030 && <Sidebar />}
                    <div className={styles.main__body__not_found}>
                        По вашему запросу ничего не найдено...
                        <img
                            className={styles.main__body__not_found__img}
                            src="img/dragon_not_found.png"
                        />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className={styles.main}>
                <Sort />
                <div className={styles.main__body}>
                    {width > 1030 && <Sidebar />}
                    <div className={styles.games_list}>
                        {isLoading
                            ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
                            : games.map((game) => (
                                  <GameBlock
                                      key={game.name}
                                      name={game.name}
                                      img={game.img}
                                      price={game.price}
                                  />
                              ))}
                    </div>
                </div>
                <Pagination selectPage={selectPage} numPages={numPages} />
            </div>
        );
}

export default Main;
