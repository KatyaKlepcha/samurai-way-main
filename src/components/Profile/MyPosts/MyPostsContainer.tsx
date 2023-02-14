import React from "react";
import {addNewPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileType} from "../ProfileContainer";

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState()
//
//                 const addNewPost = () => {
//                     store.dispatch(addNewPostActionCreator())
//                 }
//
//                 const onChangePost = (newPostText: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(newPostText))
//                 }
//
//                 return (
//                     <MyPosts updateNewPostText={onChangePost} addPost={addNewPost} posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

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