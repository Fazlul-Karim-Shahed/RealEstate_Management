
// const formidable = require('formidable')
// const fs = require('fs')
const { PropertiesSchema } = require('../../Schemas/PropertiesSchema')
const _ = require('lodash')


const addProperties = async (req, res) => {

    let form = new formidable.IncomingForm()
    form.keepExtensions = true

    form.parse(req, (err, fields, files) => {

        if (err) {

            res.send({ message: 'Property upload failed', error: true })
        }
        else {

            let propertyObj = {}

            for (let i in fields) {

                propertyObj[i] = fields[i][0]

            }



            let properties = new PropertiesSchema(propertyObj)

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

                        properties[arr[i]['name']] = {
                            data: arr[i]['data'],
                            contentType: arr[i]['contentType']
                        }

                    }


                    properties.save().then(data => {

                        res.send({ message: 'Product created successfully', error: false, value: data });
                    })

                })

            }
            else {
                res.send({ message: 'Product creation failed. Please add photo', error: true });

            }

        }


    })


}


module.exports.addProperties = addProperties