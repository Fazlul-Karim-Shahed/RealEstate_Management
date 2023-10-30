import React from 'react'
import { connect } from 'react-redux'

export const AdminProperties = (props) => {
  return (
    <div>Admin Properties</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProperties)