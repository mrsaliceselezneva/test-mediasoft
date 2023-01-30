import styles from './Sort.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setNameSort, setTypeSort, setOrderSort } from '../../redux/slices/sortSlice';

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Sort() {
    const dispatch = useDispatch();
    const { nameSort } = useSelector((state) => state.sortReducer);
    const [showPopup, setShowPopup] = useState(false);

    const sortRef = useRef();

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

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            console.log(event.path.includes(sortRef.current));
            if (!event.path.includes(sortRef.current)) {
                setShowPopup(false);
            }
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sort} ref={sortRef}>
                Сортировать по:
                <div onClick={() => setShowPopup(!showPopup)} className={styles.sort__now}>
                    {nameSort}
                    {showPopup ? (
                        <FiChevronUp className={styles.sort__now__fichevron} />
                    ) : (
                        <FiChevronDown className={styles.sort__now__fichevron} />
                    )}
                </div>
                {showPopup && (
                    <ul className={styles.sort__popup}>
                        {sortList.map((element, id) => (
                            <li
                                key={element.nameSort}
                                onClick={() => {
                                    setShowPopup(!showPopup);
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
