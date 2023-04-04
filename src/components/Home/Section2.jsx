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

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

 

const Section2 = () => {
    
    return (
        <section className="my-section">
         <div className="container">
      <h1>How can we help you?</h1>
      <p>We have developed a state of art technology, a well-trained team, one of the largest network of branches and a comprehensive vehicle fleet to solve the logistics problems of Nepal.</p>
      <div className="box-container">
        <CustomCard icon={""} title={"Cargo"} content={"We work closely with our partner freight forwarders to bring any cargo merchandise from anywhere in the world to Nepal."}/>
        <CustomCard icon={""} title={"Courier & delivery"} content={"We provide convenient home &; office pickup, and delivery to most locations in Nepal. We also provide affordable counter delivery to most of our branches."}/>
        <CustomCard icon={""} title={"Logistics & warehousing"} content={"We provide complex logistics management that includes warehousing, inventory control, cold chain, project logistics, aid delivery, etc."}/>
        <CustomCard icon={""} title={"Transport"} content={"We operate our own fleet to provide a range of reliable transport & trucking staff, vehicles and solutions that meet your business needs."}/>
        <CustomCard icon={""} title={"Technology"} content={"We provide advanced logistics, ecommerce, warehousing and inventory technology. We provide APIs and integration services."}/>
        <CustomCard icon={""} title={"Projects"} content={"We provide project management services to meet any complex logistics needs of organizations, corporations, government and NGOs."}/>
      </div>
    </div>

      </section>
    )
}

export default Section2;