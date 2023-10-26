import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Fade } from 'react-reveal';

export default function Navbar() {

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
                        <h5>REMS</h5>
                    </a>


                    <div className="navbar_links my-3" >

                        <Link className='text-decoration-none mx-2 nav_a' to="/">Home</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/properties">Properties</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/about">About</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/contact">Contact</Link>
                        <Link className='text-decoration-none mx-2 nav_a' to="/account">My Account</Link>
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
                            <Link onClick={toggle} className='off_canvas_a text-decoration-none d-block py-3 text-center h5 ' to="account">My Account</Link>
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
