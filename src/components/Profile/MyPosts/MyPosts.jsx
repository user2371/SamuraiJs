import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
  let postsComponents = props.postData.map((post) => <Post message ={post.message} likesCount = {post.likesCount}/>)
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