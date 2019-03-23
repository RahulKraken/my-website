import React, { Component } from 'react'

// import the profile image
import ProfileImage from '../../assets/profileImage@2x.png';

export default class About extends Component {
  render() {
    return (
      // content
      <div>
        <div style={upperStyle}>
          <div style={containerStyle}>
            <div style={{flex: '1'}}>
              <img src={ProfileImage} alt='Rahul Kumar' style={profileImageStyle}/>
            </div>
            <div style={headlineStyle}>Hey, I'm<br/><span style={torquoise}>Rahul</span>.
            </div>
          </div>
        </div>
        <div style={lowerStyle}>
          <div><p style={pStyle}>
          I'm a CS Undergrad at BIT Mesra. I'm passionate about new technologies, My current areas of interest are Android Development, UI/UX design, backend development and Machine Learning.<br/><br/>My Hobbies include playing guitar and football.
          </p></div>
        </div>
      </div>
    )
  }
}

// styles
const containerStyle = {
  display: 'flex',
  textAlign: 'center',
  paddingTop: '50px',
  width: '1300px'
}

const lowerStyle = {
  textAlign: 'center',
  paddingTop: '100px'
}

const upperStyle = {
  display: 'inline-block'
}

const profileImageStyle = {
  height: '368px',
  width: '374px',
}

const headlineStyle = {
  paddingTop: '40px',
  fontFamily: 'Satisfy',
  fontSize: '125px',
  flex: '1'
}

const torquoise = {
  color: '#05CF91'
}

const pStyle = {
  display: 'inline-block',
  fontFamily: 'Raleway',
  fontSize: '22px',
  width: '720px',
  height: '230px',
  textAlign: 'center'
}