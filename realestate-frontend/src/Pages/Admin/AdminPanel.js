import { faCaretRight, faHouse, faHouseCircleCheck, faRightFromBracket, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { GET_ALL_USERS } from '../../Redux/ActionTypes'


const mapStateToProps = (state) => {

    return{
        
    }
}

export const AdminPanel = (props) => {


    useEffect(() => {

        axios.get(process.env.REACT_APP_BACKEND_URL + '/api/user', {
            headers: {
                authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME)
            }
        }).then(data => {
            props.dispatch({
                type: GET_ALL_USERS,
                value: data.data.data
            })
        })



    }, [])





    return (
        <div>
            <div className='bg-warning py-2'>
                <div className="d-flex container justify-content-between">
                    <div className='fw-bold'>
                        <div className='d-flex h-100 align-items-center h5 fw-bold'>REMS ADMIN PANEL</div>
                    </div>
                    <div>
                        <Link to='/' className='mx-2 text-decoration-none text-dark btn btn-secondary text-white pb-2'> Leave <FontAwesomeIcon icon={faRightFromBracket} /> </Link>
                    </div>
                </div>
            </div>




            <div className="row m-0">
                <div style={{ height: '100vh' }} className="col-2 bg-dark text-white p-0">

                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'>Main</div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/dashboard' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>
                                    <FontAwesomeIcon icon={faHouse} /> Dashboard
                                </span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>


                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'>Users</div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/users' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'><FontAwesomeIcon icon={faUserGear} /> All users</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>


                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'>Property Management</div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/properties' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'><FontAwesomeIcon icon={faHouseCircleCheck} /> All Properties</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>




                </div>
                <div className="col-10 p-0">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}


export default connect(mapStateToProps)(AdminPanel)