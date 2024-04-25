import React from 'react';
import styles from './Post.module.css'
import { likesUpdateCreator } from '../../../../redux/profile-reducer';
const Post = (props) => {
    const onLikeClick = () => {
        props.dispatch(likesUpdateCreator(props.id));
    }
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="girlAvatar.png"></img>
            </div>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.likesBox} onClick={onLikeClick}>{props.likesCount} </div>
            <div className={styles.disLikesBox}>{props.dislikesCount}</div>
        </div>
    )
}

export default Post;