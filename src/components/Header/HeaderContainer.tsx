import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

class HeaderContainer extends React.Component<MapStateType> {

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

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps)(HeaderContainer);