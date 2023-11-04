import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {


  return {
    allEmployee: state.allEmployee
  }
}

export const AdminAllEmployee = (props) => {

  let allEmployeeShow

  allEmployeeShow = props.allEmployee.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.username}</td>
        <td>{item.email}</td>
        <td>{item.status}</td>
        <td><button className=''>View</button></td>
        <td>{item.tempAdminTime}</td>
      </tr>
    )

  })


  return (
    <div>
      <div className="p-2">
        <h5 className='mt-3'>Total Employee: {props.allEmployee.length}</h5> <br /><br />
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Access Permission</th>
              <th>Access Time End</th>
            </tr>
          </thead>

          <tbody>{allEmployeeShow}</tbody>
        </Table>
      </div>
    </div>
  )
}



export default connect(mapStateToProps)(AdminAllEmployee)