import * as React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';

import './Contact.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Contact = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Stack direction="row" justifyContent={"center"} alignItems={"center"} id="contactStack">
          <Card id="contactCard">
            <CardContent id="contentHolder">
              <Typography className="cardContent" color="text.secondary" gutterBottom>
                <h1 id="header">Contact Us</h1>
                <hr></hr>
              </Typography>
              <Typography className="cardContent" variant="h5" component="div">
                <h3 className="subHeader">Contact for Premium Business Services</h3>
              </Typography>

              <Typography className="cardContent" variant="body2">
                <h3 className="subHeader">We always love to hear from you.</h3>

              </Typography>
            </CardContent>

          </Card>
        </Stack>
        <Item id="formSection">

          <h3 className="mb-5">Get started - Request Free Consultation</h3>
          <div id="formAndMap">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4201.558193865407!2d85.34623962062054!3d27.6840698307196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4f4fb0179%3A0xbe53904252e95812!2sNepal%20Can%20Move!5e0!3m2!1sen!2snp!4v1681114596524!5m2!1sen!2snp"
                className="h-100 w-100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <form className="text-center border border-light p-5" id="contactForm">
              <p className="h1 mb-4">Sign in</p>

              <input
                type="name"
                id="defaultLoginFormEmail"
                className="form-control mb-4"
                placeholder="name"
              />
              <input
                type="email"
                id="defaultLoginFormEmail"
                className="form-control mb-4"
                placeholder="E-mail"
              />
              <input
                type="phone"
                id="defaultLoginFormEmail"
                className="form-control mb-4"
                placeholder="phone"
              />
              <input
                type="message"
                id="defaultLoginFormEmail"
                className="form-control mb-4"
                placeholder="phone"
              />
              <button className="btn btn-info btn-block my-4" type="submit">
                Sign in
              </button>

            </form>


            <div id="contactLocationSection">
              <p>
                <i className="fas fa-map-marker-alt fa-2x text-primary" />
                <br></br>
                <small>New York, NY 10012, USA</small>
              </p>
              <p>
                <i className="fas fa-phone fa-2x text-primary" />
                <br></br>
                <small>+ 01 234 567 89</small>
              </p>
              <p>
                <i className="fas fa-envelope fa-2x text-primary" />
                <br></br>
                <small>contact@gmail.com</small>
              </p>


            </div>
          </div>


        </Item>
      </Stack>
    </Box>
  );
}

export default Contact;
