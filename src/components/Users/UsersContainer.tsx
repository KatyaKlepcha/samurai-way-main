import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
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
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response: any) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`).then((response: any) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
                         onFollow={this.props.follow}
                         onUnFollow={this.props.unFollow}
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

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
//     return {
//         onFollow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//
//         onUnFollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//
//         onSetUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         onSetCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         onSetTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export type UsersType = MapStateType & MapDispatchType

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)