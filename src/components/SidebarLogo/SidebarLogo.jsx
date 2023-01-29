import styles from './SidebarLogo.module.scss';
import { CgMenu } from 'react-icons/cg';

import { useContext } from 'react';
import SidebarModal from '../SidebarModal/SidebarModal';
import { ShowSidebarModalContext } from '../../App';

function SidebarLogo() {
    const { setShowSidebarModal } = useContext(ShowSidebarModalContext);

    return (
        <div className={styles.background_logo}>
            <SidebarModal />
            <CgMenu className={styles.logo} onClick={() => setShowSidebarModal(true)} />
        </div>
    );
}

export default SidebarLogo;
