import React, {ChangeEvent} from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from '../Profile';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../common/images/user.png";

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div className={s.profileWrapper}>
            <img src={props.profile.photos.large || userPhoto} alt={'photo'} className={s.userPhoto}/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <div className={s.aboutMe}>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

        </div>
    );
};

export default ProfileInfo;