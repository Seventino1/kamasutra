let store = {
  _state: {
    postPage: {
      postData: [
        { id: 1, message: "Hello, world", likesCount: 2 },
        { id: 2, message: "It's my first message", likesCount: 21 },
        { id: 3, message: "Hello!", likesCount: 22 },
        { id: 4, message: "Hello, wazzZz", likesCount: 23 },
      ],
      newPostText: "it-kamasutra",
    },

    dilogsPage: {
      dialogsData: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Katerina" },
        { id: 3, name: "Katusha" },
        { id: 4, name: "Ketrin" },
        { id: 5, name: "Ekaterinburg" },
      ],
      messagesData: [
        { id: 1, text: "Hey" },
        { id: 1, text: "How are you?!" },
        { id: 1, text: "Yo!" },
        { id: 1, text: "wazzup" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.postPage.newPostText,
      likesCount: 0,
    };
    this._state.postPage.postData.push(newPost);
    this._state.postPage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.postPage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
export default store;
