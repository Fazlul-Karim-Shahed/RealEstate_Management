import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { addEmployeeSystemAccount, getAEmployeeSystemAccount, getAllEmployee } from '../../Api/EmployeeApi'
import AddEmployeeToSystemModal from './AddEmployeeToSystemModal'
import AdminEmployeePermissionModal from './AdminEmployeePermissionModal'
import { GET_ALL_EMPLOYEE } from '../../Redux/ActionTypes'

const mapStateToProps = (state) => {

  return {
    allEmployee: state.allEmployee
  }
}



export const AdminAllEmployee = (props) => {


  const [addSystemModal, setAddSystemModal] = useState(false)
  const [permissionModal, setPermissionModal] = useState(false)
  const [selectedEmployeeForSystem, setSelectedEmployeeForSystem] = useState({})
  const [selectedEmployeeForPermission, setSelectedEmployeeForPermission] = useState({})


  useEffect(() => {

    getAllEmployee().then(data => {
      if (data.error) throw data.message
      props.dispatch({
        type: GET_ALL_EMPLOYEE,
        value: data.data
      })
    }).catch(err => window.alert(err))

  }, [])



  const addSystemToggle = (item) => {

    

    if (item != undefined) { setSelectedEmployeeForSystem(item) }
    else {
      setSelectedEmployeeForPermission({})
    }
    setAddSystemModal(!addSystemModal)

  }

  const permissionModalToggle = (item) => {
    if (item != undefined) { setSelectedEmployeeForPermission(item) }
    else {
      setSelectedEmployeeForPermission({})
    }
    setPermissionModal(!permissionModal)

  }



  let allEmployeeShow

  allEmployeeShow = props.allEmployee.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.employeeName}</td>
        <td>{item.nidNumber}</td>
        <td>{item.mobile}</td>
        <td><button onClick={() => permissionModalToggle(item)} className='btn btn-secondary'>View</button></td>
        <td>{item.systemAccount ? <span><button className='mb-2 btn btn-danger btn-sm'>Remove account</button> <br /> <button className='btn btn-warning btn-sm'>Change password</button></span> : <button className='btn btn-primary' onClick={() => addSystemToggle(item)}>Allow system login</button>}</td>
        <td><button className='btn btn-info'>Details</button></td>

      </tr>
    )

  })


  return (
    <div>
      <div className="p-2">
        <h5 className='mt-3'>Total Employee: {props.allEmployee.length}</h5>
        <button className='btn btn-danger px-3 my-3'><Link to='/admin-panel/employee/add' className='text-decoration-none text-white'>Add New Employee</Link></button>
        <Table hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>NID</th>
              <th>Mobile</th>
              <th>Permission</th>
              <th>System Account</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{allEmployeeShow}</tbody>
        </Table>
      </div>


      <AdminEmployeePermissionModal isOpen={permissionModal} toggle={permissionModalToggle} selectedEmployeeForPermission={selectedEmployeeForPermission} />


      <AddEmployeeToSystemModal isOpen={addSystemModal} toggle={addSystemToggle} selectedEmployeeForSystem={selectedEmployeeForSystem} />

    </div>
  )
}



export default connect(mapStateToProps)(AdminAllEmployee)