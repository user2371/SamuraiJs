import React from 'react';
import styles from './UsersPagination.module.css';

let UsersPagination = function (props) {
     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let createPages = (pages, pagesCount, currentPage) => {
        if (pagesCount > 5) {
            if (currentPage > 2) {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }
    createPages(pages, pagesCount, props.currentPage);
    return (
        <div className={styles.Pagination}>
                    <div className={styles.firstPageDoubleArrow} onClick={() => { props.onFirstPageDoubleArrowClick() }}>First page</div>
                    <div className={styles.leftArrow} onClick={() => { props.onLeftArrowClick() }}>&#60;</div>
                    <div className={styles.pages}>
                        {pages.map(page => {
                            return <span onClick={() => { props.onPageChanged(page) } }
                                className={props.currentPage === page
                                    ? styles.selectedPage
                                    : undefined
                                }
                            key={pages.indexOf(page)}>{page}</span>
                        })}
                    </div>
                    <div className={styles.rightArrow} onClick={() => { props.onRightArrowClick() }}>&#62;</div>
                    <div className={styles.lastPageDoubleArrow} onClick={() => { props.onLastPageDoubleArrowClick() }}>Last page</div>
                    <div className={styles.pageNumberField}><input type="number" min="1" value={props.currentPage} onChange={(e) => { props.onNumberInputChange(e.target.value) }}></input>
                        <span>of {props.pagesCount}</span></div>
                </div>
    )
}

export default UsersPagination;