import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getOneShareholder } from '../../Api/ShareholderApi'

export const AdminAddMoneyReceipt = (props) => {

    let { id } = useParams()
    const [shareholderInfo, setShareholderInfo] = useState(null)

    const [state, setState] = useState({

        receivedDate: '',
        receiptNo: '',
        receivedAmount: '',
        paymentMethod: '',
        cashPayerName: '',
        checkPayerName: '',
        bankName: '',
        bankPaymentType: '',
        transactionId: '',
        mfsName: ''


    })

    useEffect(() => {

        getOneShareholder(id).then(data => {

            if (data.error) throw data.message

            setShareholderInfo(data.data)

        }).catch(err => {
            setShareholderInfo(null)
            window.alert(err)
        })

    }, [id])


    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()
        console.log(state)
    }

    if (shareholderInfo === null) return <h2 className='text-center my-5'>Invalid ID. Shareholder not found</h2>

    return (
        <div>
            <div className='p-4'>
                <div className="row">
                    <div className="col-3 fw-bold">Name of Shareholder :</div>
                    <div className="col-3">{shareholderInfo.shareholderName}</div>
                </div>

                <div className="row">
                    <div className="col-3 fw-bold">Registration ID :</div>
                    <div className="col-3">{shareholderInfo.registrationId}</div>
                </div>

                <div className="row">
                    <div className="col-3 fw-bold">Tower :</div>
                    <div className="col-3">{shareholderInfo.tower}</div>
                </div>

                <div className="row">
                    <div className="col-3 fw-bold">Flat No :</div>
                    <div className="col-3">{shareholderInfo.flat}</div>
                </div>

                <div className="row">
                    <div className="col-3 fw-bold">Mobile :</div>
                    <div className="col-9">{shareholderInfo.mobile}</div>
                </div>
            </div>

            <h3 className='text-center my-5'>Add New Money Receipt</h3>


            <form onSubmit={e => handleSubmit(e)} className='px-3 my-5' action="">

                <div className='my-4 row mx-0'>
                    <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Received Date: </label></div>
                    <div className="col-9 w-50"><input required placeholder="" onChange={e => handleChange(e)} name='receivedDate' value={state.receivedDate} className='form-control' type="date" /></div>
                </div>

                <div className='my-4 row mx-0'>
                    <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Receipt No: </label></div>
                    <div className="col-9"><input required placeholder="0161 Book No. 03" onChange={e => handleChange(e)} name="receiptNo" value={state.receiptNo} className='form-control' type="text" /></div>
                </div>

                <div className='my-4 row mx-0'>
                    <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Received Amount (BDT): </label></div>
                    <div className="col-7"><input required placeholder="50000" onChange={e => handleChange(e)} name="receivedAmount" value={state.receivedAmount} className='form-control' type="number" /> </div>
                </div>

                <div className='my-4 row mx-0'>
                    <div className="col-3"><label className='mt-2 fw-bold' htmlFor="">Payment Method: </label></div>
                    <div className="col-9">
                        <select required onChange={e => handleChange(e)} value={state.paymentMethod} className='form-control' name="paymentMethod" id="">
                            <option value="">Select Method</option>
                            <option value="cash">Cash</option>
                            <option value="check">Check</option>
                            <option value="bank">Bank</option>
                            <option value="mfs">Mobile Financial Service (MFS)</option>
                        </select>
                    </div>
                </div>

                {state.paymentMethod === 'cash' ?

                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Cash Payer Name (Only for cash): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'cash'} name='cashPayerName' placeholder="Md. Sample Hossain" onChange={e => handleChange(e)} value={state.cashPayerName} className='form-control' type="text" /></div>
                    </div> : ''}

                {state.paymentMethod === 'check' ?
                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Check Payer Name (Only for check): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'check'} placeholder="Md. Sample Hossain" onChange={e => handleChange(e)} name="checkPayerName" value={state.checkPayerName} className='form-control' type="text" /></div>
                    </div> : ''}

                {state.paymentMethod === 'bank' ?
                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Bank Name (Only for Bank): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'bank'} placeholder="Dutch Bangla Bank" onChange={e => handleChange(e)} name="bankName" value={state.bankName} className='form-control' type="text" /></div>
                    </div> : ''}

                {state.paymentMethod === 'bank' ?

                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Bank Payment Type (Only for Bank): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'bank'} placeholder="RTGS" onChange={e => handleChange(e)} name="bankPaymentType" value={state.bankPaymentType} className='form-control' type="text" /></div>
                    </div> : ''}


                {state.paymentMethod === 'mfs' ?

                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">MFS Name (Only for MFS): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'mfs'} placeholder="Bkash" onChange={e => handleChange(e)} name="mfsName" value={state.mfsName} className='form-control' type="text" /></div>
                    </div> : ''}

                {state.paymentMethod === 'mfs' ?

                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Transaction ID (Only for MFS): </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'mfs'} placeholder="AK56HM5FD4" onChange={e => handleChange(e)} name="transactionId" value={state.transactionId} className='form-control' type="text" /></div>
                    </div> : ''}


                {state.paymentMethod === 'bank' || state.paymentMethod === 'cash' || state.paymentMethod === 'check' ?

                    <div className='my-4 row mx-0'>
                        <div className="col-3"><label className='mt-1 fw-bold' htmlFor="">Payment Slip: </label></div>
                        <div className="col-9"><input required={state.paymentMethod === 'bank' || state.paymentMethod === 'cash' || state.paymentMethod === 'check'} onChange={e => handleChange(e)} name="attachment" className='form-control' type="file" /></div>
                    </div> : ''}

                <button className='px-4 btn btn-success ms-2 my-4' type="submit">Submit</button>

            </form>


        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddMoneyReceipt)