import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { addShareholderSystemAccount } from '../../Api/ShareholderApi'

export default function AdminShareholderAddSystemModal(props) {

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

        console.log({
            ...state,
            shareholderId: props.selected._id
        })

        addShareholderSystemAccount({
            ...state,
            shareholderId: props.selected._id
        }).then(data => {
            console.log(data)
            if (data.error) throw data.message
        })
            .catch(err => window.alert(err))

    }



    return (
        <div>

            <Modal isOpen={props.isOpen} toggle={props.toggle} size='lg'>

                <ModalHeader toggle={props.toggle}>Create shareholder account for {props.selected === undefined ? '' : props.selected.shareholderName}</ModalHeader>

                <ModalBody>

                    <div>
                        <form onSubmit={e => handleSubmit(e)} action="">

                            <div className='my-4'>
                                <label className='me-3' htmlFor="email">Email: </label>
                                <input required onChange={e => handleChange(e)} id='email' name='email' value={state.email} type="email" /> <br />
                            </div>

                            <div className='my-4'>
                                <label className='me-3' htmlFor="password">Password: </label>
                                <input required onChange={e => handleChange(e)} id='password' name='password' value={state.password} type="text" /> <br />
                            </div> <br />

                            <button>Submit</button>
                        </form>
                    </div>

                </ModalBody>

            </Modal>

        </div>
    )
}
