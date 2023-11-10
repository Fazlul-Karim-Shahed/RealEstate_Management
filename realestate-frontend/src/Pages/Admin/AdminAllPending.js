import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPending } from '../../Api/OtherApi'
import { Table } from 'reactstrap'
import { approveEmployee } from '../../Api/EmployeeApi'
import { approveShareholder } from '../../Api/ShareholderApi'

export const AdminAllPending = (props) => {

  const [pendingEmployee, setPendingEmployee] = useState([])
  const [pendingShareholder, setPendingShareholder] = useState([])


  useEffect(() => {

    getPending().then(data => {

      if (data.error) throw data.message

      setPendingEmployee([...data.data.pendingEmployee])
      setPendingShareholder([...data.data.pendingShareholder])


    }).catch(err => window.alert(err))

  }, [])


  const approve = (str, id) => {

    if (str === 'employee') {

      approveEmployee(id).then(data => {

        if (data.error) throw data.message

        console.log(data)

      })
        .catch(err => window.alert(err))
    }

    else {
      approveShareholder(id).then(data => {

        if (data.error) throw data.message

        console.log(data)

      })
        .catch(err => window.alert(err))
    }

  }




  let allPendingShareholderShow

  allPendingShareholderShow = pendingShareholder.map((item, index) => {

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
        <td><button onClick={() => approve('shareholder', item._id)}>Approve</button></td>
      </tr>
    )

  })



  let allPendingEmployeeShow

  allPendingEmployeeShow = pendingEmployee.map((item, index) => {

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {item.employeeName}</td>
        <td>{item.nidNumber}</td>
        <td>{item.mobile}</td>
        <td><button onClick={() => approve('employee', item._id)}>Approve</button></td>

      </tr>
    )

  })




  return (
    <div>

      <h4 className='text-center my-5'>Pending Shareholders</h4>

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
            <th></th>
          </tr>
        </thead>

        <tbody>{allPendingShareholderShow}</tbody>
      </Table>



      <h4 className='text-center my-5'>Pending Employee</h4>

      <Table hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>NID</th>
            <th>Mobile</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{allPendingEmployeeShow}</tbody>
      </Table>

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllPending)