import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateUserStatus} from "../redux/profileReducer";
import {AppStateType} from "../redux/redux-store";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfilesType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId: string | number = this.props.match.params.userId
        if (!userId) {
            // return (+userId === 2)
            userId = this.props.userId
            if (!userId) { //можно и так делать редирект (через history.push)
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        errors={this.props.errors}
                        updateUserStatus={this.props.updateUserStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
        />
    }

}

type MapStateType = {
    profile: ProfileType | null
    status: string | undefined
    userId: number
    errors: string[] | undefined
}

type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (profile: ProfileType) => void
}


export type ProfileType = {
    aboutMe?: string
    contacts?: ContactsType
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    photos?: PhotosType
    userId?: number
}

export type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: null
    twitter: string | null
    vk: string | null
    website: null
    youtube: null
}

export type PhotosType = {
    small: string | null
    large: string | null
}

type ProfilesType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
        errors: state.profilePage.errors
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)