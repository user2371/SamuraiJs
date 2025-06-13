import React from 'react';
import { connect } from '../../../node_modules/react-redux/dist/react-redux';
import Users from './Users';
import { followAC, setCurrentPageAC, setTotalUsersCount, setUsersAC, unFollowAC } from '../../redux/users-reducer';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
    })
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

