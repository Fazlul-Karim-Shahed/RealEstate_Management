import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'

export const Properties = (props) => {
  return (
    <div>
      <div className="bg-dark"><Navbar /></div>
      Properties
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Properties)