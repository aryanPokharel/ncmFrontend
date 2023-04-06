import { Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import './Section1.css'

const Section1 = () => {
  const backgroundStyle = {
    backgroundColor: 'lightgray',
    // backgroundImage: "url('https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00312-R-Cover-NCMDelivery-2.jpg?fit=768%2C491&ssl=1')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="row" id='section1'>
      <div className="col-12">
        <Navbar />
      </div>
      <div className="col-10">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto" id='section1ContentSection'>
            
              <h3 id='contentItem'>Sell more online with Nepal Can Move</h3>
              <h1 id='contentItem'>Nepal's national courier, cargo, delivery and logistics company</h1>
              <p id='contentItem'>Nepal Can Move, your full-service courier & logistic partner, Fast. Secure. Reliable.  You Can Count On us for Your Success and Growth. Experience service like never before.</p>
              <Button variant="contained" id='track-btn'>GET STARTED</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-2">
        .col-6
        <br />
        Subsequent columns continue along the new line.
      </div> */}
    </div>

    // <section className="showcase" style={backgroundStyle}>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 my-auto">
    //       <hr></hr>
    //       <h3>Sell more online with Nepal Can Move</h3>
    //       <h1>Nepal's national courier, cargo, delivery and logistics company</h1>
    //       <p>Nepal Can Move, your full-service courier & logistic partner, Fast. Secure. Reliable.  You Can Count On us for Your Success and Growth. Experience service like never before.</p>
    //       <Button variant="contained" id='track-btn'>GET STARTED</Button>
    //     </div>
    //   </div>
    // </div>

    // </section>
  )
}

export default Section1;