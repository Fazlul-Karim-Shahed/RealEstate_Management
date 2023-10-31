import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { checkAuth, tokenDecode } from './Functions/AuthFunctions'
import { CHECK_AUTH, DECODE_TOKEN } from './Redux/ActionTypes'
import Navbar from './Components/Navbar'
import Router from './Routers/Router'
import axios from 'axios'

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    decodedToken: state.decodedToken
  }
}

export const App = (props) => {



  useEffect(() => {

    axios.get(process.env.REACT_APP_BACKEND_URL + '/api').then(data => {
      // console.log(data.data)
    })


    tokenDecode().then(data => {

      props.dispatch({
        type: DECODE_TOKEN,
        value: data
      })

    })

    checkAuth().then(data => {

      props.dispatch({
        type: CHECK_AUTH,
        value: data
      })


    })

  }, [])


  return (
    <div className="App">
      <Router />
    </div>
  )
}




export default connect(mapStateToProps)(App)