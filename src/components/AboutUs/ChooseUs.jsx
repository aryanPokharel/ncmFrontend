import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import AboutUsAccordion from './AboutUsAccordion';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ChooseUs = () => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(175, 173, 173)",
               
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: "100%", height: "100%" }}>
                        <Img
                            height={"100%"}
                            width={"100%"}

                            alt="teamWork"
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

                        <blockquote className="blockquote">

                            <h1 className="display-2">
                                Why Choose Us?
                            </h1>

                        </blockquote>

                        <blockquote className="blockquote">
                            <p className="mb-0" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
                                Everyday, more than 400 staff driven with CAN culture are out there at your service.
                                We believe prosperity comes from logistic, trade and ecommerce infrastructure.
                                We are marching towards CAN VISION™ 2030 and will establish branches in each of 753 municipalities,
                                create 10,000 new jobs and facilitate trade and commerce by connecting 90% people through our massive network.
                                We dream big for the good of country and we have a clear plan.
                            </p>
                        </blockquote>

                        <AboutUsAccordion />

                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ChooseUs;
