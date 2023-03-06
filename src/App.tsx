import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (

        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className={'App-content'}>
                {/*<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={store.dispatch.bind(store)}/>}/>*/}
                <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
