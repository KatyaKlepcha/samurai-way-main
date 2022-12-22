import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const Profile = () => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo/>
            {/*<MyPostsContainer posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}/>*/}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile