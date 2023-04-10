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
      <Stack spacing={2}>
        <Stack direction="row" justifyContent={"center"} alignItems={"center"}  id="contactStack">
          <Card id="contactCard">
            <CardContent id="contentHolder">
              <Typography className="cardContent" color="text.secondary" gutterBottom>
                Contact Us
              </Typography>
              <Typography className="cardContent" variant="h5" component="div">
                Contact for Premium Business Services
              </Typography>

              <Typography className="cardContent" variant="body2">
                We always love to hear from you.

              </Typography>
            </CardContent>

          </Card>
        </Stack>
        <Item>
          <section className="text-center">
            <h3 className="mb-5">Contact us</h3>
            <div className="row">
              <div className="col-lg-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4201.558193865407!2d85.34623962062054!3d27.6840698307196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4f4fb0179%3A0xbe53904252e95812!2sNepal%20Can%20Move!5e0!3m2!1sen!2snp!4v1681114596524!5m2!1sen!2snp"
                  className="h-100 w-100"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div className="col-lg-7">
                <form>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              Full name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="form3Example2"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Email
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <textarea
                          className="form-control"
                          id="form4Example3"
                          rows={4}
                          defaultValue={""}
                        />
                        <label className="form-label" htmlFor="form4Example3">
                          Message
                        </label>
                      </div>
                      <div className="text-center text-md-start">
                        <button
                          type="submit"
                          className="btn btn-primary mb-5 mb-md-0"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-map-marker-alt fa-2x text-primary" />
                          <p>
                            <small>New York, NY 10012, USA</small>
                          </p>
                        </li>
                        <li>
                          <i className="fas fa-phone fa-2x text-primary" />
                          <p>
                            <small>+ 01 234 567 89</small>
                          </p>
                        </li>
                        <li>
                          <i className="fas fa-envelope fa-2x text-primary" />
                          <p>
                            <small>contact@gmail.com</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Item>
      </Stack>
    </Box>
  );
}

export default Contact;
