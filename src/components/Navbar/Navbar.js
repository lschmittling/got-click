//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className='nav-wrapper'>
          <span className="itemLeft">GAME OF THRONES</span>
          <span className="itemRight">SCORE: {this.props.score}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;