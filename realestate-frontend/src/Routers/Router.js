import React from 'react'
import { connect } from 'react-redux'
import Home from '../Pages/Client/Home'
import AdminPanel from '../Pages/Admin/AdminPanel'
import { Route, Routes } from 'react-router'
import Properties from '../Pages/Client/Properties'
import AdminAllProperties from '../Pages/Admin/AdminAllProperties'
import About from '../Pages/Client/About'
import Contact from '../Pages/Client/Contact'
import AuthForm from '../Pages/Client/AuthForm'
import Logout from '../Pages/Client/Logout'
import Profile from '../Pages/Client/Profile'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AdminUsers from '../Pages/Admin/AdminUsers'
import NotFound from '../Pages/Client/NotFound'
import AdminAddProperties from '../Pages/Admin/AdminAddProperties'

const mapStateToProps = (state) => {

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
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='properties' element={<AdminAllProperties />} />
          <Route path='properties/add' element={<AdminAddProperties />} />
          <Route path='users' element={<AdminUsers />} />

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

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  )
}



export default connect(mapStateToProps)(Router)