import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { InputGroup, InputGroupText, Input, Toast, ToastHeader, ToastBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/AuthForm.css'
import Spinner from '../../Components/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { checkAuth, saveToken, tokenDecode } from '../../Functions/AuthFunctions'
import { CHECK_AUTH, DECODE_TOKEN } from '../../Redux/ActionTypes'


const mapStateToProps = (state) => ({})

const AuthForm = (props) => {

    const [spin, setSpin] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const toggle = () => setSpin(false)
    const navigate = useNavigate()

    const signInUrl = process.env.REACT_APP_BACKEND_URL + '/api/user/signin'
    const signUpUrl = process.env.REACT_APP_BACKEND_URL + '/api/user/signup'

    return (
        <div className='pt-5'>
            <Formik

                initialValues={props.mode === 'signup' ? {
                    name: '',
                    email: '',
                    password: ''
                } : {
                    email: '',
                    password: ''
                }
                }

                onSubmit={
                    (values) => {

                        setSpin(true)

                        axios.post(props.mode === 'signup' ? signUpUrl : signInUrl, props.mode === 'signup' ? {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                        } : {
                            email: values.email,
                            password: values.password,
                        })
                            .then(data => {



                                if (data.data.error) throw data.data.message
                                else {

                                    setSpin(false)
                                    console.log(data.data)
                                    setErrorMessage('')
                                    saveToken(data.data.value.token)
                                    tokenDecode().then(data => {

                                        props.dispatch({
                                            type: DECODE_TOKEN,
                                            value: data
                                        })

                                    })
                                    checkAuth().then(data => {

                                        props.dispatch({
                                            type: CHECK_AUTH,
                                            value: data
                                        })

                                        navigate('/')
                                        window.location.reload(false)
                                    })

                                }
                            })
                            .catch(err => {
                                setErrorMessage(err)
                                setSpin(false)
                            })



                    }
                }

            >
                {({ values, handleChange, handleSubmit }) => (
                    <div onClick={toggle} className='signup_form_width'>

                        <Toast className='w-100 px-2'>
                            <ToastHeader className=''>{props.mode === 'signin' ? 'Signin form' : 'Sign up form'}</ToastHeader>
                            <ToastBody>
                                <form onSubmit={handleSubmit} className='' action="">
                                    {props.mode === 'signup' ? <InputGroup className='my-3'>
                                        <InputGroupText><FontAwesomeIcon icon={faUser} /></InputGroupText>
                                        <Input
                                            onChange={handleChange}
                                            value={values.name}
                                            type='text'
                                            name='name'
                                            placeholder='User name'
                                        />
                                    </InputGroup> : ''}

                                    <InputGroup className='my-3'>
                                        <InputGroupText><FontAwesomeIcon icon={faEnvelope} /></InputGroupText>
                                        <Input
                                            onChange={handleChange}
                                            value={values.email}
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                        />
                                    </InputGroup>

                                    <InputGroup className='my-3'>
                                        <InputGroupText> <FontAwesomeIcon icon={faKey} /> </InputGroupText>
                                        <Input
                                            onChange={handleChange}
                                            value={values.password}
                                            type='text'
                                            name='password'
                                            placeholder='Password'
                                        />
                                    </InputGroup>
                                    <div className='text-center text-danger my-2 fw-bolder'>{errorMessage}</div>
                                    <div className='d-flex justify-content-between'>
                                        {props.mode === 'signup' ? <span className='mt-2'>Already have an account? <Link to='/signin'>Login</Link></span> : <span className='mt-2'>First time here? <Link to='/signup'>Signup</Link></span>}
                                        <button className='btn btn-success' type="submit">Submit</button>
                                    </div>

                                </form>
                            </ToastBody>
                        </Toast>




                    </div>
                )}

            </Formik>

            {spin ? <Spinner /> : ''}
        </div>
    )
}




export default connect(mapStateToProps)(AuthForm)