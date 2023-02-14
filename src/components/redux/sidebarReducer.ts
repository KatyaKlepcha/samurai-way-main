export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: number
    name: string
}


let initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Nastya'},
        {id: 1, name: 'Nata'},
        {id: 1, name: 'Alyona'},
    ]
}

type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}

export default sidebarReducer