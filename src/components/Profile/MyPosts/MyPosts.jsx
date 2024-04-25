import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
  let postsComponents = props.profilePage.postData.map((post) => <Post message ={post.message} id={post.id} likesCount = {post.likesCount} dislikesCount={post.dislikesCount} dispatch={props.dispatch} idCounter={props.idCounter}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    debugger
    props.dispatch(addPostActionCreator(props.idCounter + 1));
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