import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Permissions } from '../../Functions/Permissions'
import { getAEmployeeSystemAccount, updateEmployeeAccessPermission } from '../../Api/EmployeeApi'

export default function AdminEmployeePermissionModal(props) {



    useEffect(() => {
        getAEmployeeSystemAccount(props.selectedEmployee._id).then(data => {
            setEmployeePermission([...data.data.accessPermission])
        })
    }, [])


    const [permissionState, setPermissionState] = useState({})
    const [tempAdminTime, setTempAdminTime] = useState('')
    const [employeePermission, setEmployeePermission] = useState([])

    // console.log(employeePermission)

    let handleChange = (e) => {

        if (e.target.type === 'datetime-local') {
            setTempAdminTime(new Date(e.target.value).toLocaleString())
        }
        else {
            setPermissionState({
                ...permissionState,
                [e.target.name]: e.target.checked
            })
        }

    }

    let handleSubmit = (e) => {

        e.preventDefault()
        let permissionArr = []
        let chk = document.querySelectorAll('.chk')

        for (let i in chk) {

            if (chk[i].checked) {
                console.log(chk[i].name)
                Permissions.forEach((item) => item.permission === chk[i].name ? permissionArr.push(item) : '')
            }

        }

        console.log(permissionArr, tempAdminTime)




        updateEmployeeAccessPermission(props.selectedEmployee._id, permissionArr, tempAdminTime).then(data => {
            console.log(data)
        })

    }


    const checkMatch = (permission) => {

        let count = 0
        for (let i in employeePermission) {
            if (employeePermission[i].permission === permission) {
                count = count + 1
                break
            }
            else { continue }
        }

        if (count > 0) return true
        else return false

    }


    return (
        <div>
            {
                employeePermission.length === 0 ? '' :

                    <Modal isOpen={props.isOpen} toggle={props.toggle} size='xl'>
                        <ModalHeader toggle={props.toggle}>Permission for {props.selectedEmployee.employeeName}</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={e => handleSubmit(e)}>

                                {Permissions.map((item, index) => <FormGroup switch>

                                    {/* {console.log(item.permission, employeePermission[index])} */}

                                    <Input className='chk' defaultChecked={checkMatch(item.permission)} onChange={e => handleChange(e)} name={item.permission} type="switch" role="switch" />
                                    <Label for={item.permission}>{item.value}</Label>

                                </FormGroup>)}

                                <label htmlFor=""></label>
                                <input required onChange={e => handleChange(e)} className='form-control w-50 mb-4' type="datetime-local" id="tempAdminTime" name="tempAdminTime" />

                                <div><button type="submit">Submit</button></div>
                            </Form>

                        </ModalBody>

                    </Modal>
            }
        </div>
    )
}
