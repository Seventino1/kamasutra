import React from "react";
import styles from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ContentInfo from "./ContentInfo/ContentInfo";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <ContentInfo />
      <MyPosts
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Content;

//
