import styles from './SearchModal.module.scss';

import React, { useState, useContext, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';

import { SearchContext } from '../../App';
import { ShowSearchModalContext } from '../../App';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

function SearchModal() {
    const [search, setSearch] = useState('');
    const ref = useRef(null);

    const { setSearchValue } = useContext(SearchContext);
    const { showSearchModal, setShowSearchModal } = useContext(ShowSearchModalContext);

    const dispatch = useDispatch();

    if (showSearchModal) {
        return (
            <div className={styles.modal} onClick={() => setShowSearchModal(false)}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>Поиск</div>
                    <div className={styles.modal__content__body}>
                        <div
                            className={styles.search}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    setSearchValue(search);
                                    setShowSearchModal(false);
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
                                        setShowSearchModal(false);
                                        dispatch(setFilter('Все'));
                                        ref.current.value = '';
                                    }}
                                    className={styles.search__background_fisearch__fisearch}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__button}
                            onClick={() => setShowSearchModal(false)}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default SearchModal;
