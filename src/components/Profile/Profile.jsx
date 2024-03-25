import React from 'react'
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
  return (
    <div>
      <div className={styles.contentTopImg}></div>
      <div>Ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile;