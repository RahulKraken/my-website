import React, { Component } from 'react'

// import the profile image
import ProfileImage from '../../assets/profileImage@2x.png';

export default class About extends Component {
  render() {
    return (
      // content
      <div>
        <div className='upperPart' style={upperStyle}>
          <div>
            <img src={ProfileImage} alt='Rahul Kumar' style={profileImageStyle}/>
          </div>
          <div style={headlineStyle}>Hey, I'm<br/><span style={torquoise}>Rahul</span>.
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
const upperStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: '50px'
}

const lowerStyle = {
  textAlign: 'center',
  paddingTop: '100px'
}

const profileImageStyle = {
  display: 'block',
  height: '368px',
  width: '374px',
  flex: '1',
  marginLeft: '396px'
}

const headlineStyle = {
  paddingTop: '50px',
  display: 'block',
  fontFamily: 'Satisfy',
  fontSize: '125px',
  marginLeft: '231px',
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