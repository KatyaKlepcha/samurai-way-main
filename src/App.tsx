import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./components/redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className={'App-content'}>
                    <Route exact path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                    <Route path='/messages'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        )
            ;
    }
}

type MapStateType = {
    initialized: boolean
}

type MapDispatchType = {
    initializeApp: () => void
}

type AppPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        initialized: state.app.initialized,
    }
}


export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);
