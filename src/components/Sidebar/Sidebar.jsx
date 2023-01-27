import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

function Sidebar() {
    const [selectCategory, setSelectCategory] = useState(0);
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();

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
                    changeSelectGameType={() => {
                        setSelectCategory(id);
                        dispatch(setFilter(category));
                    }}
                    gameType={category}
                    select={selectCategory === id}
                />
            ))}
        </div>
    );
}

export default Sidebar;
