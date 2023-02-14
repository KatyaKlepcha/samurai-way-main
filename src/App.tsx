import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (

        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'App-content'}>
                {/*<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={store.dispatch.bind(store)}/>}/>*/}
                <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path = '/users' render = {()=><UsersContainer/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
