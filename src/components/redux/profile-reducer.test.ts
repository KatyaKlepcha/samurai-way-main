import profileReducer, {addNewPostActionCreator, deletePost} from "./profileReducer"

let state = {
    posts: [
        {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
        {id: 2, message: 'did you see my message?', likesCount: 20},
    ],
    profile: null,
    status: ''
}

it('length of posts should be added', ()=>{
    //test data

    //2.action
    let newState = profileReducer(state, addNewPostActionCreator('Hey-hey-hey'))

    //3.expectation
    expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', ()=>{
    //test data

    //2.action
    let newState = profileReducer(state, addNewPostActionCreator('Hey-hey-hey'))

    //3.expectation
    expect(newState.posts[2].message).toBe('Hey-hey-hey')
})

it('after deletion, the length of the array should decrease', ()=>{
    //test data

    //2.action
    let newState = profileReducer(state, deletePost(1))

    //3.expectation
    expect(newState.posts.length).toBe(1)
})


it("after deletion the length shouldn't be decrease if id is incorrect", ()=>{
    //test data

    //2.action
    let newState = profileReducer(state, deletePost(100))

    //3.expectation
    expect(newState.posts.length).toBe(2)
})
