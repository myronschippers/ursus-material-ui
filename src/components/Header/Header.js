import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <AppBar className="hdSpacer" position="relative">
          <h1>React with Material-UI</h1>
        </AppBar>
      </header>
    );
  }
}

export default Header;
