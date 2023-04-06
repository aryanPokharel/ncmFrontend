import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel2';
import './Section5.css'
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.
const Section5 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // 
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  };

  // const events = {
  //     onDragged: function(event) {...},
  //     onChanged: function(event) {...}
  // };
  return (
    <section id='section5'>
      <h1>Our Amazing Clients</h1>
      <h5>Our clients are our advocates. We get most of our business from word-of-mouth referral.</h5>
      <div class="owl-carousel owl-theme" id='carouselHolder'>
        <div className="item">

          <img alt="Kinumna"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Kinumna.jpg?fit=850%2C850&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="PrettyClick"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-PrettyClick.jpg?fit=2000%2C2000&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="Asseenon"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-As-Seen-On-YouTube.jpg?fit=819%2C850&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="JAK's"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Jacks-Fashion.jpg?fit=677%2C671&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="N"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Neptra.png?fit=612%2C612&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="MeroShopping"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Mero-Shopping.jpg?fit=731%2C425&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="Om"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-MahaBouddha-Wholesale.jpg?fit=884%2C850&ssl=1"
            className='carouselImg' />

        </div>
        <div className="item">

          <img alt="KhemSharma"
            src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-KhemSharma.jpg?fit=115%2C105&ssl=1"
            className='carouselImg' />

        </div>
      </div>
      
      {/* <OwlCarousel options={options}>
  <div>
    <img alt="Kinumna" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Kinumna.jpg?fit=850%2C850&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="PrettyClick" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-PrettyClick.jpg?fit=2000%2C2000&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="Asseenon" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-As-Seen-On-YouTube.jpg?fit=819%2C850&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="JAK's" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Jacks-Fashion.jpg?fit=677%2C671&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="N" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Neptra.png?fit=612%2C612&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="MeroShopping" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-Mero-Shopping.jpg?fit=731%2C425&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
  <div>
    <img alt="KhemSharma" src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Logo-KhemSharma.jpg?fit=115%2C105&ssl=1" style={{width: '200px', height: '200px'}} />
  </div>
</OwlCarousel> */}

    </section>
  )
}

export default Section5;