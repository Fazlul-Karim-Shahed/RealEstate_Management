import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { DropdownItem, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasBody, OffcanvasHeader, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Fade } from 'react-reveal';


const mapStateToProps = (state) => {

    console.log(state)
    return {
        authenticated: state.authenticated,
        decodedToken: state.decodedToken
    }
}


export const Navbar = (props) => {

    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)


    window.onscroll = () => {

        if (true) {
            if (document.documentElement.scrollTop > 75) {
                document.getElementById('navbar').classList.add('position-fixed', 'top-0', 'bg-dark', 'w-100')
                document.getElementById('navbar').style.zIndex = '100'
                document.getElementById('navbar').style.opacity = '.9'
            }
            else {
                document.getElementById('navbar').classList.remove('position-fixed', 'top-0', 'bg-dark')
                document.getElementById('navbar').style.opacity = '1'

            }
        }
    }

    const toggle = () => setOpen(!open)
    const modalToggle = () => setModalOpen(!modalOpen)



    return (
        <div id='navbar'>
            <div className='container'>
                <div className='py-2 d-flex justify-content-between'>
                    <a href='/' className="logo d-flex align-items-center text-decoration-none text-warning">
                        {/* <img className='img-fluid logo' src="/Assets/logo.png" alt="" /> */}
                        <h4 className='fw-bold'>REMS</h4>
                    </a>


                    <div className="navbar_links my-3" >

                        <Link className='text-decoration-none mx-2 nav_a' to="/">Home</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/properties">Properties</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/about">About</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/contact">Contact</Link>

                        {props.authenticated ?

                            <UncontrolledDropdown className='d-inline'>

                                <DropdownToggle className='bg-transparent border-0 mb-1 mx-2 nav_a' caret>
                                    <span className=''>{props.decodedToken.username}</span>
                                </DropdownToggle>

                                <DropdownMenu>
                                    <DropdownItem><Link className='text-decoration-none nav_a text-dark' to="/profile">Profile</Link></DropdownItem>
                                    {props.authenticated && props.decodedToken != null && props.decodedToken.role === 'admin' ? <DropdownItem><Link className='text-decoration-none nav_a text-dark' to="/admin-panel">Admin panel</Link></DropdownItem> : ''}
                                    <DropdownItem divider />
                                    <DropdownItem><Link className='text-decoration-none nav_a text-dark' to="/logout">Logout</Link></DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>

                            : <Link className='text-decoration-none mx-2 nav_a' to="/signin">Login</Link>}



                        {/* {props.authenticated ? <Link className='text-decoration-none mx-2 nav_a' to="/logout">Logout</Link> : ''} */}

                        <button className='text-decoration-none mx-2 btn btn-outline-primary text-white mb-1' href="#">Submit Property</button>
                    </div>


                    <div onClick={toggle} id='navbar_threeDot' className="navbar_threeDot">
                        <div className='navbar_threeDotLine'></div>
                        <div className='navbar_threeDotLine'></div>
                        <div className='navbar_threeDotLine'></div>
                    </div>

                    <Offcanvas isOpen={open} toggle={toggle}>

                        <OffcanvasHeader toggle={toggle}></OffcanvasHeader>

                        {/* <Fade left cascade> */}
                        <OffcanvasBody className=''>

                            <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="/">Home</Link>
                            <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="/properties">Properties</Link>
                            <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="/about">About</Link>
                            <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="/contact">Contact</Link>



                            {props.authenticated ?

                                <div className='text-center py-2 mb-3'>
                                    <UncontrolledDropdown direction='' className='d-inline'>

                                        <DropdownToggle className='bg-transparent text-dark border-0' caret>
                                            <span className='h5'>{props.decodedToken.username}</span>
                                        </DropdownToggle>

                                        <DropdownMenu>
                                            <DropdownItem><Link onClick={toggle} className='off_canvas_a text-decoration-none h6' to="/profile">Profile</Link></DropdownItem>

                                            {props.authenticated && props.decodedToken != null && props.decodedToken.role === 'admin' ? <DropdownItem><Link onClick={toggle} className='off_canvas_a text-decoration-none h6' to="/admin-panel">Admin Panel</Link></DropdownItem> : ''}

                                            <DropdownItem divider />
                                            <DropdownItem><Link onClick={toggle} className='off_canvas_a text-decoration-none h6' to="/logout">Logout</Link></DropdownItem>
                                        </DropdownMenu>

                                    </UncontrolledDropdown>
                                </div>


                                : <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="/signin">Login</Link>}



                            <div className='text-center'>
                                <button className='text-decoration-none btn btn-outline-primary my-2' href="#">Submit Property</button>
                            </div>

                        </OffcanvasBody>
                        {/* </Fade> */}

                    </Offcanvas>


                </div>
            </div>

            {/* {modalOpen ? <Feedback open={modalOpen} toggle={modalToggle} /> : ''} */}

        </div>
    )
}


export default connect(mapStateToProps)(Navbar)
