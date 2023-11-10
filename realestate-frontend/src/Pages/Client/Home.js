import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../Components/Navbar'


const mapStateToProps = (state) => {

    return {

    }
}

export const Home = (props) => {
    return (
        <div>
            <div style={{ backgroundImage: "linear-gradient(to bottom, #2d2a62, black)"}}><Navbar /></div>
            Home

        </div>
    )
}



export default connect(mapStateToProps)(Home)