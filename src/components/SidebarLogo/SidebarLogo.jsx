import styles from './SidebarLogo.module.scss';

import { CgMenu } from 'react-icons/cg';

function SidebarLogo() {
    return (
        <div className={styles.background_logo}>
            <CgMenu className={styles.logo} />
        </div>
    );
}

export default SidebarLogo;
