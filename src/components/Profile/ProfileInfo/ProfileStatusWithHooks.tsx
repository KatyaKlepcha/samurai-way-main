import React, {ChangeEvent, useState} from 'react'
import {useAppDispatch} from "../../redux/redux-store";


type ProfileStatusType = {
    status?: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props:ProfileStatusType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const dispatch = useAppDispatch()

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        status && props.updateUserStatus(status)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode ?
            <div><span onDoubleClick={activateEditMode}>{status || '--------'}</span>
            </div> :
            <div><input autoFocus onBlur={deActivateEditMode} onChange={onChangeStatus}
                        value={status}/>
            </div>}
    </div>
}

export default ProfileStatusWithHooks