import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

  return {
    authenticated: state.authenticated,
    decodedToken: state.decodedToken
  }
}

export const Profile = (props) => {



  return (
    <div>
      {props.decodedToken === null ? '' : props.decodedToken.username}
    </div>
  )
}




export default connect(mapStateToProps)(Profile)