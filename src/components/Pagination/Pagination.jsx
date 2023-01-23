import styles from './Pagination.module.scss';

import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__pagination}>
                <div className={styles.wrapper__pagination__arrow}>
                    <FiChevronsLeft />
                </div>
                <div className={styles.wrapper__pagination__arrow}>
                    <FiChevronLeft />
                </div>
                <div className={styles.wrapper__pagination__pages}>
                    <div className={styles.wrapper__pagination__pages__block}>1</div>
                    <div className={styles.wrapper__pagination__pages__block}>2</div>
                    <div className={styles.wrapper__pagination__pages__select_block}>3</div>
                    <div className={styles.wrapper__pagination__pages__block}>4</div>
                    <div className={styles.wrapper__pagination__pages__block}>5</div>
                </div>
                <div className={styles.wrapper__pagination__arrow}>
                    <FiChevronRight />
                </div>
                <div className={styles.wrapper__pagination__arrow}>
                    <FiChevronsRight />
                </div>
            </div>
        </div>
    );
}

export default Pagination;
