import styles from './SidebarModal.module.scss';

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { SearchContext } from '../../App';
import { ShowSidebarModalContext } from '../../App';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

function SidebarModal(props) {
    const [categories, setCategories] = useState([]);

    const { setSearchValue } = useContext(SearchContext);
    const { showSidebarModal, setShowSidebarModal } = useContext(ShowSidebarModalContext);

    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.filterReducer);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((response) => {
            setCategories(response.data);
        });
    }, []);

    if (showSidebarModal) {
        return (
            <div className={styles.modal} onClick={() => setShowSidebarModal(false)}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>Выберите категорию</div>
                    <div className={styles.modal__content__body}>
                        {categories.map((category, id) => (
                            <SidebarBlock
                                key={category}
                                changeSelectGameType={() => {
                                    setSearchValue('');
                                    dispatch(setFilter(category));
                                    setShowSidebarModal(false);
                                }}
                                gameType={category}
                                select={selectFilter === category}
                            />
                        ))}
                    </div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__button}
                            onClick={() => setShowSidebarModal(false)}>
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

export default SidebarModal;
