import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomCard from './CustomCard';
import './Section2.css'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );

const Section2 = () => {
    
    return (
        <section id="section2">
         <div className="container">
      <h1>How can we help you?</h1>
      <p id="section2Content">We have developed a state of art technology, a well-trained team, one of the largest network of branches and a comprehensive vehicle fleet to solve the logistics problems of Nepal.</p>
      <div className="box-container">
        <CustomCard icon={"DirectionsBoatIcon"} title={"Cargo"} content={"We work closely with our partner freight forwarders to bring any cargo merchandise from anywhere in the world to Nepal."}/>
        <CustomCard icon={"AllInboxIcon"} title={"Courier & delivery"} content={"We provide convenient home &; office pickup, and delivery to most locations in Nepal. We also provide affordable counter delivery to most of our branches."}/>
        <CustomCard icon={"WarehouseIcon"} title={"Logistics & warehousing"} content={"We provide complex logistics management that includes warehousing, inventory control, cold chain, project logistics, aid delivery, etc."}/>
        <CustomCard icon={"LocalShippingIcon"} title={"Transport"} content={"We operate our own fleet to provide a range of reliable transport & trucking staff, vehicles and solutions that meet your business needs."}/>
        <CustomCard icon={"StorageIcon"} title={"Technology"} content={"We provide advanced logistics, ecommerce, warehousing and inventory technology. We provide APIs and integration services."}/>
        <CustomCard icon={"AccountTreeIcon"} title={"Projects"} content={"We provide project management services to meet any complex logistics needs of organizations, corporations, government and NGOs."}/>
      </div>
    </div>
      </section>
    )
}

export default Section2;