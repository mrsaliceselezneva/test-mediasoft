import styles from './Pagination.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { changePage, changePrevPages, changeSubsPages } from '../../redux/slices/paginationSlice';

import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination() {
    const dispatch = useDispatch();
    const { selectPage, numPages, prevPages, subsPages, showPages } = useSelector(
        (state) => state.paginationReducer,
    );

    function pageRight(diff) {
        if (prevPages === subsPages) {
            if (selectPage + diff + subsPages <= numPages) {
                dispatch(changePage(selectPage + diff));
            } else {
                dispatch(changePrevPages(prevPages + diff));
                dispatch(changePage(selectPage + diff));
                dispatch(changeSubsPages(subsPages - diff));
            }
        } else if (prevPages < subsPages) {
            if (diff <= Math.ceil(showPages / 2)) {
                dispatch(changePrevPages(prevPages + diff));
                dispatch(changePage(selectPage + diff));
                dispatch(changeSubsPages(subsPages - diff));
            } else {
            }
        } else if (prevPages > subsPages) {
            if (prevPages + 1 < showPages) {
                dispatch(changePrevPages(prevPages + diff));
                dispatch(changePage(selectPage + diff));
                dispatch(changeSubsPages(subsPages - diff));
            }
        }
    }

    function pageLeft(diff) {
        if (prevPages === subsPages) {
            if (selectPage - diff - prevPages >= diff) {
                dispatch(changePage(selectPage - diff));
            } else {
                dispatch(changePrevPages(prevPages - diff));
                dispatch(changePage(selectPage - diff));
                dispatch(changeSubsPages(subsPages + diff));
            }
        } else if (prevPages > subsPages) {
            dispatch(changePrevPages(prevPages - diff));
            dispatch(changePage(selectPage - diff));
            dispatch(changeSubsPages(subsPages + diff));
        } else if (prevPages < subsPages) {
            if (subsPages + diff < showPages) {
                dispatch(changePrevPages(prevPages - diff));
                dispatch(changePage(selectPage - diff));
                dispatch(changeSubsPages(subsPages + diff));
            }
        }
    }

    function clickPage(page) {
        if (page < selectPage) {
        } else if (page > selectPage) {
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__pagination}>
                <div
                    onClick={() => {
                        dispatch(changeSubsPages(prevPages + subsPages));
                        dispatch(changePrevPages(0));
                        dispatch(changePage(1));
                    }}
                    className={styles.wrapper__pagination__arrow}>
                    <FiChevronsLeft />
                </div>
                <div onClick={() => pageLeft(1)} className={styles.wrapper__pagination__arrow}>
                    <FiChevronLeft />
                </div>
                <div className={styles.wrapper__pagination__pages}>
                    {Array.from({ length: showPages }, (_, i) => selectPage - prevPages + i).map(
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
                        dispatch(changePrevPages(prevPages + subsPages));
                        dispatch(changePage(numPages));
                        dispatch(changeSubsPages(0));
                    }}
                    className={styles.wrapper__pagination__arrow}>
                    <FiChevronsRight />
                </div>
            </div>
        </div>
    );
}

export default Pagination;
