import React from 'react';
import { connect } from '../../../node_modules/react-redux/dist/react-redux';
import { followThunkCreator, getUsers, toggleFollowingProgress, unFollowThunkCreator } from '../../redux/users-reducer';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Users from './UsersPresentational';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    onFirstPageDoubleArrowClick = () => {
        if (this.props.currentPage <= 1) {
            return
        }
        this.props.getUsers(1, this.props.pageSize)
    }

    onLastPageDoubleArrowClick = () => {
        if (this.props.currentPage >= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        }
        let lastPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.getUsers(lastPage, this.props.PageSize)
    }

    onNumberInputChange = (page) => {
        if (typeof (page) !== "number") {
            page = +page
        }
        if (page < 1 || page === null || page > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        } else {
            this.props.getUsers(page, this.props.pageSize)
        }
    }

    onLeftArrowClick = () => {
        let previousPage = this.props.currentPage - 1
        if (previousPage < 1) {
            return
        }
        this.props.getUsers(previousPage, this.props.pageSize)
    }

    onRightArrowClick = () => {
        let nextPage = this.props.currentPage + 1
        if (nextPage > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        }
        this.props.getUsers(nextPage, this.props.pageSize)
    }

    render() {
        return <Users
            onFirstPageDoubleArrowClick={this.onFirstPageDoubleArrowClick}
            onLeftArrowClick={this.onLeftArrowClick}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            onRightArrowClick={this.onRightArrowClick}
            onLastPageDoubleArrowClick={this.onLastPageDoubleArrowClick}
            onNumberInputChange={this.onNumberInputChange}
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            followThunkCreator={this.props.followThunkCreator}
            unFollowThunkCreator={this.props.unFollowThunkCreator}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unFollowAC(userId)),    
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    })
}*/

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {
        followThunkCreator,
        unFollowThunkCreator,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)