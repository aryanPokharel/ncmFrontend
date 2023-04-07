import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ChooseUs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex"
                            src="https://media.istockphoto.com/id/1075972590/vector/hand-united-together-form-lines-triangles-and-particle-style-design-illustration-vector.jpg?s=612x612&w=0&k=20&c=FhGyRn8ThLncMbogiXDRBOd72lLNb-I7gSiKE3gnPNY=" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Item>Why Choose Us?</Item>
                        <Item>Everyday, more than 400 staff driven with CAN culture are out there at your service. We believe prosperity comes from logistic, trade and ecommerce infrastructure. We are marching towards CAN VISION™ 2030 and will establish branches in each of 753 municipalities, create 10,000 new jobs and facilitate trade and commerce by connecting 90% people through our massive network. We dream big for the good of country and we have a clear plan.</Item>
                        <Item>
                            <div>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >

                                        <Typography sx={{ color: 'text.secondary' }}>
                                            We are big enough to embrace global practices, small enough to cater local needs
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
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
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >

                                        <Typography sx={{ color: 'text.secondary' }}>
                                            NCM is one stop shop for all your courier & logistic needs
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We offer pick up services right from your door, deliver packages in our own fleet,
                                            using the fastest route that are available and convenient to your customer,
                                            collect COD money from customer, and pay it back to you with no fuss.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >

                                        <Typography sx={{ color: 'text.secondary' }}>
                                            Largest network of regional offices, branchers and distribution routes
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We own the largest network of cross-cities delivery services of our own without relying on third party agencies like others.
                                            We have established over 22,500 cross distribution points through our 155 branches and 11 regional offices.
                                            By partnering with this largest network in the country, you will not miss on any sales opportunity anywhere in Nepal.
                                            Be part of something big!
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            Experience Fast, Secure & Reliable services like never before!
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
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
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            Customer centric operations & culture supported by dedicated account managers
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We handle your packages with care and love. Our riders are our hero who are well
                                            trained for world class customer service and communication. We aim to attend your queries within two hours.
                                            Right from CEO to riders,
                                            everyone has an eagle-eye on your packages until we delivered it.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            Technology company in logistic industry: Building future proof partnership
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Technology is at the front of our business.  We have an in-house team of dedicated developers.
                                            We have invested heavily in technology from day one to improve our process and system for fast, secure, and reliable services.
                                            We think outside the box to help our vendors sell more online.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            We ask for your suggestions and feedback regularly, learn & improve!
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We understand things might go wrong and expectation might be faded.
                                            We have a large team of RMs whose job is to be in touch with you and address your concerns and take feedback.
                                            You will be assigned with dedicated account managers with their mobile access to address your queries.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </div>
                        </Item>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ChooseUs;
