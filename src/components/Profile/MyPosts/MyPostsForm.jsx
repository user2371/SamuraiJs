import React from "react"
import { Field, reduxForm } from "redux-form";
import { maxLengthValidatorCreator, maxtLength30, reaquiredField } from "../../../utils/validators/validators";
import { CustomFieldCreator } from "../../common/FormsControl/FormsControl";

const maxLength30 = maxLengthValidatorCreator(30);
const Textarea = CustomFieldCreator("textarea") 
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Type your new post here" validate={[reaquiredField, maxLength30]} />
            <button className="btn">Add post</button>
        </form>
    )
};


export default reduxForm({ form: "MyPostsForm" })(MyPostsForm);
