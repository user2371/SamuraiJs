import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, likesUpdateCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator(state.profilePage.idCounter + 1));
  };

  let onChangePost = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  let onLikeClick = (id) => {
    props.store.dispatch(likesUpdateCreator(id))
  }

  return (
    <MyPosts
      onAddPost={onAddPost}
      onChangePost={onChangePost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
      onLikeClick={onLikeClick}
    />)

}

export default MyPostsContainer;