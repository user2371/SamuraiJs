import React from 'react';
import styles from './AvaSection.module.css'

class UserStatusComponent extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }
    avtivateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deavtivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatusThunkCreator(this.state.userStatus)
    }
    onStatusChange = (evt) => {
        this.setState({
            userStatus: evt.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.avtivateEditMode}>{this.props.userStatus || "------"}</span>
                    </div>
                    : <div className={styles.profileStatusInput}>
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deavtivateEditMode} value={this.state.userStatus} />
                    </div>
                }

            </div>
        )
    }
}

export default UserStatusComponent