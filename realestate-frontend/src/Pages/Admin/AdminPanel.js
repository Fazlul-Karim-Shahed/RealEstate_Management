import { faCaretRight, faCirclePlus, faHouse, faHouseCircleCheck, faRightFromBracket, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { GET_ALL_EMPLOYEE, GET_ALL_SHAREHOLDER } from '../../Redux/ActionTypes'
import { getAllEmployee } from '../../Api/EmployeeApi'
import { getAllShareholder } from '../../Api/ShareholderApi'


const mapStateToProps = (state) => {

    return {

    }
}

export const AdminPanel = (props) => {


    useEffect(() => {

        getAllShareholder().then(data => {
            console.log(data)
            props.dispatch({
                type: GET_ALL_SHAREHOLDER,
                value: data
            })
        })

        getAllEmployee().then(data => {
            props.dispatch({
                type: GET_ALL_EMPLOYEE,
                value: data
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




            <div className="row m-0 h-100">
                <div style={{ height: '100vh' }} className="col-2 bg-dark text-white p-0">

                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'><FontAwesomeIcon icon={faHouse} /> Main</div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/dashboard' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>Dashboard</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>


                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'><FontAwesomeIcon icon={faUserGear} /> Users</div>

                        <div className='mb-2'>
                            <Link to='/admin-panel/pending' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>Pending</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/shareholder' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>All Shareholder</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>

                        <div className='mb-2'>
                            <Link to='/admin-panel/employee' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>All Employee</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>


                    <div className='m-4 pb-2'>
                        <div className='opacity-50 mb-3'><FontAwesomeIcon icon={faHouseCircleCheck} /> Property Management</div>
                        <div className='mb-2'>
                            <Link to='/admin-panel/properties' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>All Properties</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>

                        <div className='mb-2'>
                            <Link to='/admin-panel/properties/add' className='ps-4 d-flex justify-content-between text-decoration-none'>
                                <span className='text-light'>Add Properties</span>
                                <span className='ms-auto'> <FontAwesomeIcon icon={faCaretRight} /> </span>
                            </Link>
                        </div>
                    </div>




                </div>
                <div className="col-10 p-0 bg-light">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}


export default connect(mapStateToProps)(AdminPanel)