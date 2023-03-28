import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {PostType} from "../../redux/profileReducer";
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    newPostText: string
};

const MyPosts = (props: MyPostsType) => {

    const {
        register, //позволяет регистрировать различные поля для формы
        handleSubmit,  //обертка над нашим кастомным хэндлером отправки формы. позволяет сделать то, что например связано с валидацией
        reset
    } = useForm<FormValues>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<FormValues> = ({newPostText}) => {
        props.addPost(newPostText)
        reset()
    }

    return (
        <div className={s.posts}>My Posts
            <form onSubmit={handleSubmit(onSubmit)} >
                <textarea {...register('newPostText')} />
                <div>
                    <button type={'submit'} className={s.button}>Send
                    </button>
                </div>

            </form>
            {props.posts.map((p: PostType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

export default MyPosts