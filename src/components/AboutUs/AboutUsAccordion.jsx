import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import './AboutUsAccordion.css'

const AboutUsAccordion = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className='accordionHeader'
                >

                    <Typography id='accordionTitle'>
                        We are big enough to embrace global practices, small enough to cater local needs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  id='accordionText'>
                        We truly understand the difference of being big as a company and still personally be connected
                        with the vendors. Backed by Australian technology conglomerate “The Can Brand”, Nepal Can Move
                        (NCM) is a national logistic and courier company with largest domestic
                        distribution network in the country. We infuse global best practices and innovative technology
                        in business operation while letting you to exercise full control and visibility of your packages
                        through dedicated Relationship Managers (RMs) and Self-Service Portal (SSP)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className='accordionHeader'
                >
                    <Typography id='accordionTitle'>
                        NCM is one stop shop for all your courier & logistic needs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        We offer pick up services right from your door, deliver packages in our own fleet,
                        using the fastest route that are available and convenient to your customer,
                        collect COD money from customer, and pay it back to you with no fuss.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className='accordionHeader'
                >

                    <Typography id='accordionTitle'>
                        Largest network of regional offices, branchers and distribution routes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        We own the largest network of cross-cities delivery services of our own without relying on third party agencies like others.
                        We have established over 22,500 cross distribution points through our 155 branches and 11 regional offices.
                        By partnering with this largest network in the country, you will not miss on any sales opportunity anywhere in Nepal.
                        Be part of something big!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className='accordionHeader'
                >
                    <Typography id='accordionTitle'>
                        Experience Fast, Secure & Reliable services like never before!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        We provide fastest and most reliable courier services through our largest network of people, fleet and distribution routes.
                        Launched in Sep 2021, our Eastern Express™ Services has been most popular with Vendors as fastest delivery route compared to
                        any competitors in eastern region where 90% packages reach customer very next day. NCM delivers 80% of total packages within
                        24 hours in major towns and cities.
                        We are open 365 days a year at your service so that you can sell round the clock.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className='accordionHeader'
                >
                    <Typography id='accordionTitle'>
                        Customer centric operations & culture supported by dedicated account managers
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        We handle your packages with care and love. Our riders are our hero who are well
                        trained for world class customer service and communication. We aim to attend your queries within two hours.
                        Right from CEO to riders,
                        everyone has an eagle-eye on your packages until we delivered it.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className='accordionHeader'
                >
                    <Typography id='accordionTitle'>
                        Technology company in logistic industry: Building future proof partnership
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        Technology is at the front of our business.  We have an in-house team of dedicated developers.
                        We have invested heavily in technology from day one to improve our process and system for fast, secure, and reliable services.
                        We think outside the box to help our vendors sell more online.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={
                        <Badge color="primary">
                            <AddIcon color="action" />
                        </Badge>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography id='accordionTitle'>
                        We ask for your suggestions and feedback regularly, learn & improve!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id='accordionText'>
                        We understand things might go wrong and expectation might be faded.
                        We have a large team of RMs whose job is to be in touch with you and address your concerns and take feedback.
                        You will be assigned with dedicated account managers with their mobile access to address your queries.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default AboutUsAccordion