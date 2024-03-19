import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="girlAvatar.png"></img>
            </div>
            <div className={styles.text}>Post 1</div>
            <div>Like</div>
        </div>
    )
}

export default Post;