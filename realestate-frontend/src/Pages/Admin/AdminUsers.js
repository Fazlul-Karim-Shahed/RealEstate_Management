import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {


  return {
    allUsers: state.allUsers
  }
}

export const AdminUsers = (props) => {

  let allUsersShow

  allUsersShow = props.allUsers.map(item => {

    return (
      <h5>{item.username} ( {item.role} )</h5>
    )

  })


  return (
    <div>
      <div className="p-5">
        <h3>{props.allUsers.length} users found</h3> <br /><br />
        {allUsersShow}
      </div>
    </div>
  )
}



export default connect(mapStateToProps)(AdminUsers)