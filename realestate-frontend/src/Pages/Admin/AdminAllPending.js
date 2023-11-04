import React from 'react'
import { connect } from 'react-redux'

export const AdminAllPending = (props) => {
  return (
    <div>All Pending</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllPending)