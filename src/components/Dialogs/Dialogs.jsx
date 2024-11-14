import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "../Message/Message";

const DialogsItem = (props) => {
  return (
    <div>
      <div className={styles.dialog}>
        <NavLink
          to={"/dialogs/" + props.id}
          className={({ isActive }) =>
            [isActive ? styles.active : ""].join(" ")
          }
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogsItem id={d.id} name={d.name} />
  ));

  let messagesItem = props.messages.map((m) => (
    <Message id={m.id} text={m.text} />
  ));

  let newMessageItem = React.createRef();

  let newMessage = () => {
    let textMessage = newMessageItem.current.value;
    alert(textMessage);
  };
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesItem}</div>
      </div>
      <div className={styles.textArea}>
        <textarea ref={newMessageItem}></textarea>
        <button onClick={newMessage}>Отправить</button>
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;
