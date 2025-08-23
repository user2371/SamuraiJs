import profileReducer, { addPostActionCreator, deletePostAC } from "./profile-reducer";

let state = {
    postData: [
        { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0, },
        { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0, },
        { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0, },
    ]
}

it("Length of posts array should be incremented", () => {
    // початкові дані
    let action = addPostActionCreator("some new post for testing");

    // якась дія
    let stateCopy = profileReducer(state, action);

    // очікуваний результат

    expect(stateCopy.postData.length).toBe(4)
})

it("New added message should be the same that you provide after added new post", () => {
    // початкові дані
    let action = addPostActionCreator("some new post for testing");

    // якась дія
    let stateCopy = profileReducer(state, action);

    // очікуваний результат

    expect(stateCopy.postData[3].message).toBe("some new post for testing")
})

it("Length of postData should be decrremented after deleting", () => {
    // початкові дані
    let action = deletePostAC(0);

    // якась дія
    let stateCopy = profileReducer(state, action);

    // очікуваний результат
    expect(stateCopy.postData.length).toBe(2)
})

