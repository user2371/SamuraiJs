import React from 'react';
import styles from './AvaSection.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    avtivateEditMode = () => {          
        // В уроці вирішується проблема яка на цей час вже не актуальна її пофіксили
    this.setState({
        editMode: true,
    })
}
    deavtivateEditMode = () => {    
    this.setState({
        editMode: false,
    })
}
render() {
    return (
        <div>
            {!this.state.editMode
                ? <div>
                    <span onClick={this.avtivateEditMode}>{this.props.status}</span>
                </div>
                : <div className={styles.profileStatusInput}>
                    <input autoFocus={true} onBlur={this.deavtivateEditMode} value={this.props.status} />
                </div>
            }

        </div>
    )
}
}

export default ProfileStatus