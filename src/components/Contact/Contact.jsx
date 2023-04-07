import React from 'react'
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import './Contact.css'

const Contact = () => {
  return (
    <section id='contentSection'>

    <div id='contactSection1'>
          <h1>Contact Us</h1>
          <h2>Contact for Premium Business Services</h2>
          <h3>We always love to hear from you.</h3>
      </div>
      <section className='border text-center mb-4'>
      <h3 className='mb-5'>Contact us</h3>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='col-lg-7'>
          <form>
            <div className='row'>
              <div className='col-md-9'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput label='First name' id='form3FirstName' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Email Address' id='form3Email' />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  type='text'
                  label='Subject'
                  id='form3Subject'
                  v-model='form3Subject'
                  wrapperClass='mb-4'
                />
                <MDBTextArea label='Message' id='form3Textarea' wrapperClass='mb-4' />
                <MDBBtn color='primary' className='mb-4'>
                  {' '}
                  Send{' '}
                </MDBBtn>
              </div>
              <div className='col-md-3'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                    <p>
                      <small>Nepal Can Move Building, 51 Muni Bhairab Marga, Tinkune, KMC-32, Kathmandu, Nepal</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                    <p>
                      <small>+977 01 519 9684</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-envelope fa-2x text-primary'></i>
                    <p>
                      <small>sales@nepalcanmove.com</small>
                      <br></br>
                      <small>support@nepalcanmove.com</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </section>
  )
}

export default Contact