import React from 'react'
import Button from '@mui/material/Button';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <section className="container bcontent" id='getInTouchSection'>
            {/* <div className="card" style={{ width: "100%" }} id='getInTouchCardSection'>
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
            </div> */}
            <div id='getInTouchCard'>
                <div id='getInTouchCardChild1'>
                    <h5 className="card-title">Would you like to start with us?</h5>
                    <p className="card-text" id='getInTouchText'>
                        Please contact us and one of our relationship managers will guide you with our easy onboarding process.
                        Lets us help you meet your goals.
                    </p>
                </div>
                <div id='getInTouchCardChild2'>
                    <Button variant="contained" id='track-btn'>Get Started</Button>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch;