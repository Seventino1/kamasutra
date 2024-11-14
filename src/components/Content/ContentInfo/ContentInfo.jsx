import React, { Component } from "react";
import styles from "./ContentInfo.module.css";

class ContentInfo extends Component {
  render() {
    return (
      <div>
        <img
          src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
          alt="main-image"
          className={styles.image}
        />

        <div>
          <img
            src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="main-image"
            className={styles.image}
          />
        </div>

        <div className={styles.descriptionVlog}>ava + description</div>
      </div>
    );
  }
}

export default ContentInfo;
