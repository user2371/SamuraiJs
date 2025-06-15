import React from 'react';
import styles from './UsersPagination.module.css';

let UsersPagination = function (props) {
    return (
        <div className={styles.Pagination}>
                    <div className={styles.firstPageDoubleArrow} onClick={() => { props.onFirstPageDoubleArrowClick() }}>&#60;&#60;</div>
                    <div className={styles.leftArrow} onClick={() => { props.onLeftArrowClick() }}>&#60;</div>
                    <div className={styles.pages}>
                        {props.pages.map(page => {
                            return <span onClick={() => { props.onPageChanged(page) }}
                                className={props.currentPage === page
                                    ? styles.selectedPage
                                    : undefined
                                }
                            >{page}</span>
                        })}
                    </div>
                    <div className={styles.rightArrow} onClick={() => { props.onRightArrowClick() }}>&#62;</div>
                    <div className={styles.lastPageDoubleArrow} onClick={() => { props.onLastPageDoubleArrowClick() }}>&#62;&#62;</div>
                    <div className={styles.pageNumberField}><input type="number" min="1" value={props.currentPage} onChange={(e) => { props.onNumberInputChange(e.target.value) }}></input>
                        <span>of {props.pagesCount}</span></div>
                </div>
    )
}

export default UsersPagination;