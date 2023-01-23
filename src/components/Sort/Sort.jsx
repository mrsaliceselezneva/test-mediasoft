import styles from './Sort.module.scss';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Sort() {
    const [selectSort, setSelectSort] = useState('возрастанию цены');
    const [showPoopup, setShowPopup] = useState(false);

    const filterList = [
        {
            name: 'возрастанию цены',
            sortProperty: 'price',
            orderPropert: 'asc',
        },
        {
            name: 'убыванию цены',
            sortProperty: 'price',
            orderPropert: 'desc',
        },
        {
            name: 'названию от А до Я',
            sortProperty: 'name',
            orderPropert: 'asc',
        },
        {
            name: 'названию от Я до А',
            sortProperty: 'name',
            orderPropert: 'desc',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.sort}>
                Сортировать по:
                <div onClick={() => setShowPopup(!showPoopup)} className={styles.sort__now}>
                    {selectSort}
                    {showPoopup ? (
                        <FiChevronUp className={styles.sort__now__fichevron} />
                    ) : (
                        <FiChevronDown className={styles.sort__now__fichevron} />
                    )}
                </div>
                {showPoopup && (
                    <ul className={styles.sort__popup}>
                        {filterList.map((element, id) => (
                            <li
                                key={element.name}
                                onClick={() => {
                                    setShowPopup(!showPoopup);
                                    setSelectSort(element.name);
                                }}
                                className={styles.sort__popup__element}>
                                {element.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Sort;
