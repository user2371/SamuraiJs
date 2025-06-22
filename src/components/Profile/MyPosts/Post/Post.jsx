import React from 'react';
import styles from './Post.module.css'
import girlAvatar from '../../../../assets/images/girlAvatar.png'

const Post = (props) => {
    const likeClick = () => {
        props.onLikeClick(props.id);
    }
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src={girlAvatar}></img>
            </div>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.likesBox} onClick={likeClick}>{props.likesCount} </div>
            <div className={styles.disLikesBox}>{props.dislikesCount}</div>
        </div>
    )
}

export default Post;