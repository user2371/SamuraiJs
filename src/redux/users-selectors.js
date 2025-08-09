import { createSelector } from "reselect"

export const getUsersSelector = (state) => {
	return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
	return users.filter(user => true);
})

export const getpageSize = (state) => {
	return state.usersPage.pageSize
}

export const gettotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
}

export const getcurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getisFetching = (state) => {
	return state.usersPage.isFetching
}

export const getfollowingInProgress = (state) => {
	return state.usersPage.followingInProgress
}

export const getisAuth = (state) => {
	return state.authReducer.isAuth
}

// в уроці 82 була тільки теорія по тому які проблеми вникикають при користуванні селекторами