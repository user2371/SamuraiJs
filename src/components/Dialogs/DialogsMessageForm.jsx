import React from "react"
import { Field, reduxForm } from "redux-form";

const DialogsMessageForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="DialogsMessageText" component="textarea" placeholder="Please type your message here."/>
            <button>Add message</button>
        </form>

    )
};



export default reduxForm({form: "DialogsMessageForm"})(DialogsMessageForm);
