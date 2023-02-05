import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/usersReducer";

type MapStateType = {
    users: Array<UserType>
}

type MapDispatchType = {
    onFollow: (userID: number) => void
    onUnFollow: (userID: number) => void
    onSetUsers: (users: any) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onFollow: (userID: number) => {
            dispatch(followAC(userID))
        },

        onUnFollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },

        onSetUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export type UsersType = MapStateType & MapDispatchType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer