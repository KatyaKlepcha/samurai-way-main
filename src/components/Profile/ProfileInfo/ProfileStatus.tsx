import React, {ChangeEvent} from 'react'


type ProfileStatusType = {
    status?: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.state.status && this.props.updateUserStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return <div>
            {!this.state.editMode ?
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
                </div> :
                <div><input autoFocus onBlur={this.deActivateEditMode} onChange={this.onChangeStatus}
                            value={this.state.status}/>
                </div>}
        </div>
    }
}

export default ProfileStatus