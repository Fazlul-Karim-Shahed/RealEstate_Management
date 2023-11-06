import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Table } from 'reactstrap'
import { Permissions } from '../../Functions/Permissions'
import { Link } from 'react-router-dom'
import { getAllShareholder } from '../../Api/ShareholderApi'
import { GET_ALL_SHAREHOLDER } from '../../Redux/ActionTypes'

const mapStateToProps = (state) => {


  return {
    allShareholder: state.allShareholder
  }
}

export const AdminShareholder = (props) => {


  useEffect(() => {


    getAllShareholder().then(data => {
      if (data.error) throw data.message
      props.dispatch({
        type: GET_ALL_SHAREHOLDER,
        value: data.data
      })
    }).catch(err => window.alert(err))

  }, [])


  const [selectedShareholder, setSelectedShareholder] = useState({})
  const [permissionState, setPermissionState] = useState({})
  const [tempAdminTime, setTempAdminTime] = useState('')



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
        <td>{item.nidNumber}</td>
        <td>{item.tin}</td>
        <td><button>Add Receipt</button><button>View all</button></td>
        <td>{item.systemAccount ? <span><button>Remove from account</button> <button>Change password</button></span> : <button>Add to system</button>}</td>
        <td><button className=''>View</button></td>
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
            <th>Money Receipt</th>
            <th>Login System</th>
            <th>Permission</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{allShareholderShow}</tbody>
      </Table>


    </div>
  )
}



export default connect(mapStateToProps)(AdminShareholder)