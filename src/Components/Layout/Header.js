import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
            <h1>Rahul Kumar</h1><br/>
            <Link to="/blog" style={linkStyle}>Blog</Link> | <Link to="/mywork" style={linkStyle}>My Work</Link> | <Link to="/resume" style={linkStyle}>Resume</Link> | <Link to="/" style={linkStyle}>About</Link> | <Link to="/contact" style={linkStyle}>Contact Me</Link>
        </header>
      </div>
    )
  }
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}