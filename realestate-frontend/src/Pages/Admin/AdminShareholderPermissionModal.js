
import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { objModifyInArr } from '../../Functions/CustomFunction'
import { updateShareholderAccessPermission } from '../../Api/ShareholderApi'

export default function AdminShareholderPermissionModal(props) {

    const [tempAdminTime, setTempAdminTime] = useState('')
    const [shareholderPermission, setShareholderPermission] = useState([])

    useEffect(() => {

        let arr = objModifyInArr(props.selected.accessPermission) // add key 'checked'
        setShareholderPermission(arr)

    }, [props.selected])



    let handleChange = (e) => {
        setTempAdminTime(new Date(e.target.value).toLocaleString())
    }

    let handleSubmit = (e) => {

        e.preventDefault()

        let permissionArr = []

        for (let i in shareholderPermission) {
            if (shareholderPermission[i].checked) {
                permissionArr.push({
                    permission: shareholderPermission[i].permission,
                    value: shareholderPermission[i].value
                })
            }
        }

        updateShareholderAccessPermission(props.selected._id, permissionArr, tempAdminTime).then(data => {

            console.log(data)
            if (data.error) throw data.message


        }).catch(err => window.alert(err))

    }



    const handleCheck = (e, index) => {

        let arr = [...shareholderPermission]
        arr[index].checked = !arr[index].checked

        setShareholderPermission(arr)

    }


    return (
        <div>
            {

                <Modal isOpen={props.isOpen} toggle={props.toggle} size='xl'>

                    <ModalHeader toggle={props.toggle}>

                        Permission for {props.selected === undefined ? '' : props.selected.shareholderName} <br />
                        <div className='mt-2 fw-normal small'>Current Permission Time: {props.selected === undefined ? '' : props.selected.tempAdminTime}</div>

                    </ModalHeader>
                    <ModalBody>

                        {
                            props.selected === null ? <h5 className='text-center text-danger fw-bold my-5'>Please add shareholder to the system</h5> :

                                <form onSubmit={e => handleSubmit(e)} className='form-check form-switch' action="">

                                    {shareholderPermission.map((item, index) => {

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



