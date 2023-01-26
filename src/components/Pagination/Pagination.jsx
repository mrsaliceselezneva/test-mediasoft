import styles from './Pagination.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
    changePage,
    changeFirstPage,
    changeMediumPage,
    changeLastPage,
} from '../../redux/slices/paginationSlice';

import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination() {
    const dispatch = useDispatch();
    const { selectPage, numPages, firstPage, mediumPage, lastPage, showPages } = useSelector(
        (state) => state.paginationReducer,
    );

    function pageRight(diff) {
        if (selectPage === mediumPage) {
            if (lastPage + diff <= numPages) {
                dispatch(changeFirstPage(firstPage + diff));
                dispatch(changeLastPage(lastPage + diff));
                dispatch(changeMediumPage(mediumPage + diff));
                dispatch(changePage(selectPage + diff));
            } else if (selectPage + diff <= numPages) {
                dispatch(changeFirstPage(firstPage + numPages - lastPage));
                dispatch(changeLastPage(lastPage + numPages - lastPage));
                dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage + diff > mediumPage) {
                if (lastPage + diff - (mediumPage - selectPage) <= numPages) {
                    const v = diff - (mediumPage - selectPage);
                    dispatch(changeFirstPage(firstPage + v));
                    dispatch(changeLastPage(lastPage + v));
                    dispatch(changeMediumPage(mediumPage + v));
                    dispatch(changePage(selectPage + diff));
                } else {
                    dispatch(changeFirstPage(firstPage + numPages - lastPage));
                    dispatch(changeLastPage(lastPage + numPages - lastPage));
                    dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                    dispatch(changePage(selectPage + diff));
                }
            } else {
                dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage + diff <= numPages) {
                dispatch(changePage(selectPage + diff));
            }
        }
    }

    function pageLeft(diff) {
        if (selectPage === mediumPage) {
            if (firstPage - diff >= 1) {
                dispatch(changeFirstPage(firstPage - diff));
                dispatch(changeLastPage(lastPage - diff));
                dispatch(changeMediumPage(mediumPage - diff));
                dispatch(changePage(selectPage - diff));
            } else if (selectPage - diff >= 1) {
                dispatch(changeFirstPage(firstPage - 1 + firstPage));
                dispatch(changeLastPage(lastPage - 1 + firstPage));
                dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage - diff < mediumPage) {
                if (firstPage - diff + (selectPage - mediumPage) >= 1) {
                    const v = -diff + (selectPage - mediumPage);
                    dispatch(changeFirstPage(firstPage + v));
                    dispatch(changeLastPage(lastPage + v));
                    dispatch(changeMediumPage(mediumPage + v));
                    dispatch(changePage(selectPage - diff));
                } else {
                    dispatch(changeFirstPage(firstPage - 1 + firstPage));
                    dispatch(changeLastPage(lastPage - 1 + firstPage));
                    dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                    dispatch(changePage(selectPage - diff));
                }
            } else {
                dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage - diff >= 1) {
                dispatch(changePage(selectPage - diff));
            }
        }
    }

    function clickPage(page) {
        if (page < selectPage) {
            pageLeft(selectPage - page);
        } else if (page > selectPage) {
            pageRight(page - selectPage);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__pagination}>
                <div
                    onClick={() => {
                        dispatch(changeFirstPage(1));
                        dispatch(changeLastPage(showPages));
                        dispatch(changeMediumPage(Math.ceil(showPages / 2)));
                        dispatch(changePage(1));
                    }}
                    className={styles.wrapper__pagination__arrow}>
                    <FiChevronsLeft />
                </div>
                <div onClick={() => pageLeft(1)} className={styles.wrapper__pagination__arrow}>
                    <FiChevronLeft />
                </div>
                <div className={styles.wrapper__pagination__pages}>
                    {Array.from({ length: showPages }, (_, i) => firstPage + i).map(
                        (element, id) => (
                            <div
                                key={element}
                                onClick={() => clickPage(element)}
                                className={
                                    selectPage === element
                                        ? styles.wrapper__pagination__pages__select_block
                                        : styles.wrapper__pagination__pages__block
                                }>
                                {element}
                            </div>
                        ),
                    )}
                </div>
                <div onClick={() => pageRight(1)} className={styles.wrapper__pagination__arrow}>
                    <FiChevronRight />
                </div>
                <div
                    onClick={() => {
                        dispatch(changeFirstPage(numPages - showPages + 1));
                        dispatch(changeLastPage(numPages));
                        dispatch(changeMediumPage(numPages - Math.floor(showPages / 2)));
                        dispatch(changePage(numPages));
                    }}
                    className={styles.wrapper__pagination__arrow}>
                    <FiChevronsRight />
                </div>
            </div>
        </div>
    );
}

export default Pagination;
