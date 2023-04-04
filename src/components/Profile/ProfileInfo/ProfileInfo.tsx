import React from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from '../Profile';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const  ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileWrapper}>
            <img src={props.profile.photos.large} alt={'photo'}/>
            <div className={s.aboutMe}>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

        </div>
    );
};

export default ProfileInfo;