import React from 'react'
import { connect } from 'react-redux'
import Home from '../Pages/Client/Home'
import AdminPanel from '../Pages/Admin/AdminPanel'
import { Route, Routes } from 'react-router'
import Properties from '../Pages/Client/Properties'
import About from '../Pages/Client/About'
import Contact from '../Pages/Client/Contact'
import AuthForm from '../Pages/Client/AuthForm'
import Logout from '../Pages/Client/Logout'
import Profile from '../Pages/Client/Profile'

const mapStateToProps = (state) => {

  console.log(state)

  return {
    authenticated: state.authenticated,
    decodedToken: state.decodedToken
  }
}


export const Router = (props) => {

  let adminRoutes = ''

  if (props.authenticated && props.decodedToken && props.decodedToken.hasOwnProperty('role')) {
    if (props.decodedToken.role === 'admin') {

      adminRoutes =

        <Route path='/admin-panel' element={<AdminPanel />} >
          {/* <Route path='catalog' element={<AdminCatalog />} /> */}

        </Route>

    }
  }


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<AuthForm mode='signup' />} />
        <Route path='/signin' element={<AuthForm mode='signin' />} />
        <Route path='/logout' element={<Logout />} />

        {adminRoutes}

        <Route path='*' element={<h1>Sorry page not found</h1>} />
      </Routes>
    </div>

  )
}



export default connect(mapStateToProps)(Router)