
import { Button } from '@mui/material';
import { useState } from 'react'
import Section2 from './Section2';
import Section3 from './Section3';



const Home = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00312-R-Cover-NCMDelivery-2.jpg?fit=768%2C491&ssl=1')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    return (
        <section>
            <section className="showcase" style={backgroundStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
                <hr></hr>
                <h3>Sell more online with Nepal Can Move</h3>
              <h1>Nepal's national courier, cargo, delivery and logistics company</h1>
              <p>Nepal Can Move, your full-service courier & logistic partner, Fast. Secure. Reliable.  You Can Count On us for Your Success and Growth. Experience service like never before.</p>
              <Button variant="contained" id='track-btn'>GET STARTED</Button>
            </div>
          </div>
        </div>
       
      </section>
      <Section2 />
  <Section3 />
        </section>
    )
}

export default Home;