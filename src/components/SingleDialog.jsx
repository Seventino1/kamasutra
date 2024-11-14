import React, { Component } from "react";
import styles from "./SingleDialog.module.css";
import Dialogs from "../components/Dialogs/Dialogs";

const SingleDialog = (props) => {
  return (
    <div>
      <Dialogs dialogs={props.dialogs} messages={props.messages} />
    </div>
  );
};

export default SingleDialog;
