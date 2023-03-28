import React from "react";
import {addNewPostActionCreator, InitialStateType} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileType} from "../ProfileContainer";

type MapStatePropsType = InitialStateType

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    profile: ProfileType | null
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addNewPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer