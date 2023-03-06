import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profileReducer";
import {AppStateType} from "../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type PathParamsType = {
    userId: string
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfilesType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            return (+userId === 2)
        }

        this.props.getUserProfile(+userId)
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

type MapStateType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchType = {
    getUserProfile: (userId: number) => void
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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);