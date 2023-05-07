import React from "react";
import Contact from "./Contact";
import s from './ProfileData.module.css'
import editMode from '../../common/images/EditMode.png'

const ProfileData = (props: any) => {
    return (
        <div className={s.container}>
            {/*<div className={s.nameWrapper}><i>{props.profile.fullName}</i> {props.isOwner && <button onClick={props.changeEditMode} className={s.buttonEdit}>edit</button>}</div>*/}
            <div className={s.nameWrapper}><i>{props.profile.fullName}</i> {props.isOwner &&
                <img src={editMode} onClick={props.changeEditMode} className={s.buttonEdit}/>}</div>
            <div className={s.information}>
                <div><b>About me: </b>{props.profile.aboutMe}</div>
                <div><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                {props.profile.lookingForAJob &&
                    <div><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</div>}
                <div><b>Contacts: </b>{props.profile.contacts && Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={props.profile?.contacts && props.profile.contacts[key as keyof typeof props.profile.contacts]}/>
                })}</div>
            </div>

        </div>
    )
}

export default ProfileData