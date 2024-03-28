import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

let postData = [
  {id: 1, message: "Hi", likesCount: 12,},
  {id: 2, message: "What's up", likesCount: 0,},
  {id: 3, message: "Good bye", likesCount: 5,},
]

const MyPosts = (props) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message ={postData[0].message} likesCount = {postData[0].likesCount}/>
        <Post message ={postData[1].message} likesCount = {postData[1].likesCount}/>
        <Post message ={postData[2].message} likesCount = {postData[2].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;