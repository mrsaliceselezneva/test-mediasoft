import styles from './Search.module.scss';

import { SearchContext } from '../../App';
import { useContext, useState, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

import { FiSearch } from 'react-icons/fi';

function Search() {
    const { setSearchValue } = useContext(SearchContext);
    const { innerWidth: winWidth } = window;

    const [search, setSearch] = useState('');
    const ref = useRef(null);

    const dispatch = useDispatch();

    if (winWidth > 1030)
        return (
            <form className={styles.search}>
                <input
                    ref={ref}
                    onChange={(event) => setSearch(event.target.value)}
                    className={styles.search__input}
                    type="search"
                    placeholder="Поиск..."
                />
                <div className={styles.search__background_fisearch}>
                    <FiSearch
                        onClick={() => {
                            setSearchValue(search);
                            dispatch(setFilter('Все'));
                            ref.current.value = '';
                        }}
                        className={styles.search__background_fisearch__fisearch}
                    />
                </div>
            </form>
        );
    else
        return (
            <div className={styles.background_fisearch2}>
                <FiSearch className={styles.fisearch2} />
            </div>
        );
}

export default Search;
