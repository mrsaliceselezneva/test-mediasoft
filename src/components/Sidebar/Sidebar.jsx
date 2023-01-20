import React, { useState } from 'react';

import styles from './Sidebar.module.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

const sidebarList = ['Все', 'Карточные', 'Для компании', 'Для двоих'];

function Sidebar() {
    const [selectGameType, setSelectGameType] = useState(0);

    return (
        <div className={styles.sidebar}>
            {sidebarList.map((element, id) => (
                <SidebarBlock
                    key={element}
                    changeSelectGameType={() => setSelectGameType(id)}
                    gameType={element}
                    select={selectGameType === id}
                />
            ))}
        </div>
    );
}

export default Sidebar;
