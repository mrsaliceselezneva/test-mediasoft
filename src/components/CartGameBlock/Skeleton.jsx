import styles from './GameBlock.module.scss';

import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        className={styles.game_block}
        speed={2}
        width={320}
        height={420}
        viewBox="0 0 280 420"
        backgroundColor="#dcdcdc"
        foregroundColor="#ecebeb">
        <rect x="2" y="0" rx="20" ry="20" width="275" height="255" />
        <rect x="2" y="275" rx="20" ry="20" width="275" height="90" />
        <rect x="150" y="380" rx="20" ry="20" width="125" height="40" />
    </ContentLoader>
);

export default Skeleton;
