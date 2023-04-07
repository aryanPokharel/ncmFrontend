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
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            General settings
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                            Aliquam eget maximus est, id dignissim quam.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            You are currently not an owner
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                            laoreet.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            Advanced settings
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            Filtering has been entirely disabled for whole web server
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                            amet egestas eros, vitae egestas augue. Duis vel est augue.
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
