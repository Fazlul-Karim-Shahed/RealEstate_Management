import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adminAddEmployee } from '../../Api/EmployeeApi'
import { createFormData } from '../../Functions/createFormData'



const mapStateToProps = (state) => ({})

export const AdminAddEmployee = (props) => {


    const [state, setState] = useState({

        employeeName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        religion: 'Islam',
        nationality: 'Bangladeshi',
        nidNumber: '',
        mobile: '',
        presentAddress: '',
        permanentAddress: '',
    })


    const handleChange = (e) => {

        if (e.target.type === 'file') {
            setState({
                ...state,
                [e.target.name]: e.target.files[0]
            })
        }
        else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        adminAddEmployee(createFormData(state)).then(data => {
            if (data.error) throw data.message
        }).catch(err => window.alert(err))

        

    }



    return (
        <div>

            <h3 className='my-4 text-center'>New Employee Registration Form</h3>
            <div className='container my-5 px-md-5'>
                <form onSubmit={e => handleSubmit(e)} className='py-5 px-3 bg-white border rounded' action="" method="post">

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Employee Name: </label></div>
                        <div className="col-md-9"><input placeholder='ie. Md. Fazlul Karim' onChange={e => handleChange(e)} value={state.employeeName} className='form-control' type="text" name='employeeName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Employee Photo: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='photo' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Father Name: </label></div>
                        <div className="col-md-9"><input placeholder='ie. Md. Sample Hossain' onChange={e => handleChange(e)} value={state.fatherName} className='form-control' type="text" name='fatherName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Mother Name: </label></div>
                        <div className="col-md-9"><input placeholder='ie. Sample Begum' onChange={e => handleChange(e)} value={state.motherName} className='form-control' type="text" name='motherName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Birth Date: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} value={state.dob} className='form-control' type="text" name='dob' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Religion: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} value={state.religion} className='form-control' type="text" name='religion' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Nationality: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} value={state.nationality} className='form-control' type="text" name='nationality' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">NID Number: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} value={state.nidNumber} className='form-control' type="text" name='nidNumber' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">NID Front Image: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='nidFront' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">NID Back Image: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='nidBack' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Mobile Number: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} value={state.mobile} className='form-control' type="text" name='mobile' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Present Address: </label></div>
                        <div className="col-md-9"><textarea onChange={e => handleChange(e)} value={state.presentAddress} className='form-control' type="text" name='presentAddress' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Permanent Address: </label></div>
                        <div className="col-md-9"><textarea onChange={e => handleChange(e)} value={state.permanentAddress} className='form-control' type="text" name='permanentAddress' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-md-2"><label className='mt-1 fw-bold' htmlFor="">Other Attachment: </label></div>
                        <div className="col-md-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='attachment' id="" /></div>
                    </div>

                    <div>
                        <button className='mt-4 btn btn-primary mx-2 px-4' type='submit'>Register</button>
                    </div>


                </form>
            </div>

        </div>
    )
}



export default connect(mapStateToProps)(AdminAddEmployee)