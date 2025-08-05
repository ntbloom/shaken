import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>©{new Date().getFullYear()} ntbloom</p>
      </footer>
    );
  }
}

export default Footer;
