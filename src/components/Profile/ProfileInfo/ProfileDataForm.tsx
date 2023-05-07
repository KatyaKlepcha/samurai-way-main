import React from "react";
import s from "./ProfileDataForm.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {ContactsType, ProfileType} from "components/Profile/ProfileContainer";
import {useAppDispatch} from "components/redux/redux-store";
import {saveProfile} from "components/redux/profileReducer";

type FormValues = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
    singleErrorInput: string
};

type PropsType = {
    profile: ProfileType
    errors?: string[]
    setEditMode: (edit: boolean) => void
    saveProfile: (profile: ProfileType) => void
}

const ProfileDataForm = (props: PropsType) => {
    const {
        register, //позволяет регистрировать различные поля для формы
        formState: {
            errors, isValid
        },
        setError,
        handleSubmit,  //обертка над нашим кастомным хэндлером отправки формы. позволяет сделать то, что например связано с валидацией
        // reset
    } = useForm<FormValues>({
        defaultValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: props.profile.contacts
        },
        mode: "onBlur"
    })

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FormValues> =(profile) => {
        // props.saveProfile(profile) если из пропсов пришла санка из класс. компоненты
        dispatch(saveProfile(profile)).then(()=>{
            props.setEditMode(false)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
            <button type={'submit'} className={s.buttonSave}>Save</button>
            <label> Full name:
                <input placeholder={'FullName'} {...register('fullName')}/>
            </label>
            <label> About me:
                <input placeholder={'AboutMe'} {...register('aboutMe')}/>
            </label>
            <label>
                <input type={'checkbox'} {...register('lookingForAJob')}/> Looking for a job
            </label>
            <label> Looking for a job description:
                <textarea placeholder={'Description'} {...register('lookingForAJobDescription')}/>
            </label>
            <label> Contacts: {props.profile.contacts && Object.keys(props.profile.contacts).map((key, index) => {
                return (
                    <div key={key}>
                        {/*{key}: <input placeholder={key} {...register('contacts') + key} name={'contacts.' + key}/>*/}
                        {key}: <input
                        placeholder={key} {...register(`contacts.${key as keyof typeof props.profile.contacts}`,
                        {required: 'required'}
                    )} />
                        {(props.errors?.length!==0) && <p className={s.error}>{props.errors && props.errors[index]}</p>}

                    </div>
                )
            })}
            </label>

        </form>
    )
}

export default ProfileDataForm