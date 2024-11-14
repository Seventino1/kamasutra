import React, { Component } from "react";
import styles from "./Message.module.css";

class Message extends Component {
  render() {
    return <div className={styles.message}>{this.props.text}</div>;
  }
}

export default Message;
