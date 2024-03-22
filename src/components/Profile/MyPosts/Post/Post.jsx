import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="girlAvatar.png"></img>
            </div>
            <div className={styles.likesBox}>{props.likesCount}</div>
        </div>
    )
}

export default Post;