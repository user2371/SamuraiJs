import React, { useEffect } from 'react';
import UsersPagination from './UsersPagination/UsersPagination';
import styles from './Users.module.css'
import userIcon from "../../assets/images/userIcon.png";
import Preloader from '../common/Preloader/Preloader';
import { NavLink, useParams } from 'react-router-dom';

let Users = (props) => {

   
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
    console.log(props.users)
    return (
        <div className={styles.users}>
            <UsersPagination
                pages={pages}
                onFirstPageDoubleArrowClick={props.onFirstPageDoubleArrowClick}
                onLeftArrowClick={props.onLeftArrowClick}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                onRightArrowClick={props.onRightArrowClick}
                onLastPageDoubleArrowClick={props.onLastPageDoubleArrowClick}
                onNumberInputChange={props.onNumberInputChange}
                pagesCount={pagesCount}
            >
            </UsersPagination>
            {props.isFetching
                ? <Preloader />
                : props.users.map((user) => {
                    return (
                        <div className={styles.user} key={user.id}>
                            <div className={styles.userLeftSide}>
                                <NavLink to={"/profile/" + user.id}><div className={styles.userAvatar}><img src={user.photos.small !== null ? user.photos.small : userIcon} /></div></NavLink>
                                <div className={styles.followBtnContainer}>
                                    {(user.followed)
                                        ? <button disabled={props.followingInProgress.some(id => id == user.id) || !props.isAuth} className={styles.redBtn} onClick={() => {                                           
                                            props.unFollowThunkCreator(user.id)
                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id == user.id) || !props.isAuth} className={styles.greenBtn} onClick={() => {                                          
                                            props.followThunkCreator(user.id)
                                        }}>follow</button>
                                    }
                                </div>
                            </div>

                            <div className={styles.userDescription}>
                                <div>
                                    <h3>{user.name}</h3>
                                    <p className={styles.userStatus}>{user.status}</p>
                                </div>
                                <div className={styles.location}>
                                    <p>{`User ID : ${user.id}`}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}



        </div >
    )
}

export default Users;