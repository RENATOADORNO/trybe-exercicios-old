import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    )
  }
}
