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
        <td>
          <span>Tower: {item.tower}</span> <br />
          <span>Unit: {item.unit}</span> <br />
          <span>Flat: {item.flat}</span>

        </td>
        <td>{item.mobile}</td>
        <td>{item.nidNumber}</td>
        <td>{item.tin}</td>

        <td>
          <button className='mb-2 btn btn-sm btn-outline-warning'><Link className='text-decoration-none text-black' to={`/admin-panel/shareholder/add-receipt/${item._id}`}>Add Receipt</Link></button><br />
          <Link to={`/admin-panel/shareholder/money-receipt/view-all/${item._id}`}><button className='mb-2 btn btn-sm btn-outline-success'>View all</button> </Link>
          <button className=' btn btn-sm btn-outline-success'>View summery</button>
        </td>

        <td>
          {item.systemAccount ? <span><button className='mb-2 btn btn-sm btn-danger'>Remove account</button> <br />
            <button>Change password</button></span> :
            <button className=' btn btn-sm btn-outline-primary'>Allow system login</button>}
        </td>

        <td><button className='btn btn-sm btn-outline-secondary'>View</button></td>
        <td><button className='btn btn-sm btn-outline-info'>Details</button></td>
        <td><button className=''>Send Message</button></td>
      </tr>
    )

  })


  return (
    <div className="p-2">
      <h5 className='mt-3'>Total Shareholder: {props.allShareholder.length}</h5>

      <button className='btn btn-primary px-3 my-3 me-4'><Link to='/admin-panel/shareholder/add' className='text-decoration-none text-white'>Add New Shareholder</Link></button>
      <button className='btn btn-secondary px-3 my-3'><Link to='' className='text-decoration-none text-white'>All payment summery</Link></button>

      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th> ID</th>
            <th>Project ID</th>
            <th>Name</th>
            <th>Apartment</th>
            <th>Mobile</th>
            <th>NID</th>
            <th>TIN</th>
            <th>Money Receipt</th>
            <th>Login System</th>
            <th>Permission</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>{allShareholderShow}</tbody>
      </Table>


    </div>
  )
}



export default connect(mapStateToProps)(AdminShareholder)