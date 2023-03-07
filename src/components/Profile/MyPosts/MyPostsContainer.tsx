import React from "react";
import {addNewPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileType} from "../ProfileContainer";

type MapStatePropsType = InitialStateType

type MapDispatchPropsType = {
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
    profile: ProfileType | null
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextActionCreator(newPostText))
        },
        addPost: () => {
            dispatch(addNewPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer