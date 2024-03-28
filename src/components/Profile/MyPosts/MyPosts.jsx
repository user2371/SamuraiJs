import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

let postData = [
  {id: 1, message: "Hi", likesCount: 12,},
  {id: 2, message: "What's up", likesCount: 0,},
  {id: 3, message: "Good bye", likesCount: 5,},
]
let postsComponents = postData.map((post) => <Post message ={post.message} likesCount = {post.likesCount}/>)

const MyPosts = (props) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        {postsComponents}        
      </div>
    </div>
  )
}

export default MyPosts;