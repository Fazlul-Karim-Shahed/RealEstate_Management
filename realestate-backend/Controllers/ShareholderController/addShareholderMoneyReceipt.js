const fs = require('fs')
const { ShareholderMoneyReceiptSchema } = require('../../Schemas/ShareholderMoneyReceiptSchema')
const _ = require('lodash')
const { IncomingForm } = require('formidable')


const addShareholderMoneyReceipt = async (req, res) => {

    let form = new IncomingForm()
    form.keepExtensions = true

    form.parse(req, (err, fields, files) => {

        if (err) {

            res.send({ message: 'Shareholder money receipt upload failed', error: true })

        }

        else {

            let moneyReceiptObj = {}

            for (let i in fields) {

                moneyReceiptObj[i] = fields[i][0]

            }



            let moneyReceipt = new ShareholderMoneyReceiptSchema({
                ...moneyReceiptObj,
                shareholderId: req.params.shareholderId
            })

            if (files && Object.keys(files).length !== 0) {

                let obj = {}
                let arr = []

                for (let i in files) {

                    let p = new Promise(resolve => {

                        fs.readFile(files[i][0].filepath, (err, data) => {

                            resolve({
                                ...obj,
                                data: data,
                                contentType: files[i][0].mimetype,
                                name: i
                            })

                        })
                    })

                    arr.push(p)

                }


                Promise.all(arr).then(arr => {


                    for (let i in arr) {

                        moneyReceipt[arr[i]['name']] = {
                            data: arr[i]['data'],
                            contentType: arr[i]['contentType']
                        }

                    }


                    moneyReceipt.save().then(data => {

                        res.send({ message: 'Shareholder money receipt upload successfully', error: false, value: data });
                    })
                        .catch(err => res.send({ message: 'Shareholder money receipt upload failed', error: true }))

                })

            }
            else {
                moneyReceipt.save().then(data => {

                    res.send({ message: 'Shareholder money receipt upload successfully', error: false, value: data });
                })
                    .catch(err => res.send({ message: 'Shareholder money receipt upload failed', error: true }))

            }

        }


    })


}


module.exports.addShareholderMoneyReceipt = addShareholderMoneyReceipt
