import Button from '@mui/material/Button';
import './Section3.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const StoryCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.content}
        </Typography>
      </CardContent>   
    </Card>
  )
}

const Section3 = () => {
  return (
    <section id='section3'>
     
      <div id='section3StorySection'>
        <StoryCard imageUrl={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00276-Square-NCM-Delivery-R-2.1.jpg?w=511&ssl=1"}
          title={"Villages as important as towns"}
          content={"While many focus on big cities we have focused on expanding our services all over Nepal. Our experience shows it is the villages and small towns that need ecommerce more."} />
        <StoryCard imageUrl={"https://cdn.techjockey.com/blog/wp-content/uploads/2018/12/13172658/Top-10-Courier-Management-Software-in-India-2022_feature.jpg"}
          title={"Transport is the critical factor"}
          content={"The logistics bottleneck is because of poor and unprofessional transport infrastructure. We started owning and managing our own fleet to provide secure & timely service."} />

        <StoryCard imageUrl={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00332-1-Square-Walking-Bridge-R-2.jpg?w=512&ssl=1"}
          title={"Give us the challenge we will take it"}
          content={"We have expanded our services to Karnali and far west, often delivering on foot, human back and donkeys. It is a challenge, but we are here to provide services to Humla and Pyuthan as much as Dharan and Birtamod."} />
      </div>
      <div id='section3BtnSection'>
        <Button variant="contained" id='track-btn'>View More</Button>
      </div>
    </section>
  )
}

export default Section3;