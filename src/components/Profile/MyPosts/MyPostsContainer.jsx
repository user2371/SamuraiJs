import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, likesUpdateCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from '../../../../node_modules/react-redux/dist/react-redux';



const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    idCounter: state.profilePage.idCounter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost  (newPostText) {
      dispatch(addPostActionCreator(newPostText));
    },
    onLikeClick(id) {
      dispatch(likesUpdateCreator(id))
    }
  }

};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;