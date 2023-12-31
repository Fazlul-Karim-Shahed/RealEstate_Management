
import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { updateEmployeeAccessPermission } from '../../Api/EmployeeApi'
import { objModifyInArr } from '../../Functions/CustomFunction'

export default function AdminEmployeePermissionModal(props) {

    const [tempAdminTime, setTempAdminTime] = useState('')
    const [employeePermission, setEmployeePermission] = useState([])

    useEffect(() => {

        let arr = objModifyInArr(props.selectedEmployeeForPermission.accessPermission) // add key 'checked'
        setEmployeePermission(arr)
        
    }, [props.selectedEmployeeForPermission])



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

        updateEmployeeAccessPermission(props.selectedEmployeeForPermission._id, permissionArr, tempAdminTime).then(data => {
            if (data.error) throw data.message


        }).catch(err => window.alert(err))

    }



    const handleCheck = (e, index) => {

        let arr = [...employeePermission]
        arr[index].checked = !arr[index].checked

        setEmployeePermission(arr)

    }


    return (
        <div>
            {

                <Modal isOpen={props.isOpen} toggle={props.toggle} size='xl'>

                    <ModalHeader toggle={props.toggle}>

                        {/* {console.log(props.selectedEmployeeForPermission)} */}

                        Permission for {props.selectedEmployeeForPermission === undefined ? '' : props.selectedEmployeeForPermission.employeeName} <br />
                        <div className='mt-2 fw-normal small'>Current Permission Time: {props.selectedEmployeeForPermission === undefined ? '' : props.selectedEmployeeForPermission.tempAdminTime}</div>

                    </ModalHeader>
                    <ModalBody>

                        {
                            !props.selectedEmployeeForPermission.systemAccount ? <h5 className='text-center text-danger fw-bold my-5'>Please add employee to the system first</h5> :

                                <form onSubmit={e => handleSubmit(e)} className='form-check form-switch' action="">

                                    {employeePermission.map((item, index) => {

                                        return (
                                            <div>
                                                <input
                                                    className='form-check-input'
                                                    checked={item.checked} type="checkbox"
                                                    onChange={e => handleCheck(e, index)}
                                                    role='switch'
                                                    name=""
                                                    id="" />

                                                <label htmlFor="">{item.value}</label>
                                            </div>
                                        )

                                    })}

                                    <div className='mt-4'>
                                        <label className='me-3' htmlFor="">Pick Date & Time</label>
                                        <input className='form-control w-50' required onChange={e => handleChange(e)} type="datetime-local" name="" id="" />
                                    </div>

                                    <div className='mt-4'>
                                        <button className='btn btn-primary px-4' type="submit">Submit</button>
                                    </div>
                                </form>
                        }

                    </ModalBody>

                </Modal>


            }
        </div>
    )

}



