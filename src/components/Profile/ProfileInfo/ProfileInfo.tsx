import React from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from '../Profile';

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large}/>
            <div>ava + description</div>
        </div>
    );
};

export default ProfileInfo;