
const _ = require('lodash')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')
const { IncomingForm } = require('formidable')
const fs = require('fs')

const addEmployee = async (req, res) => {


    let form = new IncomingForm()
    form.keepExtensions = true

    form.parse(req, (err, fields, files) => {

        if (err) {
            res.send({ message: 'Employee registration failed', error: true })
        }
        else {

            let employeeObj = {}

            for (let i in fields) {
                employeeObj[i] = fields[i][0]
            }

            let employee = new EmployeeSchema(employeeObj)




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

                        employee[arr[i]['name']] = {
                            data: arr[i]['data'],
                            contentType: arr[i]['contentType']
                        }

                    }


                    if (req.user.role === 'admin') {

                        employee['acceptedByAdmin'] = true

                        employee.save().then(data => {

                            res.send({ message: 'Employee registration successfully', error: false, value: data });
                        })

                    }
                    else {

                        employee.save().then(data => {

                            res.send({ message: 'Employee registration request received. It will be accepted by admin', error: false, value: data });
                        })

                    }


                })

            }

            else {
                // no file
                if (req.user.role === 'admin') {

                    employee['acceptedByAdmin'] = true

                    employee.save().then(data => {

                        res.send({ message: 'Employee registration successfully', error: false, value: data });
                    })
                }
                else {

                    employee.save().then(data => {

                        res.send({ message: 'Employee registration request received. It will be accepted by admin', error: false, value: data });
                    })

                }

            }

        }
    })



}

module.exports.addEmployee = addEmployee

