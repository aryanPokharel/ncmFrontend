import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardDeck.css'

const cardData = [
    {
        index: 0,
        title: "Discover",
        content: "Business is all about solving problems. We start with discovering the logistics problems and pain-points."
    },
    {
        index: 1,
        title: "Define",
        content: "We define what would be the optimal solution to the problems that want solutions for."
    },
    {
        index: 2,
        title: "Design",
        content: "We carefully design the systems that would achieve the defined solution to the problems."
    },
    {
        index: 3,
        title: "Develop",
        content: "We develop the designed systems. We use latest technology to develop the systems and solutions."
    },
    {
        index: 4,
        title: "Deploy",
        content: "We deploy the developed solution. We test, improve, deploy and repeat until the defined standards are acheived."
    },
    {
        index: 5,
        title: "Deliver",
        content: "We deliver solution to the client and continue the 6-D process on a periodic ongoing basis."
    }
]

const ReturnCardInfo = (info) => {
    return (
        <Card sx={{ minWidth: 275 }} id='card'>

            <CardContent id='cardContent'>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom >
                    {info.cardNumber + 1}
                </Typography>
                <Typography variant="h3" component="div" id='cardTitle'>
                    {cardData[info.cardNumber].title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">

                </Typography>
                <Typography variant="body2" id='cardDescription'>
                    {cardData[info.cardNumber].content}
                    <br />

                </Typography>
            </CardContent>

        </Card>
    )
}

const CardDeck = () => {
    return (
        <div id='cardDeck'>
            <div className='cardDeckRow'>
                <ReturnCardInfo cardNumber={0} />
                <ReturnCardInfo cardNumber={1} />
                <ReturnCardInfo cardNumber={2} />
            </div>
            <div className='cardDeckRow'>
                <ReturnCardInfo cardNumber={3} />
                <ReturnCardInfo cardNumber={4} />
                <ReturnCardInfo cardNumber={5} />
            </div>
        </div>
    )
}

export default CardDeck