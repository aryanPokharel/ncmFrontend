import * as React from 'react';
import ReactRoundedImage from "react-rounded-image"

import './OurTeam.css'

const OurTeam = () => {
    return (

        <div className="row row-cols-1 row-cols-md-2 g-4" id='ourTeam'>
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
        </div>


    )
}

export default OurTeam