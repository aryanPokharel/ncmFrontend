import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react'

import './Section5.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Section5 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <h2 className='section5Item'>
        Our Amazing Clients
        </h2>
        <h2 className='section5Item'>
        Our clients are our advocates. We get most of our business from word-of-mouth referral.
        </h2>
        <Item>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center"> 
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
      </Stack>
        </Item>
      </Stack>
    </Box>
  )
}

export default Section5;