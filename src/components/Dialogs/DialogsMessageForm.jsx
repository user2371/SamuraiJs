import React from "react"
import { Field, reduxForm } from "redux-form";
import { maxLengthValidatorCreator, reaquiredField } from "../../utils/validators/validators";
import { CustomFieldCreator } from "../common/FormsControl/FormsControl";

const Textarea = CustomFieldCreator("textarea")
const maxLength10 = (maxLengthValidatorCreator(10));
const DialogsMessageForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="DialogsMessageText" 
            component={Textarea} 
            placeholder="Please type your message here."
            validate={[reaquiredField, maxLength10]}
            />
            <button>Add message</button>
        </form>

    )
};



export default reduxForm({form: "DialogsMessageForm"})(DialogsMessageForm);
