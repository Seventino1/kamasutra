import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Content from "./components/Content/Content.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleDialog from "./components/SingleDialog.jsx";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="profile"
              element={
                <Content
                  posts={props.state.postPage.postData}
                  addPost={props.addPost}
                  newPostText={props.state.postPage.newPostText}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              index
              path="*"
              element={
                <Content
                  posts={props.state.postPage.postData}
                  addPost={props.addPost}
                  newPostText={props.state.postPage.newPostText}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="dialogs"
              element={
                <Dialogs
                  dialogs={props.state.dilogsPage.dialogsData}
                  messages={props.state.dilogsPage.messagesData}
                />
              }
            />
            <Route
              path="/dialogs/:id"
              element={
                <SingleDialog
                  dialogs={props.state.dilogsPage.dialogsData}
                  messages={props.state.dilogsPage.messagesData}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//
// posts={props.state.postPage.postData}
//
//
