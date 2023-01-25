import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

function Sidebar() {
    const [selectCategory, setSelectCategory] = useState(0);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((response) => {
            setCategories(response.data);
        });
    }, []);

    return (
        <div className={styles.sidebar}>
            {categories.map((category, id) => (
                <SidebarBlock
                    key={category}
                    changeSelectGameType={() => setSelectCategory(id)}
                    gameType={category}
                    select={selectCategory === id}
                />
            ))}
        </div>
    );
}

export default Sidebar;
