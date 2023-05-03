import React, {FC} from 'react';
import {UserType} from "../redux/usersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged: (currentPage: number) => void
    followingInProgress: Array<number>
}

const Users: FC<UsersPropsType> = ({currentPage, totalItemsCount, onPageChanged, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                totalItemsCount={totalItemsCount}
                onPageChanged={onPageChanged}
                pageSize={pageSize}/>
            {users.map((u: UserType) => {
                return (
                    <User key={u.id} user={u} follow={props.follow} unFollow={props.unFollow}
                          followingInProgress={props.followingInProgress}/>
                )
            })}
        </div>
    )
};

export default Users;