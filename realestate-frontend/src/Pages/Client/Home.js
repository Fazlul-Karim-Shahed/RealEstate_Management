import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'


const mapStateToProps = (state) => {

    console.log(state)
    return {

    }
}

export const Home = (props) => {
    return (
        <div>

            Home

        </div>
    )
}



export default connect(mapStateToProps)(Home)