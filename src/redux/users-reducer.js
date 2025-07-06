import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true, }
                    }
                    return user
                })
            }
            return stateCopy;
        case UNFOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false, }
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
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }
}

export let followSuccess = (id) => ({ type: FOLLOW, userId: id });
export let unFollowSuccess = (id) => ({ type: UNFOLLOW, userId: id });
export let setUsers = (users) => ({ type: SET_USERS, users: users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export let setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export let toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;



