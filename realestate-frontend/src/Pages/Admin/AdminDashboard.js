import React from 'react'
import { connect } from 'react-redux'

export const AdminDashboard = (props) => {
  return (
    <div>Admin Dashboard</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)