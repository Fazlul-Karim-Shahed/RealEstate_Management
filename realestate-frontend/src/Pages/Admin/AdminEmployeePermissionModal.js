import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Permissions } from '../../Functions/Permissions'
import { getAEmployeeSystemAccount, updateEmployeeAccessPermission } from '../../Api/EmployeeApi'
import { objModifyInArr } from '../../Functions/CustomFunction'

export default function AdminEmployeePermissionModal(props) {

    const [tempAdminTime, setTempAdminTime] = useState('')
    const [employeePermission, setEmployeePermission] = useState([])


    useEffect(() => {
        getAEmployeeSystemAccount(props.selectedEmployee._id).then(data => {

            let arr = objModifyInArr([...data.data.accessPermission]) // add key 'checked'

            setEmployeePermission(arr)

        })
    }, [])


    let handleChange = (e) => {
        setTempAdminTime(new Date(e.target.value).toLocaleString())
    }

    let handleSubmit = (e) => {

        e.preventDefault()

        let permissionArr = []

        for (let i in employeePermission) {
            if (employeePermission[i].checked) {
                permissionArr.push({
                    permission: employeePermission[i].permission,
                    value: employeePermission[i].value
                })
            }
        }

        console.log(permissionArr, tempAdminTime)


        updateEmployeeAccessPermission(props.selectedEmployee._id, permissionArr, tempAdminTime).then(data => {
            console.log(data)
        })

    }





    const handleCheck = (e, index) => {

        let arr = [...employeePermission]
        arr[index].checked = !arr[index].checked

        setEmployeePermission([...arr])

    }


    return (
        <div>
            {

                <Modal isOpen={props.isOpen} toggle={props.toggle} size='xl'>
                    <ModalHeader toggle={props.toggle}>Permission for {props.selectedEmployee.employeeName}</ModalHeader>
                    <ModalBody>

                        <form onSubmit={e => handleSubmit(e)} className='form-check form-switch' action="">
                            {employeePermission.map((item, index) => {

                                return (
                                    <div>
                                        <input
                                            className='form-check-input'
                                            checked={employeePermission[index].checked} type="checkbox"
                                            onChange={e => handleCheck(e, index)}
                                            role='switch'
                                            name=""
                                            id="" />

                                        <label htmlFor="">{item.value}</label>
                                    </div>
                                )

                            })}

                            <div className='mt-4'>
                                <label htmlFor="">Pick Date & Time</label>
                                <input onChange={e => handleChange(e)} type="datetime-local" name="" id="" />
                            </div>

                            <button type="submit">Submit</button>
                        </form>

                    </ModalBody>

                </Modal>


            }
        </div>
    )
}
