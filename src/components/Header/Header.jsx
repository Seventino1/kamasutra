import React, { Component } from "react";
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/640px-LEGO_logo.svg.png"
          alt="lego"
        />
      </header>
    );
  }
}

export default Header;
