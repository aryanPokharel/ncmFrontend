import React from 'react'
import Button from '@mui/material/Button';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <section id='getInTouchSection'>
           
            <div id='getInTouchCard'>
                <div id='getInTouchCardChild1'>
                    <h2 style={{color:"red"}}>Would you like to start with us?</h2>
                    <p  id='getInTouchText'>
                        Please contact us and one of our relationship managers will guide you with our easy onboarding process.
                        Lets us help you meet your goals.
                    </p>
                </div>
                <div id='getInTouchCardChild2'>
                    <Button variant="contained" id='getInTouchBtn'>Get Started</Button>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch;