
import { Button } from '@mui/material';
import { useState } from 'react'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section1 from './Section1';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Section5 from './Section5';
import Section6 from './Section6';

const Home = () => {

  return (
    <section>

      {/* <Navbar /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
      {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      
    </Box> */}
    </section>
  )
}

export default Home;