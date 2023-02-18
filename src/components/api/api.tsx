import {default as axios} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "95c1fee0-93d2-47a5-a04c-409b258bed69"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 10, pageSize: number = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
            .then(response => response.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}