import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Section6.css'


const Section6 = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section id='section6'>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <div id='frontSide'>
                            <Typography id='texts' sx={{ width: '33%', flexShrink: 0 }}>
                                Manisha K.C.
                            </Typography>
                            <img
                                src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/Manisha-KC-R.jpg?w=429&ssl=1"
                                className="rounded-circle"
                                height={150}
                                width={150}
                                alt="Dp"
                                loading="lazy"
                            />
                            <Typography id='texts' sx={{ color: 'text.secondary' }}>
                                CEO, MAHABOUDDHA WHOLESALE
                            </Typography>
                        </div>
                    </div>
                    <div className="flip-box-back" id='flipBack'>
                        <h2 id="texts">"Most supportive team!"</h2>
                        <p id="texts">
                            "Being in a e-commerce business for almost 10 years, we were always
                            looking for delivery partner who can deliver all over Nepal. As we
                            started working together with NCM, we can almost deliver all over Nepal
                            with cash on delivery service at very best rate. Nepal Can Move with the
                            most supportive team they took online business to the next level. We
                            wish Nepal Can Move reach to the next level and make online shopping
                            more easy and more affordable."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section6;
