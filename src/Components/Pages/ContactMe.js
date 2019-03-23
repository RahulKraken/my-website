import React, { Component } from 'react';

// import assets
import LinkedinIcon from '../../assets/linkedin_icon.png';
import GithubIcon from '../../assets/github_icon.png';
import FacebookIcon from '../../assets/facebook_icon.png';
import TwitterIcon from '../../assets/twitter_icon.png';

export default class ContactMe extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}>
          <div><span style={findMeLabelStyle}>
          Find me here</span></div>
          <div style={{display: 'inline-block'}}>
            <ul style={navStyle}>
              <li style={fliStyle}><a href="https://www.linkedin.com/in/rahul-kumar-369736144/"><img style={iconStyle} src={LinkedinIcon} alt="LinkedIn"/></a></li>
              <li style={liStyle}><a href="https://github.com/RahulKraken"><img src={GithubIcon} style={iconStyle} alt="Github"/></a></li>
              <li style={liStyle}><a href="https://www.facebook.com/profile.php?id=100007563342093"><img src={FacebookIcon} style={iconStyle} alt="Facebook"/></a></li>
              <li style={liStyle}><a href="https://twitter.com/Rahul_k_rocx"><img src={TwitterIcon} style={iconStyle} alt="Twitter"/></a></li>
            </ul>
          </div>
        </div>
        {/* <div>
          <div>
            <span style={contactmeStyle}>Tell me what you think</span>
          </div>
          <div>
            <form>
              <span>Name:</span><input type="text" name="name" style={inputStyle}/><br/>
              <span>Email:</span><input type="text" name="email" style={inputStyle}/><br/>
              <span>Message:</span><textarea id="textArea" name="message" rows="10" cols="70" style={inputStyle}/><br/>
            </form>
          </div>
        </div> */}
      </div>
    )
  }
}

// styles
const findMeLabelStyle = {
  display: 'inline-block',
  paddingTop: '50px',
  fontFamily: 'Raleway'
}
const iconStyle = {
  height: '30px',
  width: '30px'
}

const navStyle = {
  linkStyle: 'none',
  paddingTop: '30px'
}

const liStyle = {
  display: 'inline',
  float: 'left',
  marginLeft: '40px'
}

const fliStyle = {
  display: 'inline',
  float: 'left'
}

// const contactmeStyle = {}
// const inputStyle = {
//   marginLeft: '10px'
// }