import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunkCreator(userId)
        
    }
    render() {
        return <Profile {...this.props} ></Profile>
    }
}

let mapStateToProps = (state) => {
    return { 
        userProfile: state.profilePage.userProfile,
     }
}


export default compose(
    connect(mapStateToProps, { getUserProfileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



