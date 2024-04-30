import React, { Children } from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagesPage;

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextCreator(text))
                }

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                return (
                    <Dialogs
                        dialogsData={state.dialogsData}
                        messagesData={state.messagesData}
                        onNewMessageChange={onNewMessageChange}
                        onSendMessageClick={onSendMessageClick}

                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
