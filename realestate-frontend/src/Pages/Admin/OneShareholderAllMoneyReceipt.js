import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getOneShareholderAllMoneyReceipt } from '../../Api/ShareholderApi'
import { Table } from 'reactstrap'

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
                <td>{index + 1}</td>
                <td>{item.receiptNo}</td>
                <td>{item.receivedAmount}</td>
                <td>{ }</td>
                <td>{item.paymentMethod}</td>

                <td><button className='btn btn-sm btn-outline-secondary'>View</button></td>
                <td><button className='btn btn-sm btn-outline-info'>Details</button></td>
                <td><button className=''>Send Message</button></td>
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

            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Received Date</th>
                        <th>Payment No.</th>
                        <th>Receipt No</th>
                        <th>Amount Received</th>
                        <th>TK (In Word)</th>
                        <th rowSpan='2'>Payment Method</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>{allMoneyReceiptShow}</tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OneShareholderAllMoneyReceipt)