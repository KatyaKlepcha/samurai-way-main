import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";

class HeaderContainer extends React.Component<HeaderType> {

    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
}

type HeaderType = MapStateType & MapDispatchType


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);