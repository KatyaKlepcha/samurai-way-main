import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                const addNewPost = () => {
                    store.dispatch(addNewPostActionCreator())
                }

                const onChangePost = (newPostText: string) => {
                    store.dispatch(updateNewPostTextActionCreator(newPostText))
                }

                return (
                    <MyPosts updateNewPostText={onChangePost} addPost={addNewPost} posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer