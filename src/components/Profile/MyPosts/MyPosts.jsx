import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../state';




const MyPosts = (props) => {
  let postsComponents = props.profilePage.postData.map((post) => <Post message ={post.message} likesCount = {post.likesCount}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
let onChagePost = () => {
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(text))
}

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}  onChange={onChagePost} value={props.profilePage.newPostText}></textarea>
        
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postsComponents}        
      </div>
    </div>
  )
 
}

export default MyPosts;