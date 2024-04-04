import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
  let postsComponents = props.profilePage.postData.map((post) => <Post message ={post.message} likesCount = {post.likesCount}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.bllAddPost(text)

    alert(text)
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} >asdf</textarea>
        
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postsComponents}        
      </div>
    </div>
  )
 
}

export default MyPosts;