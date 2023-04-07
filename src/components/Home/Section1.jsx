import { Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import './Section1.css'

const Section1 = () => {
  const backgroundStyle = {
    backgroundColor: 'lightgray',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="row" id='section1'>
      <div className="col-12">
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
    </div>
  )
}

export default Section1;