
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')
const { IncomingForm } = require('formidable')
const fs = require('fs')

const addShareholder = async (req, res) => {


    let form = new IncomingForm()
    form.keepExtensions = true

    form.parse(req, (err, fields, files) => {

        if (err) {
            res.send({ message: 'Shareholder registration failed', error: true })
        }
        else {

            let shareholderObj = {}

            for (let i in fields) {
                shareholderObj[i] = fields[i][0]
            }

            let shareholder = new ShareholderSchema(shareholderObj)




            if (files && Object.keys(files).length != 0) {

                // if file

                let arr = []

                for (let i in files) {

                    let p = new Promise(resolve => {

                        fs.readFile(files[i][0].filepath, (err, data) => {

                            resolve({
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

                        shareholder[arr[i]['name']] = {
                            data: arr[i]['data'],
                            contentType: arr[i]['contentType']
                        }

                    }


                    if (req.user.role === 'admin') {

                        shareholder['acceptedByAdmin'] = true

                        shareholder.save().then(data => {

                            res.send({ message: 'shareholder registration successfully', error: false, value: data });
                        })

                    }
                    else {

                        shareholder.save().then(data => {

                            res.send({ message: 'Shareholder registration request received. It will be accepted by admin', error: false, value: data });
                        })

                    }


                })

            }

            else {
                // no file
                if (req.user.role === 'admin') {

                    shareholder['acceptedByAdmin'] = true

                    shareholder.save().then(data => {

                        res.send({ message: 'Shareholder registration successfully', error: false, value: data });
                    })
                }
                else {

                    shareholder.save().then(data => {

                        res.send({ message: 'Shareholder registration request received. It will be accepted by admin', error: false, value: data });
                    })

                }


            }




        }
    })



}

module.exports.addShareholder = addShareholder

