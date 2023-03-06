import React from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from '../Profile';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} alt={'photo'}/>
            <ProfileStatus {...props}/>
        </div>
    );
};

export default ProfileInfo;