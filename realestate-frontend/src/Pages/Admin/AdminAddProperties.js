import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createFormData } from '../../Functions/createFormData'
import { adminAddProperties } from '../../Functions/PropertiesFunctions'



const mapStateToProps = (state) => ({})

export const AdminAddProperties = (props) => {


  const [values, setValues] = useState({
    tittle: '',
    content: '',
    propertyType: 's',
    sellingType: 's',
    bathroom: '',
    kitchen: '',
    bhk: 's',
    bedroom: '',
    balcony: '',
    hall: '',
    floor: 's',
    price: '',
    city: '',
    state: '',
    totalFloor: 's',
    areaSize: '',
    address: '',
    feature: '',
    uid: '',
    status: 's',
    isFeatured: 's'
  })




  const handleChange = (e) => {


    if (e.target.type === 'file') {

      setValues({
        ...values,
        [e.target.name]: e.target.files[0]
      })

    }
    else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    adminAddProperties(createFormData(values)).then(data => {
      console.log(data)
    })

  }





  return (
    <div className='container my-4'>


      <div className='bg-white border p-3 shadow-sm'>

        <h4>Add New Property</h4>
        <hr />


        <div>
          <form onSubmit={handleSubmit} enctype="multipart/form-data" method="post">

            <div className="row m-0 pt-4">
              <div className="col-2">
                <label htmlFor="Tittle">Tittle</label>
              </div>
              <div className="col-9">
                <input className='form-control' placeholder='Enter tittle' type="text" id='tittle' name='tittle' onChange={e => handleChange(e)} value={values.tittle} />
              </div>
            </div>

            <div className="row m-0 pt-4">
              <div className="col-2">
                <label htmlFor="content">Content</label>
              </div>
              <div className="col-9">
                <textarea className='form-control' placeholder='Enter content' type="text" id='content' name='content' onChange={e => handleChange(e)} value={values.content} />
              </div>
            </div>


            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="propertyType">Property Type</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.propertyType} className='form-control' name="propertyType" id="propertyType"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="bhk">BHK</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.bhk} className='form-control' name="bhk" id="bhk"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
            </div>



            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="sellingType">Selling Type</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.sellingType} className='form-control' name="sellingType" id="sellingType"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="bedroom">Bedroom</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.bedroom} placeholder='Enter Bedroom (only 1-9)' type='number' className='form-control' name="bedroom" id="bedroom" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="bathroom">Bathroom</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.bathroom} placeholder='Enter Bathroom (only 1-9)' className='form-control' name="bathroom" id="bathroom" type='number' />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="balcony">Balcony</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.balcony} placeholder='Enter Balcony (only 1-9)' className='form-control' name="balcony" id="balcony" type='number' />
                  </div>
                </div>
              </div>
            </div>


            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="kitchen">Kitchen</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.kitchen} placeholder='Enter Kitchen (only 1-9)' type='number' className='form-control' name="kitchen" id="kitchen" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="hall">Hall</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.hall} placeholder='Enter Hall (only 1-9)' className='form-control' name="hall" id="hall" type='number' />
                  </div>
                </div>
              </div>
            </div>

            <h4 className='mt-5'>Price & Location</h4>


            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="floor">Floor</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.floor} className='form-control' name="floor" id="floor"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="totalFloor">Total Floor</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.totalFloor} className='form-control' name="totalFloor" id="totalFloor"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="price">Price</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.price} placeholder='Enter Price' className='form-control' name="price" id="price" type='number' />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="areaSize">Area Size</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.areaSize} placeholder='Enter Area Size (in Sqrt)' className='form-control' name="areaSize" id="areaSize" type='number' />
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="city">City</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.city} placeholder='Enter City' className='form-control' name="city" id="city" type='text' />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="address">Address</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.address} placeholder='Enter Address' className='form-control' name="address" id="address" type='text' />
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="state">State</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.state} placeholder='Enter State' className='form-control' name="state" id="state" type='text' />
                  </div>
                </div>
              </div>
            </div>


            <div className="row m-0 pt-4">
              <div className="col-2">
                <label htmlFor="feature">Feature</label>
              </div>
              <div className="col-9">
                <textarea onChange={e => handleChange(e)} value={values.feature} className='form-control' placeholder='Enter feature' type="text" id='feature' name='feature' />
              </div>
            </div>




            <h4 className='mt-5'>Image & Status</h4>


            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="image1">Image-1</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="image1" id="image1" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="image2">Image-2</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="image2" id="image2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="image3">Image-3</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="image3" id="image3" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="image4">Image-4</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="image4" id="image4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="image5">Image-5</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="image5" id="image5" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="uid">UID</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} value={values.uid} placeholder='Enter uid' className='form-control' name="uid" id="uid" type='text' />
                  </div>
                </div>
              </div>
            </div>



            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="status">Status</label></div>
                  <div className="col-8">
                    <select onChange={e => handleChange(e)} value={values.status} className='form-control' name="status" id="status"><option value="">Select</option></select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="floorPlanImage">Floor Plan Image</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="floorPlanImage" id="floorPlanImage" />
                  </div>
                </div>
              </div>
            </div>



            <div className="row pt-4 m-0">
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="basementFloorPlanImage">Basement Floor Plan Image</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="basementFloorPlanImage" id="basementFloorPlanImage" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4"><label htmlFor="groundFloorPlanImage">Ground Floor Plan Image</label></div>
                  <div className="col-8">
                    <input onChange={e => handleChange(e)} type='file' className='form-control' name="groundFloorPlanImage" id="groundFloorPlanImage" />
                  </div>
                </div>
              </div>
            </div>


            <hr />

            <div className="row pt-4 m-0">
              <div className="col-2"><label htmlFor="isFeatured">Is Featured?</label></div>
              <div className="col-8">
                <select onChange={e => handleChange(e)} value={values.isFeatured} className='form-control' name="isFeatured" id="isFeatured"><option value="">Select</option></select>
              </div>
            </div>




            <div className='text-'>
              <button className='btn btn-success my-5 px-4' onSubmit={e => handleSubmit(e)} type='submit'><FontAwesomeIcon icon={faUpload} /> Publish Property</button>
            </div>




          </form>
        </div>

        {/* <div


          // initialValues={{
          //   tittle: '',
          //   content: '',
          //   propertyType: '',
          //   sellingType: '',
          //   bathroom: '',
          //   kitchen: '',
          //   bhk: '',
          //   bedroom: '',
          //   balcony: '',
          //   hall: '',
          //   floor: '',
          //   price: '',
          //   city: '',
          //   state: '',
          //   totalFloor: '',
          //   areaSize: '',
          //   address: '',
          //   feature: '',
          //   image1: '',
          //   image2: '',
          //   image3: '',
          //   image4: '',
          //   image5: '',
          //   floorPlanImage: '',
          //   basementFloorPlanImage: '',
          //   groundFloorPlanImage: '',

          //   uid: '',
          //   status: '',
          //   isFeatured: ''
          // }}

          // onSubmit={val => {

          //   // console.log()

          //   adminAddProperties(createFormData(val))


          // }}

        >

          {({ values, e=>handleChange(e), handleSubmit }) => (
  
          )}

        </div> */}
      </div>

    </div>
  )
}



export default connect(mapStateToProps)(AdminAddProperties)