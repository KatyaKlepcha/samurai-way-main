import {UserType} from "../redux/usersReducer";

export const updateFollowUnfollowInArray = (items: UserType[], itemID: number, newObjProps: {followed: boolean}) => {
    return items.map((u) => {
        if (u.id === itemID) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
