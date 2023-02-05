import React from 'react';
import userPhoto from "../common/images/user.png";
import s from "./Users.module.css";
import {default as axios} from "axios";
import {UserType} from "../redux/usersReducer";
import {UsersType} from "./UsersContainer";

class Users extends React.Component<UsersType>  {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
            this.props.onSetUsers(response.data.items)})
    }

    render(){
      return <div>
           {this.props.users.map((u: UserType) => {
               return (
                   <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small !== null ?  u.photos.small : userPhoto}
                                      className={s.user}/></div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        this.props.onUnFollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.onFollow(u.id)
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
    }
}

export default Users;