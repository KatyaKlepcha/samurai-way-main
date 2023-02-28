import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleInFollowingProgress, unFollow, UserType} from "../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";

type MapStateType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
        this.props.setCurrentPage(currentPage)
    }


    render() {
        return (
            <> {this.props.isFetching ?
                <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         users={this.props.users}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                />
            }
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    follow, unFollow,
    getUsers,
    setCurrentPage,
    toggleInFollowingProgress
})(UsersContainer)