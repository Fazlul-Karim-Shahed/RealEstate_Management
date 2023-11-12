import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'

export const ShareholderPaymentSummery = (props) => {

    const location = useLocation()
    const { allMoneyReceipt } = location.state


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
                    <div><strong className='me-2'>Name of Shareholder :</strong> {allMoneyReceipt[0].shareholderId.shareholderName}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Registration ID :</strong> {allMoneyReceipt[0].shareholderId.registrationId}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Tower :</strong> {allMoneyReceipt[0].shareholderId.tower}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Flat No :</strong> {allMoneyReceipt[0].shareholderId.flat}</div>
                </div>

                <div>
                    <div><strong className='me-2'>Mobile :</strong> {allMoneyReceipt[0].shareholderId.mobile}</div>
                </div>
            </div>

            <h5 className='text-center mt-4 text-uppercase'>Payment Summery</h5>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShareholderPaymentSummery)