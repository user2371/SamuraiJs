import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



let initialState = {
    users: [],
};

let usersReducer = (state = initialState, action) => {
    debugger
    let stateCopy ;
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
                        return {...user, isFollowed: false,}
                    } 
                     return user;
                })
            }
            return stateCopy;
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export let followAC = (id) => ({ type: FOLLOW, userId: id });
export let unFollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;



