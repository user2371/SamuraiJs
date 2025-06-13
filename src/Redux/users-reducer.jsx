import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 2,
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
        default:
            return state;
    }
}

export let followAC = (id) => ({ type: FOLLOW, userId: id });
export let unFollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsersAC = (users) => ({ type: SET_USERS, users: users });
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export let setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount });

export default usersReducer;



