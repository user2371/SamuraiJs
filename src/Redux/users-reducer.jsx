import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: undefined,
    isFetching: true,
};

let usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: true, }
                    }
                    return user
                })
            }
            return stateCopy;
        case UNFOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: false, }
                    }
                    return user;
                })
            }
            return stateCopy;
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}    
        default:
            return state;
    }
}

export let follow = (id) => ({ type: FOLLOW, userId: id });
export let unFollow = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsers = (users) => ({ type: SET_USERS, users: users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export let setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export default usersReducer;



