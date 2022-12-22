import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {RootStateType} from './components/redux/store'
import store from "./components/redux/redux-store";

type AppPropsType = {
    state: RootStateType
}


const App = (props: AppPropsType) => {
    return (

        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'App-content'}>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={store.dispatch.bind(store)}/>}/>
                <Route path='/messages'
                       render={() => <Dialogs state={props.state.dialogsPage} dispatch={store.dispatch.bind(store)} />}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
