import styles from './Search.module.scss';

import { SearchContext, ShowSearchModalContext } from '../../App';
import { useContext, useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

import { FiSearch } from 'react-icons/fi';

import SearchModal from '../SearchModal/SearchModal';

function Search() {
    const { setSearchValue } = useContext(SearchContext);
    const { setShowSearchModal } = useContext(ShowSearchModalContext);
    const { innerWidth: winWidth } = window;

    const [search, setSearch] = useState('');
    const ref = useRef(null);

    const dispatch = useDispatch();

    if (winWidth > 1030)
        return (
            <div
                className={styles.search}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        setSearchValue(search);
                        dispatch(setFilter('Все'));
                        ref.current.value = '';
                    }
                }}>
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
            </div>
        );
    else
        return (
            <div className={styles.background_fisearch2} onClick={() => setShowSearchModal(true)}>
                <SearchModal />
                <FiSearch className={styles.fisearch2} />
            </div>
        );
}

export default Search;
