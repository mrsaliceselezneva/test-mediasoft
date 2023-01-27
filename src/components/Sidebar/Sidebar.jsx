import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

import { SearchContext } from '../../App';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

function Sidebar() {
    const [categories, setCategories] = useState([]);

    const { setSearchValue } = useContext(SearchContext);

    const dispatch = useDispatch();
    const { selectFilter } = useSelector((state) => state.filterReducer);

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
                        setSearchValue('');
                        dispatch(setFilter(category));
                    }}
                    gameType={category}
                    select={selectFilter === category}
                />
            ))}
        </div>
    );
}

export default Sidebar;
