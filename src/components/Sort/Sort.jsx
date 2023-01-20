import './Sort.scss';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Sort() {
    const [selectSort, setSelectSort] = useState('возрастанию цены');
    const [showPoopup, setShowPopup] = useState(false);

    const filterList = [
        'возрастанию цены',
        'убыванию цены',
        'названию от А до Я',
        'названию от Я до А',
    ];

    return (
        <div className="sort">
            Сортировать по:
            <div onClick={() => setShowPopup(!showPoopup)} className="sort__now">
                {selectSort}
                {showPoopup ? (
                    <FiChevronUp className="sort__now__fichevron" />
                ) : (
                    <FiChevronDown className="sort__now__fichevron" />
                )}
            </div>
            {showPoopup && (
                <ul className="sort__popup">
                    {filterList.map((element, id) => (
                        <li
                            key={element}
                            onClick={() => {
                                setShowPopup(!showPoopup);
                                setSelectSort(element);
                            }}
                            className="sort__popup__element">
                            {element}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Sort;
