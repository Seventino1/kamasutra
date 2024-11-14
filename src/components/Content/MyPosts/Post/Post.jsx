import React, { Component } from "react";
import styles from "./Post.module.css";

class Post extends Component {
  render(props) {
    return (
      <div className={styles.posts}>
        <div className={styles.item}>
          <img
            className={styles.image}
            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          {this.props.message}
        </div>
        <div className={styles.item}>
          <span className={styles.like}>like</span> {this.props.likesCount}
        </div>
      </div>
    );
  }
}

export default Post;
