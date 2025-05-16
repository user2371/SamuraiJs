import React from 'react';
import { connect } from '../../../node_modules/react-redux/dist/react-redux';
import Users from './Users';
import { followAC, setUsersAC, unFollowAC } from '../../redux/users-reducer';



let mapStateToProps = (state) => {
    return {users: state.usersPage.users,}
}

let mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    })
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

