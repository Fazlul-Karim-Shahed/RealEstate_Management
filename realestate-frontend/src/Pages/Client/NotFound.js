import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../Styles/NotFound.css'

export const NotFound = (props) => {
    return (
        <div>
            <div className='text-center position-fixed d-flex flex-column w-100 justify-content-center h-100 align-items-center'>
                <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" className='img-fluid w-50 mb-4' alt="" />
                <h1>Sorry page not found!</h1>
                <div><Link to='/'>Go to home</Link></div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)