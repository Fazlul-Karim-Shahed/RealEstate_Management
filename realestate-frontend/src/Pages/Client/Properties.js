import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'
import { getAllProperties } from '../../Api/PropertiesApi'
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
      <div style={{ backgroundImage: "linear-gradient(to bottom, #2d2a62, black)" }}><Navbar /></div>
      {allPropertiesShow}
    </div>
  )
}



export default connect(mapStateToProps)(Properties)