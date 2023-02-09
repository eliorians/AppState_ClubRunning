import React from "react";

const Join = () => {
    return (

    <div class='join-wrapper'>

        <div class='membership'>
            <h1>Club Membership</h1>
            <ul>
                <li>step 1</li>
                <li>step 2</li>
            </ul>
        </div>

        <div class='resources'>
            <h1>Resources</h1>
            <ul>
                <li>thing 1</li>
                <li>thing 2</li>
            </ul>
        </div>
        
        <div class='paypal-api'>
        </div>

        <div class='instagram-api'>
        </div>
        
        <div class='strava-api'>
            <iframe title='club-strava' allowtransparency frameborder='0' height='160' scrolling='no' src='https://www.strava.com/clubs/552116/latest-rides/9f64a45cda2e8e81c61aa3ad4af060e9372043a8?show_rides=false' width='300'></iframe>
        </div>

    </div>
    )
};

export default Join;