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
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        })
            .then(response => response.data)

    }
}

