import React, { useState } from 'react'
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({})

export const AdminAddShareholder = (props) => {


    const [state, setState] = useState({

        registrationId: '',
        shareholderName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        religion: '',
        occupation: '',
        nationality: '',
        nidNumber: '',
        tin: '',
        mobile: '',
        presentAddress: '',
        permanentAddress: '',
        tower: '',
        unit: '',
        flat: '',
        amountOfLand: ''
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

        console.log(state)

    }



    return (
        <div>

            <h3 className='my-4 text-center'>New Shareholder Registration Form</h3>
            <div className='container my-5'>
                <form onSubmit={e => handleSubmit(e)} className='py-5 px-3 bg-white border rounded' action="" method="post">

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Registration ID: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.registrationId} className='form-control' type="text" name='registrationId' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Shareholder Name: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.shareholderName} className='form-control' type="text" name='shareholderName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Father Name: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.fatherName} className='form-control' type="text" name='fatherName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Mother Name: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.motherName} className='form-control' type="text" name='motherName' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Birth Date: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.dob} className='form-control' type="text" name='dob' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Religion: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.religion} className='form-control' type="text" name='religion' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Occupation: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.occupation} className='form-control' type="text" name='occupation' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Nationality: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.nationality} className='form-control' type="text" name='nationality' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">NID Number: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.nidNumber} className='form-control' type="text" name='nidNumber' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">NID Front Image: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='nidFront' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">NID Back Image: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} className='form-control' type="file" name='nidBack' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">T.I.N: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.tin} className='form-control' type="text" name='tin' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Mobile Number: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.mobile} className='form-control' type="text" name='mobile' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Present Address: </label></div>
                        <div className="col-9"><textarea onChange={e => handleChange(e)} value={state.presentAddress} className='form-control' type="text" name='presentAddress' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Permanent Address: </label></div>
                        <div className="col-9"><textarea onChange={e => handleChange(e)} value={state.permanentAddress} className='form-control' type="text" name='permanentAddress' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Tower: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.tower} className='form-control' type="text" name='tower' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Unit: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.unit} className='form-control' type="text" name='unit' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Flat: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.flat} className='form-control' type="text" name='flat' id="" /></div>
                    </div>

                    <div className="row mx-0 mb-4">
                        <div className="col-2"><label className='mt-1 fw-bold' htmlFor="">Amount of Land: </label></div>
                        <div className="col-9"><input onChange={e => handleChange(e)} value={state.amountOfLand} className='form-control' type="text" name='amountOfLand' id="" /></div>
                    </div>

                    <div>
                        <button className='mt-4 btn btn-primary mx-2 px-4' type='submit'>Register</button>
                    </div>


                </form>
            </div>

        </div>
    )
}



export default connect(mapStateToProps)(AdminAddShareholder)