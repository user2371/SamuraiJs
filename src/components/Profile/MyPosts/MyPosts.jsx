import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsComponents = props.postData.map((post) => <Post key={post.id} onLikeClick={props.onLikeClick} message ={post.message} id={post.id} likesCount = {post.likesCount} dislikesCount={post.dislikesCount} idCounter={props.idCounter}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.onAddPost();
  };
let chagePost = () => {
  let text = newPostElement.current.value;
  props.onChangePost(text);
}

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}  onChange={chagePost} value={props.newPostText}></textarea>        
        <button className={styles.myPostBtn} onClick={addPost}>Add post</button>
      </div>
      <div>
         {postsComponents}    
      </div>
    </div>
  )
 
}

export default MyPosts;