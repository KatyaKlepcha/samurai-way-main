import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleInFollowingProgress,
    unFollow,
    UserType
} from "../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getTotalUsersCount,
    getUsers,
    getUsersPage
} from "../redux/users-selectors";

type MapStateType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalItemsCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersContainer extends React.Component<UsersType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
        this.props.setCurrentPage(currentPage)
    }


    render() {
        return (
            <>
                {this.props.isFetching &&
                    <Preloader/>}
                <Users totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getUsersPage(state),
        currentPage: getCurrentPage(state),
        totalItemsCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export type UsersType = MapStateType & MapDispatchType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unFollow,
        requestUsers,
        setCurrentPage,
        toggleInFollowingProgress
    }))(UsersContainer)