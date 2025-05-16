import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
     debugger
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: "Dmitry K.",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                status: "I am looking for a job right now...",
                location: { country: "Belarus", city: "Minsk" },
                isFollowed: false,
            },
            {
                id: 2,
                fullName: "Svetlana D.",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                status: "I am so pretty",
                location: { country: "Belarus", city: "Minsk" },
                isFollowed: true,
            },
            {
                id: 3,
                fullName: "Sergei S.",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                status: "I like football...",
                location: { country: "Ukraine", city: "Kiev" },
                isFollowed: false,
            },
            {
                id: 4,
                fullName: "Andrew T.",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                status: "I am free to help you",
                location: { country: "USA", city: "Philadelphia" },
                isFollowed: true,
            }
        ]
        );
    }
    return (       
        <div className={styles.users}>
            {props.users.map((user) => {
                debugger
                return (
                    <div className={styles.user} key={user.id}>
                        <div className={styles.userLeftSide}>
                            <div className={styles.userAvatar}><img src={user.avatar} /></div>
                            <div className={styles.followBtnContainer}>
                                {user.isFollowed
                                    ? <button onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>follow</button>
                                }
                            </div>
                        </div>

                        <div className={styles.userDescription}>
                            <div>
                                <h3>{user.fullName}</h3>
                                <p>{user.status}</p>
                            </div>
                            <div className={styles.location}>
                                <p>{user.location.country}</p>
                                <p>{user.location.city}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}




export default Users;


