import {ActionsTypes, FriendsType, SidebarType} from "./store";

let initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Nastya'},
        {id: 1, name: 'Nata'},
        {id: 1, name: 'Alyona'},
    ]
}

type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    return state
}

export default sidebarReducer