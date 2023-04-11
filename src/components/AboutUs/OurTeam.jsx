
import ReactRoundedImage from "react-rounded-image"

import './OurTeam.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));
const OurTeam = () => {
    return (
        <div id='teamSection'>
            <div id="teamSectionMainColumn">

                <div id="teamHeaderSection">
                    <h1>Our Team</h1>
                </div>
                <div className="teamCardRow">
                    <div id='teamCard'>
                        <div>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/sudeep_sir_final.jpg?fit=902%2C902&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>

                        <div>
                            <h5>Sudeep Acharya</h5>
                            <p>
                                Founder & CEO The Can Brand
                            </p>
                        </div>
                    </div>
                    <div id='teamCard'>
                        <div>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-787.png?resize=1536%2C1469&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>
                        <div>
                            <h5>Ganga Bahadur Thapa</h5>
                            <p>
                                Founder & CEO Nepal Can Move
                            </p>
                        </div>
                    </div>
                </div>

                <div className="teamCardRow">
                    <div id='teamCard'>
                        <div>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-794.png?resize=1024%2C1024&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>
                        <div>
                            <h5>Manish Prasad Acharya</h5>
                            <p>
                                Founder & CAO Nepal Can Move
                            </p>
                        </div>
                    </div>

                    <div id='teamCard'>
                        <div>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-793.png?w=924&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>

                        <div>
                            <h5>Jeewan Gnawali</h5>
                            <p>
                                Founder The CAN Brand
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="row row-cols-1 row-cols-md-2 g-4" id='ourTeam'>
                <div className="col">
                    <div className="card" id='teamCard'>
                        <div className='card-title' id='cardTitleSection'>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/sudeep_sir_final.jpg?fit=902%2C902&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Sudeep Acharya</h5>
                            <p className="card-text">
                                Founder & CEO The Can Brand
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" id='teamCard'>
                        <div className='card-title' id='cardTitleSection'>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-787.png?resize=1536%2C1469&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Ganga Bahadur Thapa</h5>
                            <p className="card-text">
                                Founder & CEO Nepal Can Move
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" id='teamCard'>
                        <div className='card-title' id='cardTitleSection'>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-794.png?resize=1024%2C1024&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>


                        <div className="card-body">
                            <h5 className="card-title">Manish Prasad Acharya</h5>
                            <p className="card-text">
                                Founder & CAO Nepal Can Move
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" id='teamCard'>
                        <div className='card-title' id='cardTitleSection'>
                            <ReactRoundedImage
                                image={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/04/MicrosoftTeams-image-793.png?w=924&ssl=1"}
                                roundedColor="#321124"
                                imageWidth="150"
                                imageHeight="150"
                                roundedSize="13"
                                hoverColor="#DD1144"
                            />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Jeewan Gnawali</h5>
                            <p className="card-text">
                                Founder The CAN Brand
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>


    )
}

export default OurTeam