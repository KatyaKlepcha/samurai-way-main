import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../redux/usersReducer";
import React from "react";
import {default as axios} from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

type MapStateType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}

type MapDispatchType = {
    onFollow: (userID: number) => void
    onUnFollow: (userID: number) => void
    onSetUsers: (users: any) => void
    onSetCurrentPage: (currentPage: number) => void
    onSetTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response: any) => {
            this.props.toggleIsFetching(false)
            this.props.onSetUsers(response.data.items)
            this.props.onSetTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.onSetCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`).then((response: any) => {
            this.props.toggleIsFetching(false)
            this.props.onSetUsers(response.data.items)
        })
    }


    render() {
        return (
            <> {this.props.isFetching ?
              <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         users={this.props.users}
                         currentPage={this.props.currentPage}
                         onFollow={this.props.onFollow}
                         onUnFollow={this.props.onUnFollow}
                         onPageChanged={this.onPageChanged}/>}

            </>
        )

    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
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
        },
        onSetCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        onSetTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export type UsersType = MapStateType & MapDispatchType

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)