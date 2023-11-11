import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getOneShareholderAllMoneyReceipt } from '../../Api/ShareholderApi'
import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { convertToText } from 'number-to-text'
import 'number-to-text/converters/en-us';

export const OneShareholderAllMoneyReceipt = (props) => {


    let { id } = useParams()
    const [allMoneyReceipt, setAllMoneyReceipt] = useState([])


    useEffect(() => {

        getOneShareholderAllMoneyReceipt(id).then(data => {

            console.log(data)
            if (data.error) throw data.message

            setAllMoneyReceipt([...data.data])

        })
            .catch(err => window.alert(err))


    }, [])

    if (allMoneyReceipt.length === 0) return <h3 className='text-center my-5'>No money receipt found</h3>



    let allMoneyReceiptShow

    allMoneyReceiptShow = allMoneyReceipt.map((item, index) => {

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.receivedDate}</td>
                <td>{item.receiptNo}</td>
                <td>
                    {item.receivedAmount} <br />
                    ({convertToText(item.receivedAmount)} Only)
                </td>

                <td className='text-center'>{item.paymentMethod === 'cash' ? <FontAwesomeIcon icon={faCircleCheck} /> : '-'}</td>

                <td className='text-center'>{item.paymentMethod === 'check' ?
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} /> <br />
                        {item.checkNumber}
                    </div> : '-'}</td>

                <td className='text-center'>{item.paymentMethod === 'bank' ?
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} /> <br />
                        {item.bankPaymentType} <br />
                        {item.bankName}
                    </div> : '-'}</td>

                <td className='text-center'>{item.paymentMethod === 'mfs' ?
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} /> <br />
                        {item.mfsName} <br />
                        {item.transactionId}
                    </div> : '-'}</td>

                <td><button className='btn btn-primary btn-sm'>View slip</button></td>
                <td><button className='btn btn-outline-danger btn-sm'>Edit</button></td>

            </tr>
        )

    })



    return (
        <div>
            <div className='p-4'>
                <div className="row">
                    <div className="col-md-3 fw-bold">Name of Shareholder :</div>
                    <div className="col-md-3">{allMoneyReceipt[0].shareholderId.shareholderName}</div>
                </div>

                <div className="row">
                    <div className="col-md-3 fw-bold">Registration ID :</div>
                    <div className="col-md-3">{allMoneyReceipt[0].shareholderId.registrationId}</div>
                </div>

                <div className="row">
                    <div className="col-md-3 fw-bold">Tower :</div>
                    <div className="col-md-3">{allMoneyReceipt[0].shareholderId.tower}</div>
                </div>

                <div className="row">
                    <div className="col-md-3 fw-bold">Flat No :</div>
                    <div className="col-md-3">{allMoneyReceipt[0].shareholderId.flat}</div>
                </div>

                <div className="row">
                    <div className="col-md-3 fw-bold">Mobile :</div>
                    <div className="col-md-9">{allMoneyReceipt[0].shareholderId.mobile}</div>
                </div>
            </div>

            <h3 className='text-center my-5'>Money Receipt Details</h3>

            <div className='px-2'>
                <Table className='text-center' bordered>
                    <thead>
                        <tr>
                            <th rowSpan="2">#</th>
                            <th rowSpan="2">Received Date</th>
                            <th rowSpan="2">Receipt No.</th>
                            <th rowSpan="2">Amount Received</th>
                            <th colSpan="4" className='text-center'>Payment Method</th>
                            <th rowSpan='2' className='text-center'>Slip</th>
                            <th rowSpan="2"></th>
                        </tr>
                        <tr className='text-center'>
                            <th>Cash</th>
                            <th>Check</th>
                            <th>Bank</th>
                            <th>MFS</th>
                        </tr>


                    </thead>

                    <tbody>{allMoneyReceiptShow}</tbody>
                </Table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OneShareholderAllMoneyReceipt)