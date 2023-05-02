import React, {FC} from 'react';
import {UserType} from "../redux/usersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged: (currentPage: number) => void
    followingInProgress: Array<number>
}

const Users: FC<UsersPropsType> = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                onPageChanged={onPageChanged}
                pageSize={pageSize}/>
            {users.map((u: UserType) => {
                console.log('props.followingInProgress.some(id => id === u.id)', props.followingInProgress.some(id => id === u.id))
                return (
                    <User key={u.id} user={u} follow={props.follow} unFollow={props.unFollow}
                          followingInProgress={props.followingInProgress}/>
                )
            })}
        </div>
    )
};

export default Users;