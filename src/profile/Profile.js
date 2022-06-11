import { PropTypes } from 'prop-types'
import React from 'react'


const Profile = (props) => {
  
  return (
    <div style={props.style}>
      <h1>{props.fullname}</h1>
      <h1>{props.bio}</h1>
      <h2>{props.profession}</h2>
      <h3>{props.children}</h3>
      {alert()}
    </div>
  )
}
Profile.defaultProps={fullname:"said"}
Profile.propTypes={bio:PropTypes.number}
export default Profile
