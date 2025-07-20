import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/profile-reducer';
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
        const { id } = useParams();

        useEffect(() => {
            if (!props.isAuth) {
                navigate("/login");
            }

        }, [props.isAuth, navigate]);

   

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
            userId = this.props.autorizedUser;
        }

        if (userId) {
            this.props.getUserProfileThunkCreator(userId)
            this.props.getUserStatusThunkCreator(userId)
        }
    }
    render() {
        return <Profile {...this.props} ></Profile>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus,
        isAuth: state.authReducer.isAuth,
        autorizedUser: state.authReducer.id,
    }
}


export default compose(
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator }),
    withRouter)(ProfileContainer)



