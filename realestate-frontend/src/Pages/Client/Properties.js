import React from 'react'
import { connect } from 'react-redux'

export const Properties = (props) => {
  return (
    <div>Properties</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Properties)