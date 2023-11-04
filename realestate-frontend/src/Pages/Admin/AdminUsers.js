import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { Permissions } from '../../Functions/Permissions'

const mapStateToProps = (state) => {


  return {
    allUsers: state.allUsers
  }
}

export const AdminUsers = (props) => {


  const [permissionModal, setPermissionModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [permissionState, setPermissionState] = useState({})
  const [tempAdminTime, setTempAdminTime] = useState('')

  const toggle = (item) => {
    setPermissionModal(!permissionModal)
    setSelectedUser(item)
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


  let allUsersShow

  allUsersShow = props.allUsers.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.username}</td>
        <td>{item.email}</td>
        <td>{item.status}</td>
        <td>{item.shareholder ? '' : 'X'}</td>
        <td>{item.investor ? '' : 'X'}</td>
        <td><button onClick={() => toggle(item)} className=''>View</button></td>
        <td>{item.tempAdminTime}</td>
      </tr>
    )

  })


  return (
    <div className="p-2">
      <h5 className='mt-3'>Total User: {props.allUsers.length}</h5> <br /><br />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Shareholder</th>
            <th>Investor</th>
            <th>Access Permission</th>
            <th>Access Time End</th>
          </tr>
        </thead>

        <tbody>{allUsersShow}</tbody>
      </Table>



      <Modal isOpen={permissionModal} toggle={toggle} size='xl'>
        <ModalHeader toggle={toggle}>Permission for {selectedUser.username}</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => handleSubmit(e)}>

            {Permissions.map(item => <FormGroup switch>

              <Input name={item.permission} onChange={e => handleChange(e)} type="switch" role="switch" />
              <Label for={item.permission}>{item.value}</Label>

            </FormGroup>)}

            <label htmlFor=""></label>
            <input  onChange={e => handleChange(e)} type="datetime-local" id="tempAdminTime" name="tempAdminTime" />

            <div><button onSubmit={e => handleSubmit(e)} type="submit">Submit</button></div>
          </Form>

        </ModalBody>

      </Modal>
    </div>
  )
}



export default connect(mapStateToProps)(AdminUsers)