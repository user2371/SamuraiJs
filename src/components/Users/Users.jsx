import React from 'react';
import styles from './Users.module.css'
import axios from '../../../node_modules/axios/index.js';
import userIcon from "../../assets/images/userIcon.png";
import UsersPagination from './UsersPagination/UsersPagination';


class Users extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onFirstPageDoubleArrowClick = () => {
        this.props.setCurrentPage(1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onLastPageDoubleArrowClick = () => {
        let lastPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.setCurrentPage(lastPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${lastPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onNumberInputChange = (page) => {
        if (typeof(page) !== "number") {
            page = +page
        }
        if (page < 1 || page === null || page > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        } else {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            })}
    }

    onLeftArrowClick = () => {
        let previousPage = this.props.currentPage - 1
        if (previousPage < 1) {
            return
        }
        this.props.setCurrentPage(previousPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${previousPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onRightArrowClick = () => {
        let previousPage = this.props.currentPage + 1
        if (previousPage > Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            return
        }
        this.props.setCurrentPage(previousPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${previousPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    createPages = (pages, pagesCount, currentPage) => {
    if(pagesCount > 5) {
        if(currentPage > 2) {
            for (let i = currentPage-2; i <= currentPage+2; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 5; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        this.createPages(pages, pagesCount, this.props.currentPage);
        
        return (
            <div className={styles.users}>
                <UsersPagination 
                pages={pages} 
                onFirstPageDoubleArrowClick={this.onFirstPageDoubleArrowClick}
                onLeftArrowClick={this.onLeftArrowClick}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                onRightArrowClick={this.onRightArrowClick}
                onLastPageDoubleArrowClick={this.onLastPageDoubleArrowClick}
                onNumberInputChange={this.onNumberInputChange}
                pagesCount={pagesCount}
                >
                </UsersPagination>                
                {this.props.users.map((user) => {
                    return (
                        <div className={styles.user} key={user.id}>
                            <div className={styles.userLeftSide}>
                                <div className={styles.userAvatar}><img src={user.photos.small !== null ? user.photos.small : userIcon} /></div>
                                <div className={styles.followBtnContainer}>
                                    {user.isFollowed
                                        ? <button className={styles.redBtn} onClick={() => { this.props.unFollow(user.id) }}>Unfollow</button>
                                        : <button className={styles.greenBtn} onClick={() => { this.props.follow(user.id) }}>follow</button>
                                    }
                                </div>
                            </div>

                            <div className={styles.userDescription}>
                                <div>
                                    <h3>{user.name}</h3>
                                    <p className={styles.userStatus}>{user.status}</p>
                                </div>
                                <div className={styles.location}>
                                    <p>{"user.location.country"}</p>
                                    <p>{"user.location.city"}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        )
    }
}


export default Users;