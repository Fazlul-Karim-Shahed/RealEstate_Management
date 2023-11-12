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
        decodedToken: state.decodedToken
    }
}

export const AdminPanel = (props) => {


    useEffect(() => {

    }, [])



    const handleChange = (e) => {

        if (e.target.checked) {

            document.getElementsByClassName('left_bar')[0].classList.remove('d-none')
            document.getElementsByClassName('left_bar')[0].classList.add('d-block')
        }

        else {
            document.getElementsByClassName('left_bar')[0].classList.remove('d-block')
            document.getElementsByClassName('left_bar')[0].classList.add('d-none')
        }

    }



    return (
        <div>
            <div style={{ backgroundImage: "linear-gradient(to right, #2d2a62 , black)" }} className='py-2'>
                <div className="d-flex container justify-content-between">
                    <div className='fw-bold'>
                        <div className='d-flex h-100 align-items-center h5 fw-bold'>
                            {/* SR Property <span className='small ms-2'> ({props.decodedToken.role} panel)</span> */}
                            <img className='img-fluid w-25' src="/Assets/logo.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <form className='form-check form-switch d-inline' action="">
                            <input
                                className='form-check-input mt-3 me-4'
                                defaultChecked
                                type="checkbox"
                                role='switch'
                                onChange={e => handleChange(e)}
                                name=""
                                id="" />
                        </form>
                        <Link to='/' className='mx-2 text-decoration-none text-dark btn btn-outline-warning btn-sm text-white mt-2 '> <FontAwesomeIcon icon={faRightFromBracket} /> Leave </Link>
                    </div>
                </div>
            </div>




            <div className="row m-0 h-100">
                <div style={{ height: '100vh' }} className="col-2 bg-dark text-white p-0 left_bar">

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

                    {/* {window.location.pathname === '/admin-panel' ? 'hey' : <Outlet />} */}
                    <Outlet />
                </div>
            </div>

        </div>
    )
}


export default connect(mapStateToProps)(AdminPanel)