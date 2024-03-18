import React from 'react'
import Styles from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={Styles.content}>
        <div className={Styles.contentTopImg}>
        </div>
        <div>Ava + description</div>
        <div>My posts
          <div>New post</div>
        </div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    )
}

export default Profile;