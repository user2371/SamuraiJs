import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, likesUpdateCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onAddPost = () => {
          store.dispatch(addPostActionCreator(state.profilePage.idCounter + 1));
        };

        let onChangePost = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text))
        }

        let onLikeClick = (id) => {
          store.dispatch(likesUpdateCreator(id))
        }
        return (
          <MyPosts
            onAddPost={onAddPost}
            onChangePost={onChangePost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
            onLikeClick={onLikeClick}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )

}

export default MyPostsContainer;