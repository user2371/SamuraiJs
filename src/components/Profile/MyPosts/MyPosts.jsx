import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm';


const MyPosts = React.memo((props) => {
  let postsComponents = props.postData.map((post) => <Post key={post.id} onLikeClick={props.onLikeClick} message={post.message} id={post.id} likesCount={post.likesCount} dislikesCount={post.dislikesCount} idCounter={props.idCounter} />)
  let newPostElement = React.createRef();

  let customOnsubmit = (value) => {
    console.log(value)
    props.onAddPost(value.newPostText);
  }

  return (
    <div>
      <h3>My posts</h3>
      <MyPostsForm onSubmit={customOnsubmit} />
      <div>
        {postsComponents}
      </div>
    </div>
  )
}
)
export default MyPosts;

// В  Уроці 88 була тільки теорія по PureFunction 