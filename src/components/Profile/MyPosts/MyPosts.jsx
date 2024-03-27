import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message ="Hello" likesCount = "15" />
        <Post message ="How are you" likesCount = "10"/>
      </div>
    </div>
  )
}

export default MyPosts;