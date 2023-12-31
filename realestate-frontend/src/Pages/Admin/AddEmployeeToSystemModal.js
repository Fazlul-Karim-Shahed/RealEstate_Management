import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { addEmployeeSystemAccount } from '../../Api/EmployeeApi'

export default function AddEmployeeToSystemModal(props) {

    const [state, setState] = useState({
        email: '',
        password: '',
    })


    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        addEmployeeSystemAccount({
            ...state,
            role: 'employee',
            employeeId: props.selectedEmployeeForSystem._id
        }).then(data => {
            if (data.error) throw data.message
        })
            .catch(err => window.alert(err))

    }



    return (
        <div>

            <Modal isOpen={props.isOpen} toggle={props.toggle} size='lg'>

                <ModalHeader toggle={props.toggle}>Create Employee Account for {props.selectedEmployeeForSystem === undefined ? '' : props.selectedEmployeeForSystem.employeeName}</ModalHeader>

                <ModalBody>

                    <div>
                        <form onSubmit={e => handleSubmit(e)} action="">

                            <div className='my-4'>
                                <label className='me-3' htmlFor="email">Email: </label>
                                <input onChange={e => handleChange(e)} id='email' name='email' value={state.email} type="email" /> <br />
                            </div>

                            <div className='my-4'>
                                <label className='me-3' htmlFor="password">Password: </label>
                                <input onChange={e => handleChange(e)} id='password' name='password' value={state.password} type="text" /> <br />
                            </div> <br />

                            <button>Submit</button>
                        </form>
                    </div>

                </ModalBody>

            </Modal>

        </div>
    )
}
