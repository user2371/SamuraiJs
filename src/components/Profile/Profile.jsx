import React from 'react'
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'
import AvaSection from './AvaSection/AvaSection';



const Profile = (props) => {
  return (
    <div>
      <AvaSection />
      <MyPosts profilePage={props.profilePage} bllAddPost={props.bllAddPost}/>
    </div>
  )
}

export default Profile;