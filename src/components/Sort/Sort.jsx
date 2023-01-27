import styles from './Sort.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setNameSort, setTypeSort, setOrderSort } from '../../redux/slices/sortSlice';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Sort() {
    const dispatch = useDispatch();
    const { nameSort } = useSelector((state) => state.sortReducer);
    const [showPoopup, setShowPopup] = useState(false);

    const sortList = [
        {
            nameSort: '-------------------',
            typeSort: 'id',
            orderSort: 'asc',
        },
        {
            nameSort: 'возрастанию цены',
            typeSort: 'price',
            orderSort: 'asc',
        },
        {
            nameSort: 'убыванию цены',
            typeSort: 'price',
            orderSort: 'desc',
        },
        {
            nameSort: 'названию от А до Я',
            typeSort: 'name',
            orderSort: 'asc',
        },
        {
            nameSort: 'названию от Я до А',
            typeSort: 'name',
            orderSort: 'desc',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.sort}>
                Сортировать по:
                <div onClick={() => setShowPopup(!showPoopup)} className={styles.sort__now}>
                    {nameSort}
                    {showPoopup ? (
                        <FiChevronUp className={styles.sort__now__fichevron} />
                    ) : (
                        <FiChevronDown className={styles.sort__now__fichevron} />
                    )}
                </div>
                {showPoopup && (
                    <ul className={styles.sort__popup}>
                        {sortList.map((element, id) => (
                            <li
                                key={element.nameSort}
                                onClick={() => {
                                    setShowPopup(!showPoopup);
                                    dispatch(setNameSort(element.nameSort));
                                    dispatch(setTypeSort(element.typeSort));
                                    dispatch(setOrderSort(element.orderSort));
                                }}
                                className={styles.sort__popup__element}>
                                {element.nameSort}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Sort;
