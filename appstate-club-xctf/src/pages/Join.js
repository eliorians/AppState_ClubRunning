import React from "react";

const Join = () => {
    return (

    <div class='join-wrapper'>

        <div class='membership'>
            <h1>Club Membership</h1>
            <ol class='membership'>
                <li>Join the club discord <a href='https://discord.gg/9p5XsXPEjD'>here.</a></li>
                <li><a href='https://docs.google.com/document/d/1rg-6Rhcxl71IsuerFQdbXKAobsOyiVmcnTlm0OhPz10/edit?usp=sharing'>This MIC form</a> must be printed and filled out in black ink and hand it to an officer before attending practice.</li>
                <li>Once your form is processed, you'll be invited to the <a href='https://engage.appstate.edu/organization/appstateclubxctrack'>club's engage</a> by email. Be sure to accept this invite!</li>
                <li>Club dues are $35 per academic year. Pay cash to an officer, or through the website below. </li>
                <li>Sign up for practice or races! Links to practice and race sheets can be found on the Schedule page. </li>
            </ol>

        </div>

        <div class='paypal-api'>
            <h2>Pay Membership Dues</h2>
            
        </div>

        <div class='instagram-section'>
            <h2>Follow us on Instagram</h2>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe title='instagram' src="//lightwidget.com/widgets/c8b0c2d632b4562c83f1b365ee42d4de.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" width='100%' height='550px' frameborder='0' overflow='hidden'></iframe>
            {/*instagram widget: https://lightwidget.com/ under eli.orians@gmail.com account*/}
        </div>
        
        <div class='strava-summary'>
            <h2>Join our Strava Club</h2>
            <iframe title='strava-summary' allowtransparency frameborder='0' height='160' width='300' scrolling='no' src='https://www.strava.com/clubs/552116/latest-rides/9f64a45cda2e8e81c61aa3ad4af060e9372043a8?show_rides=false'></iframe>
        </div>

        <div class='strava-feed'>
            <iframe title='strava-feed' allowtransparency frameborder='0' height='550' width='100%' scrolling='no' src='https://www.strava.com/clubs/552116/latest-rides/9f64a45cda2e8e81c61aa3ad4af060e9372043a8?show_rides=true'></iframe>
        </div>

        <div class='resources'>
            <h1>Other Resources</h1>
            <ul class='resources'>
                <li><a href='https://drive.google.com/drive/folders/1RVJ1oUVhk8th2MOK0yAqurr7LcPA_azW?usp=sharing'>Club Photo Drive</a></li>
                <li><a href='https://docs.google.com/document/d/1X61mcZ-Qzb3UOtF9QNvy_FvNOf3Kknn0/edit?usp=sharing&ouid=104804195159131396145&rtpof=true&sd=true'>Our Running Locations</a></li>  {/*Improve this by creating a list of strava or garmin routes*/}
            </ul>
        </div>

    </div>
    )
};

export default Join;