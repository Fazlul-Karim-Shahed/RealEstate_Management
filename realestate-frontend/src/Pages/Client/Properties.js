import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'
import { getAllProperties } from '../../Functions/PropertiesFunctions'
import { GET_ALL_PROPERTIES } from '../../Redux/ActionTypes'


const mapStateToProps = (state) => {

  console.log(state.allProperties)

  return {
    allProperties: state.allProperties
  }
}

export const Properties = (props) => {


  useEffect(() => {

    getAllProperties().then(data => {
      if (!data.error) {
        props.dispatch({
          type: GET_ALL_PROPERTIES,
          value: data.data
        })
      }
    })

  }, [])



  let allPropertiesShow

  if (props.allProperties.length === 0) { allPropertiesShow = <h5>No properties found</h5> }

  allPropertiesShow = props.allProperties.map((item, index) => {

    return (
      <h3 className='p-5'> {index + 1}. {item.tittle}</h3>
    )

  })


  return (
    <div>
      <div className="bg-dark"><Navbar /></div>
      {allPropertiesShow}
    </div>
  )
}



export default connect(mapStateToProps)(Properties)