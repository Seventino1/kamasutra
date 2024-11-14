import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postItem = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostItem = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostItem.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={styles.postBlock}>My posts</div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostItem}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>
          <h3>Add post</h3>
        </button>
      </div>
      <div className={styles.posts}>{postItem}</div>
    </div>
  );
};

export default MyPosts;
