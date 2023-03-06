import React from 'react'
import {ProfilePropsType} from "../Profile";


class ProfileStatus extends React.Component<ProfilePropsType> {
    state = {
        editMode: false
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
    }

    render() {
        return <div>
            {!this.state.editMode ?
                <div><span onDoubleClick={this.activateEditMode}>{this.props.profile?.fullName}</span>
                </div> :
                <div><input autoFocus onBlur={this.deActivateEditMode} value={this.props.profile?.fullName}/>
                </div>}
        </div>
    }
}

export default ProfileStatus