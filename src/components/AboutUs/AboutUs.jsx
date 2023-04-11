import './AboutUs.css'
import CardDeck from './CardDeck';
import ChooseUs from './ChooseUs';
import OurTeam from './OurTeam';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AboutUs = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <div id='aboutUsHeading'>
                    <h1>About Us</h1>
                    <h2>You are in the company of CAN people</h2>
                    <h3>We are the Can People with Can Vision. We chase big problems and solve them.</h3>
                </div>
                <div id='aboutUsCardDeck'>
                    <div className='aboutUsCard'>
                        <h1>Who Are We</h1>
                        <p>
                            We focus on the major problems in trade, commerce and logistics and solve them using Australian management,
                            and technology.
                            We think business in terms of systems. The better the system is the better the business is.
                            Our systems offer you a complete solution with predicable outcomes in record times. Give us your problems.
                            We use our systems i.e. the power of tech and good management to plan a predictable and consistent
                            solution every time.
                        </p>
                    </div>
                    <div className='aboutUsCard'>
                        <h1>Our Mission</h1>
                        <p>
                            Everyday, more than 400 staff driven with CAN culture are out there at your service.
                            We believe prosperity comes from logistic, trade and ecommerce infrastructure.
                            We are marching towards CAN VISION™ 2030 and will establish branches in each of 753 municipalities,
                            reate 10,000 new jobs and facilitate trade and commerce by connecting 90% people through our massive network.
                            We dream big for the good of country and we have a clear plan.
                        </p>
                    </div>
                    <div className='aboutUsCard'>
                        <h1>What We Do</h1>
                        <p>
                            Cargo which includes import and export.
                            Courier & delivery - we can deliver to most locations in Nepal
                            Logistics & warehousing - we can receive, manage and fulfill.
                            Transport - we can provide you fleet management & transport solutions
                            Technology - advanced eCommerce banking and logistic tech
                            Projects - we deliver aid and help meet your project logsitics needs.
                        </p>
                    </div>
                </div>
                <CardDeck />
                <ChooseUs />
                <OurTeam />
            </Stack>
        </Box>

        // <CardDeck />
        // <ChooseUs />
        // <OurTeam />

    )
}

export default AboutUs;

