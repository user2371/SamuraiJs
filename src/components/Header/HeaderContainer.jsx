import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'



class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        //this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => {
return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
}


export default connect(mapStateToProps, {logout})(HeaderContainer);

 