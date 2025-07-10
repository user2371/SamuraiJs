import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/"
const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        "API-KEY": "1f8db28f-a890-4e11-9abd-f0649576c692",
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }

}

export const authAPI = {
    me() {
        return instance.get("auth/me")
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

     updateUserStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

