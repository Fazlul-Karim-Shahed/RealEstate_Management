import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { convertToText } from 'number-to-text'
import React from 'react'
import { useLocation } from 'react-router'
import { Table } from 'reactstrap'

export default function OnePaymentSlip(props) {

    const location = useLocation()
    const { moneyReceipt } = location.state

    const printSlip = () => {
        window.print()
    }


    if (location.state === null) return <h3>Sorry</h3>

    return (
        <div className='container border rounded my-2 small'>

            <div className='text-center'>
                <h3 className='text-primary mt-3'>
                    S R Property
                </h3>
                <p className='small'>REAL ESTATE AGENCY</p>
            </div>

            <div className='text-end my-4'>
                <h6> Date: <span className=''>{new Date().toLocaleString()}</span></h6>
            </div>

            <div className=''>
                <div>
                    <div><strong className='me-2'>Name of Shareholder :</strong> {moneyReceipt.shareholderId.shareholderName}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Registration ID :</strong> {moneyReceipt.shareholderId.registrationId}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Tower :</strong> {moneyReceipt.shareholderId.tower}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Flat No :</strong> {moneyReceipt.shareholderId.flat}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Mobile :</strong> {moneyReceipt.shareholderId.mobile}</div>
                </div>
            </div>

            <h5 className='text-center mt-4'>MONEY RECEIPT</h5>

            <div className='my-4'>

                <Table bordered>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Received Date</td>
                            <td>{moneyReceipt.receivedDate}</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Receipt No.</td>
                            <td>{moneyReceipt.receiptNo}</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Amount Received</td>
                            <td>{moneyReceipt.receivedAmount} /= ({convertToText(moneyReceipt.receivedAmount)} Only)</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Payment Method</td>
                            <td>{String(moneyReceipt.paymentMethod).toUpperCase()}</td>
                        </tr>

                        {moneyReceipt.paymentMethod === 'bank' ?
                            <tr>
                                <td className='fw-bold'>Bank Name</td>
                                <td>{moneyReceipt.bankName}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'bank' ?
                            <tr>
                                <td className='fw-bold'>Bank Payment Type</td>
                                <td>{moneyReceipt.bankPaymentType}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'cash' ?
                            <tr>
                                <td className='fw-bold'>Cash Payer Name</td>
                                <td>{moneyReceipt.cashPayerName}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'check' ?
                            <tr>
                                <td className='fw-bold'>Check Payer Name</td>
                                <td>{moneyReceipt.checkPayerName}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'check' ?
                            <tr>
                                <td className='fw-bold'>Check Number</td>
                                <td>{moneyReceipt.checkNumber}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'mfs' ?
                            <tr>
                                <td className='fw-bold'>Mobile Financial Service</td>
                                <td>{moneyReceipt.mfsName}</td>
                            </tr> : ''}

                        {moneyReceipt.paymentMethod === 'mfs' ?
                            <tr>
                                <td className='fw-bold'>Transaction ID</td>
                                <td>{moneyReceipt.transactionId}</td>
                            </tr> : ''}

                    </tbody>
                </Table>
            </div>

            <span className='small'>Receipt ID: {moneyReceipt._id}</span>


            <br /> <br />
            <div className='d-flex justify-content-between mt-5 px-4'>
                <div className='fw-bold' style={{ borderTop: '2px solid black' }}>Signature of Authority</div>
                <div className='fw-bold' style={{ borderTop: '2px solid black' }}>Signature of Shareholder</div>
            </div>

            <div className=' text-center my-3'>
                <button className='btn btn-primary px-4' onClick={printSlip}><FontAwesomeIcon icon={faPrint} /> Print</button>
            </div>
        </div>
    )
}
