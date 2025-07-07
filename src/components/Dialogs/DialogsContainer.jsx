import React, { Children } from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import { connect } from "../../../node_modules/react-redux/dist/react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";




let mapStateToProps = (state) => {
    return {        
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

