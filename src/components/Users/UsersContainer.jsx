import React from 'react';
import { connect } from '../../../node_modules/react-redux/dist/react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from '../../redux/users-reducer';
import UsersPresentational from './UsersPresentational';
import { usersAPI } from '../../api/api';

class Users extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)                                        
                this.props.setTotalUsersCount(response.totalCount)                         
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.setUsers(response.items);                                       
                this.props.setTotalUsersCount(response.totalCount)                         
                this.props.toggleIsFetching(false)
            })
    }
    onFirstPageDoubleArrowClick = () => {
        if (this.props.currentPage <= 1) {
            return
        }
        this.props.setCurrentPage(1);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(1, this.props.pageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.setUsers(response.items);                                        
                this.props.setTotalUsersCount(response.totalCount);                         
                this.props.toggleIsFetching(false)
            })
    }

    onLastPageDoubleArrowClick = () => {
        if (this.props.currentPage >= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        }
        let lastPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.setCurrentPage(lastPage);        
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(lastPage, this.props.PageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.setUsers(response.items);                                        
                this.props.setTotalUsersCount(response.totalCount);                         
                this.props.toggleIsFetching(false)
            })
    }
    onNumberInputChange = (page) => {
        if (typeof (page) !== "number") {
            page = +page
        }
        if (page < 1 || page === null || page > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        } else {
            this.props.toggleIsFetching(true)
            usersAPI.getUsers(page, this.props.pageSize)                      //                       <---------------- here
                .then((response) => {
                    this.props.setUsers(response.items);                                       
                    this.props.setCurrentPage(page);
                    this.props.toggleIsFetching(false)
                })
        }
    }

    onLeftArrowClick = () => {
        let previousPage = this.props.currentPage - 1
        if (previousPage < 1) {
            return
        }
        this.props.setCurrentPage(previousPage);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(previousPage, this.props.pageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.setUsers(response.items);                                              
                this.props.setTotalUsersCount(response.totalCount);                               
                this.props.toggleIsFetching(false)
            })
    }
    onRightArrowClick = () => {
        let nextPage = this.props.currentPage + 1
        if (nextPage > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        }
        this.props.setCurrentPage(nextPage);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(nextPage, this.props.pageSize)                      //                       <---------------- here
            .then((response) => {
                this.props.setUsers(response.items);                                                
                this.props.setTotalUsersCount(response.totalCount);                                 
                this.props.toggleIsFetching(false)
            })
    }



    render() {
        return <UsersPresentational
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
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isFetching={this.props.isFetching}

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

export let UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })(Users);

