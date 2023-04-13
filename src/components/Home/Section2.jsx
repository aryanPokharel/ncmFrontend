import * as React from 'react';
import {Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import CustomCard from './CustomCard';
import './Section2.css'

const Section2 = () => {
  return (
    <section id="section2">
      <Box sx={{ width: '100%' }} id='sectionBox'>
        <Stack spacing={2} id='stack'>
          <h1 id='item1'>
            How can we help you?
          </h1>
          <p id='item2'>
            We have developed a state of art technology, a well-trained team,
            one of the largest network of branches and a comprehensive vehicle fleet to solve the logistics problems of Nepal.
          </p>
          <div id='item3'>
            <div className='item3Row' id='row1'>
              <CustomCard
                icon={"DirectionsBoatIcon"}
                title={"Cargo"}
                content={"We work closely with our partner freight forwarders to bring any cargo merchandise from anywhere in the world to Nepal."} />

              <CustomCard
                icon={"AllInboxIcon"}
                title={"Courier & delivery"}
                content={"We provide convenient home &; office pickup, and delivery to most locations in Nepal. We also provide affordable counter delivery to most of our branches."} />

              <CustomCard
                icon={"WarehouseIcon"}
                title={"Logistics & warehousing"}
                content={"We provide complex logistics management that includes warehousing, inventory control, cold chain, project logistics, aid delivery, etc."} />
            </div>
            <div className='item3Row' id='row2'>
              <CustomCard
                icon={"LocalShippingIcon"}
                title={"Transport"}
                content={"We operate our own fleet to provide a range of reliable transport & trucking staff, vehicles and solutions that meet your business needs."} />

              <CustomCard
                icon={"StorageIcon"}
                title={"Technology"}
                content={"We provide advanced logistics, ecommerce, warehousing and inventory technology. We provide APIs and integration services."} />

              <CustomCard
                icon={"AccountTreeIcon"}
                title={"Projects"}
                content={"We provide project management services to meet any complex logistics needs of organizations, corporations, government and NGOs."} />
            </div>
          </div>

        </Stack>
      </Box>
     
    </section>
  )
}

export default Section2;