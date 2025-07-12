import React from "react"
import { Field, reduxForm } from "redux-form";

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/* <textarea ref={newPostElement} onChange={chagePost} value={props.newPostText}></textarea> */}
            <Field component="textarea" name="newPostText" placeholder="Type your new post here"/>
            <button >Add post</button>
        </form>
    )
};


export default reduxForm({form: "MyPostsForm"})(MyPostsForm);
