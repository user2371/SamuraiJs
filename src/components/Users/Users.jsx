import React from 'react';
import styles from './Users.module.css';
import axios from '../../../node_modules/axios/index.js';
import userIcon from "../../assets/images/userIcon.png";


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then( (response) => {
            props.setUsers(response.data.items)  
        })
    }
    return (       
        <div className={styles.users}>
            {props.users.map((user) => {
                return (
                    <div className={styles.user} key={user.id}>
                        <div className={styles.userLeftSide}>
                            <div className={styles.userAvatar}><img src={user.photos.small !== null ? user.photos.small : userIcon} /></div>
                            <div className={styles.followBtnContainer}>
                                {user.isFollowed
                                    ? <button onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>follow</button>
                                }
                            </div>
                        </div>

                        <div className={styles.userDescription}>
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.status}</p>
                            </div>
                            <div className={styles.location}>
                                <p>{"user.location.country"}</p>
                                <p>{"user.location.city"}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}




export default Users;


