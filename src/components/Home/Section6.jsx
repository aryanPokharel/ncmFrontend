import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Section6.css'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const GetInTouch = () => {

    return (
        <div className="container bcontent" id='getInTouchCard'>
            <div className="card" style={{ width: "100%" }}>
                <div className="row no-gutters">
                    <div className="col-sm-5" id='cardBtnSection'>
                        <Button variant="contained" id='track-btn'>Get Started</Button>
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h5 className="card-title">Would you like to start with us?</h5>
                            <p className="card-text">
                                Please contact us and one of our relationship managers will guide you with our easy onboarding process.
                                Lets us help you meet your goals.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Section6 = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section id='section6'>
            <Accordion id='section6Accordion' className='accordions' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography id='texts' sx={{ width: '33%', flexShrink: 0 }}>
                        Manisha K.C.
                    </Typography>
                    <Typography id='texts' sx={{ color: 'text.secondary' }}>CEO, MAHABOUDDHA WHOLESALE.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h2 id='texts'>"Most supportive team!"</h2>
                        <p id='texts'>
                            "Being in a e-commerce business for almost 10 years,
                            we were always looking for delivery partner who can deliver all over Nepal.
                            As we started working together with NCM,
                            we can almost deliver all over Nepal with cash on delivery service at very best rate.
                            Nepal Can Move with the most supportive team they took online business to the next level.
                            We wish Nepal Can Move reach to the next level and make online shopping more easy and
                            more affordable."
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordions' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography id='texts' sx={{ width: '33%', flexShrink: 0 }}>John Doe</Typography>
                    <Typography id='texts' sx={{ color: 'text.secondary' }}>
                        Enterpreneur
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='texts'>
                        NCM has helped me run my business smoothly for the last 5 years!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordions' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography id='texts' sx={{ width: '33%', flexShrink: 0 }}>
                        Ram Bahadur
                    </Typography>
                    <Typography id='texts' sx={{ color: 'text.secondary' }}>
                        Shopping Enthusiast
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='texts'>
                        As a person who loves shopping, 
                        i find NCM very much efficient in moving goods across the country within least possible time frame!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <GetInTouch />
        </section>
    );
}

export default Section6;
