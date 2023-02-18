import React from 'react';
import Header from "./Header";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";

class HeaderContainer extends React.Component<HeaderType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response: any) => {
            console.log('response', response)
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
    }


    render() {
        return (
            <Header {...this.props}/>
        );
    }
}


type MapStateType = {
    isAuth: boolean
    login: string
}

type MapDispatchType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

type HeaderType = MapStateType & MapDispatchType


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);