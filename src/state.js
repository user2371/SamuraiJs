let state = {
    profilePage: {
        postData: [
            { id: 1, message: "Hi", likesCount: 12, },
            { id: 2, message: "What's up", likesCount: 0, },
            { id: 3, message: "Good bye", likesCount: 5, },
        ],
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "Dimych", },
            { id: 2, name: "Andrey", },
            { id: 3, name: "Sveta", },
            { id: 4, name: "Sasha", },
            { id: 5, name: "Victor", },
            { id: 6, name: "Valera", },
        ],
        messagesData: [
            { id: 1, message: "Hi", },
            { id: 2, message: "What's up", },
            { id: 3, message: "I am fine thanks", },
            { id: 4, message: "Good bye", },
        ],
    },
}

export let bllAddPost = (postMessage) =>  {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost)
}

export default state;