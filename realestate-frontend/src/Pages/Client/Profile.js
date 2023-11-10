import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'

const mapStateToProps = (state) => {

  return {
    authenticated: state.authenticated,
    decodedToken: state.decodedToken
  }
}

export const Profile = (props) => {



  return (
    <div>
      <div style={{ backgroundImage: "linear-gradient(to bottom, #2d2a62, black)" }}><Navbar /></div>
      {props.decodedToken === null ? '' : props.decodedToken.username}
    </div>
  )
}




export default connect(mapStateToProps)(Profile)