import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {default as axios} from "axios";
import {setUserProfile} from "../redux/profileReducer";
import {AppStateType} from "../redux/redux-store";

class ProfileContainer extends React.Component<ProfilesType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response: any) => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

type MapStateType = {
    profile: ProfileType | null
}

type MapDispatchType = {
    setUserProfile: (profile: ProfileType | null) => void
}


export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}

type ContactsType = {
    facebook: string
    github: string
    instagram: string
    mainLink: null
    twitter: string
    vk: string
    website: null
    youtube: null
}

type PhotosType = {
    small: string
    large: string
}

type ProfilesType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);