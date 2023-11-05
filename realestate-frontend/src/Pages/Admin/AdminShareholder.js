import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { Permissions } from '../../Functions/Permissions'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {


  return {
    allShareholder: state.allShareholder
  }
}

export const AdminShareholder = (props) => {


  const [permissionModal, setPermissionModal] = useState(false)
  const [selectedShareholder, setSelectedShareholder] = useState({})
  const [permissionState, setPermissionState] = useState({})
  const [tempAdminTime, setTempAdminTime] = useState('')

  const toggle = (item) => {
    setPermissionModal(!permissionModal)
    setSelectedShareholder(item)
  }


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

    for (let i in permissionState) {
      if (permissionState[i]) {
        Permissions.forEach((item) => item.permission === i ? permissionArr.push(item) : '')
      }
    }

    console.log(permissionArr, tempAdminTime)

  }


  let allShareholderShow

  allShareholderShow = props.allShareholder.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.registrationId}</td>
        <td>{item.projectName}</td>
        <td>{item.shareholderName}</td>
        <td>{item.tower}</td>
        <td>{item.unit}</td>
        <td>{item.flat}</td>
        <td>{item.amountOfLand}</td>
        <td>{item.mobile}</td>
        <td>{item.nid}</td>
        <td>{item.tin}</td>
        <td><button onClick={() => toggle(item)} className=''>View</button></td>
        <td><button>Details</button></td>
      </tr>
    )

  })


  return (
    <div className="p-2">
      <h5 className='mt-3'>Total Shareholder: {props.allShareholder.length}</h5> 

      <button className='btn btn-primary px-3 my-3'><Link to='/admin-panel/shareholder/add' className='text-decoration-none text-white'>Add New Shareholder</Link></button>

      <Table hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Registration ID</th>
            <th>Project</th>
            <th>Name</th>
            <th>Tower</th>
            <th>Unit</th>
            <th>Flat</th>
            <th>Land Amount</th>
            <th>Mobile</th>
            <th>NID</th>
            <th>TIN</th>
            <th>Permission</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{allShareholderShow}</tbody>
      </Table>



      <Modal isOpen={permissionModal} toggle={toggle} size='xl'>
        <ModalHeader toggle={toggle}>Permission for {selectedShareholder.username}</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => handleSubmit(e)}>

            {Permissions.map(item => <FormGroup switch>

              <Input name={item.permission} onChange={e => handleChange(e)} type="switch" role="switch" />
              <Label for={item.permission}>{item.value}</Label>

            </FormGroup>)}

            <label htmlFor=""></label>
            <input  onChange={e => handleChange(e)} className='form-control w-50 mb-4' type="datetime-local" id="tempAdminTime" name="tempAdminTime" />

            <div><button onSubmit={e => handleSubmit(e)} type="submit">Submit</button></div>
          </Form>

        </ModalBody>

      </Modal>
    </div>
  )
}



export default connect(mapStateToProps)(AdminShareholder)