import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardData = [
    {
        index : 0,
        title: "Discover",
        content: "Business is all about solving problems. We start with discovering the logistics problems and pain-points."
    },
    {
        index : 1,
        title: "Define",
        content: "We define what would be the optimal solution to the problems that want solutions for."
    },
    {
        index : 2,
        title: "Design",
        content: "We carefully design the systems that would achieve the defined solution to the problems."
    },
    {
        index : 3,
        title: "Develop",
        content: "We develop the designed systems. We use latest technology to develop the systems and solutions."
    },
    {
        index : 4,
        title: "Deploy",
        content: "We deploy the developed solution. We test, improve, deploy and repeat until the defined standards are acheived."
    },
    {
        index : 5,
        title: "Deliver",
        content: "We deliver solution to the client and continue the 6-D process on a periodic ongoing basis."
    }
]

const ReturnCardInfo = (info) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {info.cardNumber+1}
                </Typography>
                <Typography variant="h5" component="div">
                {cardData[info.cardNumber].title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    
                </Typography>
                <Typography variant="body2">
                {cardData[info.cardNumber].content}
                    <br />
                    
                </Typography>
            </CardContent>
            
        </Card>
    )
}

const CardDeck = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ReturnCardInfo cardNumber={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CardDeck