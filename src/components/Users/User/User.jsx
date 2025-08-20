import React from 'react';
import styles from "./User.module.css"
import { NavLink } from 'react-router-dom';
import userIcon from "../../../assets/images/userIcon.png";

const User = ({user, followingInProgress, unFollowThunkCreator, followThunkCreator, isAuth} ) => {
    return (
        <div className={styles.user} key={user.id}>
            <div className={styles.userLeftSide}>
                <NavLink to={"/profile/" + user.id}><div className={styles.userAvatar}><img src={user.photos.small !== null ? user.photos.small : userIcon} /></div></NavLink>
                <div className={styles.followBtnContainer}>
                    {(user.followed)
                        ? <button disabled={followingInProgress.some(id => id == user.id) || !isAuth} className={styles.redBtn} onClick={() => {
                            unFollowThunkCreator(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id == user.id) || !isAuth} className={styles.greenBtn} onClick={() => {
                            followThunkCreator(user.id)
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
}

export default User;