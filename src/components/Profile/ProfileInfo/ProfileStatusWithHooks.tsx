import React, {ChangeEvent, useEffect, useState} from 'react'


type ProfileStatusType = {
    status?: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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