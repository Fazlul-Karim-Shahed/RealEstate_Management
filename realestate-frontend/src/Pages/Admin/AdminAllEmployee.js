import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal, Table } from 'reactstrap'
import { addEmployeeSystemAccount } from '../../Api/EmployeeApi'
import AddEmployeeToSystemModal from '../../Components/AddEmployeeToSystemModal'
import AdminEmployeePermissionModal from './AdminEmployeePermissionModal'

const mapStateToProps = (state) => {

  console.log(state)


  return {
    allEmployee: state.allEmployee
  }
}



export const AdminAllEmployee = (props) => {


  const [addSystemModal, setAddSystemModal] = useState(false)
  const [permissionModal, setPermissionModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState({})

  const addSystemToggle = (item) => {

    setSelectedEmployee(item)
    setAddSystemModal(!addSystemModal)

  }

  const permissionModalToggle = (item) => {




    setSelectedEmployee(item)
    setPermissionModal(!permissionModal)

  }



  let allEmployeeShow


  const addToSystem = item => {

    addEmployeeSystemAccount()



  }

  allEmployeeShow = props.allEmployee.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.employeeName}</td>
        <td>{item.nidNumber}</td>
        <td>{item.mobile}</td>
        <td><button onClick={() => permissionModalToggle(item)} className=''>View</button></td>
        <td>{item.systemAccount ? <span><button>Remove from account</button> <button>Change password</button></span> : <button onClick={() => addSystemToggle(item)}>Add to system</button>}</td>
        <td><button>Details</button></td>

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



      {Object.keys(selectedEmployee).length === 0 ? '' : <AdminEmployeePermissionModal isOpen={permissionModal} toggle={permissionModalToggle} selectedEmployee={selectedEmployee} />}
      <AddEmployeeToSystemModal isOpen={addSystemModal} toggle={addSystemToggle} selectedEmployee={selectedEmployee} />

    </div>
  )
}



export default connect(mapStateToProps)(AdminAllEmployee)