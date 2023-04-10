import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Section3.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StoryCard = (props) => {
  return (
    <Card sx={{ maxWidth: 400 }} id='section3Card'>
      <div id='imageSection'>
        <img src={props.imageUrl} width={"100%"} height={"240vh"} />
      </div>
      <CardContent id='cardContent'>
        <Typography id='cardContentheading' gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" id="cardContent">
          {props.content}
        </Typography>
      </CardContent>
    </Card>

  )
}

const Section3 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ width: '100%' }} id='section3'>
      <Stack spacing={2}>
     
          <h2 id='ourStories'>Our Stories</h2>
    
          <Stack direction={isSmallScreen ? "column" : "row"} spacing={2} justifyContent="center" alignItems="center">
                <StoryCard
                imageUrl={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00276-Square-NCM-Delivery-R-2.1.jpg?w=511&ssl=1"}
                title={"Villages as important as towns"}
                content={"While many focus on big cities we have focused on expanding our services all over Nepal. Our experience shows it is the villages and small towns that need ecommerce more."} />
           
      
              <StoryCard
                imageUrl={"https://cdn.techjockey.com/blog/wp-content/uploads/2018/12/13172658/Top-10-Courier-Management-Software-in-India-2022_feature.jpg"}
                title={"Transport is the critical factor"}
                content={"The logistics bottleneck is because of poor and unprofessional transport infrastructure. We started owning and managing our own fleet to provide secure & timely service."} />
          
           
              <StoryCard
                imageUrl={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/DSC00332-1-Square-Walking-Bridge-R-2.jpg?w=512&ssl=1"}
                title={"Give us the challenge!"}
                content={"We have expanded our services to Karnali and far west, often delivering on foot, human back and donkeys. It is a challenge, but we are here to provide services to Humla and Pyuthan as much as Dharan and Birtamod."} />
            
          </Stack>
      
        <Item className='stackItem'>
          <Button variant="contained" id='track-btn'>View More</Button>
        </Item>
      </Stack>
    </Box>
  );
}


export default Section3;