import {default as axios} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ca665b8-edb1-4731-a8c2-cd754166c4b1"
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
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login',)
    }
}