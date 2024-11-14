import React, { Component } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              [isActive ? styles.active : ""].join(" ")
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              [isActive ? styles.active : ""].join(" ")
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              [isActive ? styles.active : ""].join(" ")
            }
          >
            News
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              [isActive ? styles.active : ""].join(" ")
            }
          >
            Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              [isActive ? styles.active : ""].join(" ")
            }
          >
            Settings
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
