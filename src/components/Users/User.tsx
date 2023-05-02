import React, {FC} from 'react';
import s from "./Users.module.css";
import {UserType} from "../redux/usersReducer";
import userPhoto from "../common/images/user.png";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    followingInProgress: Array<number>
}

const Users: FC<PropsType> = ({user,followingInProgress,  unFollow, follow}) => {

    return (

        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>

            </div>
            <div className={s.information}>
                            <span>
                                <div className={s.userName}>{user.name}</div>
                                 <div>{user.status}</div>
                            </span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
            <div className={s.buttonWrapper}>
                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {unFollow(user.id)}}
                                         className={s.unFollow}>UnFollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                              follow(user.id)
                              }} className={s.follow}>Follow</button>}
            </div>
        </div>
    )
};

export default Users;