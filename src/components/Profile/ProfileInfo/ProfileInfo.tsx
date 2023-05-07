import React, {ChangeEvent, FC, useState} from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from '../Profile';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../common/images/user.png";
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = (props: ProfilePropsType) => {

    const [editMode, setEditMode] = useState(false)

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
            <div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <img src={props.profile.photos && props.profile.photos.large || userPhoto} alt={'photo'}
                     className={s.userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            </div>

            {editMode ?
                <ProfileDataForm errors={props.errors} setEditMode={setEditMode} profile={props.profile}
                                 saveProfile={props.saveProfile}/> :
                <ProfileData saveProfile={props.saveProfile} profile={props.profile} isOwner={props.isOwner}
                             changeEditMode={() => {
                                 setEditMode(true)
                             }}/>}
        </div>
    );
};

export default ProfileInfo;

