import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { GET_ALL_SHAREHOLDER } from '../../Redux/ActionTypes'
import AdminShareholderAddSystemModal from './AdminShareholderAddSystemModal'
import AdminShareholderPermissionModal from './AdminShareholderPermissionModal'
import { getAllShareholder } from '../../Api/ShareholderApi'

const mapStateToProps = (state) => {


  return {
    allShareholder: state.allShareholder
  }
}

export const AdminShareholder = (props) => {

  const [addSystemModal, setAddSystemModal] = useState(false)
  const [permissionModal, setPermissionModal] = useState(false)
  const [selectedShareholderForSystem, setSelectedShareholderForSystem] = useState({})
  const [selectedShareholderForPermission, setSelectedShareholderForPermission] = useState({})

  useEffect(() => {


    getAllShareholder().then(data => {
      if (data.error) throw data.message
      props.dispatch({
        type: GET_ALL_SHAREHOLDER,
        value: data.data
      })
    }).catch(err => window.alert(err))

  }, [])



  const addSystemToggle = (item) => {

    if (item != undefined) { setSelectedShareholderForSystem(item) }
    else {
      setSelectedShareholderForPermission({})
    }
    setAddSystemModal(!addSystemModal)

  }

  const permissionModalToggle = (item) => {
    if (item != undefined) { setSelectedShareholderForPermission(item) }
    else {
      setSelectedShareholderForPermission({})
    }
    setPermissionModal(!permissionModal)

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

        <td className=''>
          <button className='mb-2 btn btn-sm btn-outline-warning'><Link className='text-decoration-none text-black' to={`/admin-panel/shareholder/add-receipt/${item._id}`}>Add Receipt</Link></button><br />
          <Link to={`/admin-panel/shareholder/money-receipt/view-all/${item._id}`}><button className='mb-2 btn btn-sm btn-outline-success'>View all</button> </Link> <br />
          <button className=' btn btn-sm btn-outline-success'>View summery</button>
        </td>

        <td>
          {item.systemAccount ? <span><button className='mb-2 btn btn-sm btn-danger'>Remove account</button> <br />
            <button>Change password</button></span> :
            <button onClick={() => addSystemToggle(item)} className=' btn btn-sm btn-outline-primary'>Allow system login</button>}
        </td>

        <td><button onClick={() => permissionModalToggle(item)} className='btn btn-sm btn-outline-secondary'>View</button></td>
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

      <Table className='small text-center' bordered>
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

      <AdminShareholderAddSystemModal isOpen={addSystemModal} toggle={addSystemToggle} selected={selectedShareholderForSystem} />

      <AdminShareholderPermissionModal isOpen={permissionModal} toggle={permissionModalToggle} selected={selectedShareholderForPermission} />


    </div>
  )
}



export default connect(mapStateToProps)(AdminShareholder)