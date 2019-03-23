import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* nav bar */}
        <header style={headerStyle}>
            <nav>
              {/* inline-block to center it */}
              <div style={{display: 'inline-block'}}>
                <ul style={navStyle}>
                  <li style={liStyle}><Link to='/blog' style={linkStyle}>Blog</Link></li>
                  <li style={liStyle}><Link to='/mywork' style={linkStyle}>My Work</Link></li>
                  <li style={liStyle}><Link to='/resume' style={linkStyle}>Resume</Link></li>
                  <li style={liStyle}><Link to='/' style={linkStyle}>About</Link></li>
                  <li style={liStyle}><Link to='/contact' style={linkStyle}>Contact Me</Link></li>
                </ul>
              </div>
            </nav>
        </header>
      </div>
    )
  }
}


// styles
const navStyle = {
  linkStyle: 'none'
}

const liStyle = {
  display: 'inline',
  float: 'left',
  marginLeft: '40px'
}

const linkStyle = {
  display: 'block',
  textDecoration: 'none',
  color: '#000'
}

const headerStyle = {
  fontFamily: 'Raleway',
  color: '#000',
  textAlign: 'center',
  padding: '10px',
  paddingTop: '46px'
}