import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../redux/usersReducer";
import userPhoto from "../common/images/user.png";
import {NavLink} from "react-router-dom";

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

const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => {
                return <span key={i} onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p ? s.currentPage + ' ' + s.pages : s.pages}>{p}</span>
            })}
            {props.users.map((u: UserType) => {
                console.log('props.followingInProgress.some(id => id === u.id)', props.followingInProgress.some(id => id === u.id))
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.user}/>
                                    </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.unFollow(u.id)
                                                      }}>UnFollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.follow(u.id)
                                              }}>Follow</button>}
                                </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                 <div>{u.status}</div>
                            </span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>
                )
            })}
        </div>
    )
};

export default Users;