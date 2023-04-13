import { Button } from '@mui/material';
import './Section1.css'

const Section1 = () => {
  return (
    <section id='section1'>
      <div id='section1Child'>
        <h3 style={{ fontSize: "2vw" }}>Sell more online with Nepal Can Move</h3>

        <h3 style={{ fontSize: "2vw" }}>Nepal's national courier, cargo, delivery and logistics company</h3>
        <p style={{ fontSize: "1vw" }}>Nepal Can Move, your full-service courier & logistic partner, Fast. Secure. Reliable.  You Can Count On us for Your Success and Growth. Experience service like never before.</p>
        <a href='/contact'>
          <Button variant="contained" id='track-btn'>GET STARTED</Button>
        </a>
      </div>
    </section>

  )
}

export default Section1;