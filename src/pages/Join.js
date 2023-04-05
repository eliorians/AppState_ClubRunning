import React from "react";
import PayPal from "../components/Paypal";
import { Link } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Join = () => {
    return (

    <div class='join-wrapper'>

        <div class='membership'>
            <h1>Club Membership</h1>
            <ol class='membership'>
                <li>Join the club discord <a href='https://discord.gg/9p5XsXPEjD' target='_blank' rel='noreferrer'>here.</a></li>
                <li><a href='https://drive.google.com/file/d/1fsNs_GjOUexzAfXsbPsqMMGHprl8gW1t/view?usp=share_link' target='_blank' rel='noreferrer'>This MIC form</a> must be printed and filled out in black ink and hand it to an officer before attending practice.</li>
                <li>Once your form is processed, you'll be invited to the <a href='https://engage.appstate.edu/organization/appstateclubxctrack' target='_blank' rel='noreferrer'>club's engage</a> by email. Be sure to accept this invite!</li>
                <li>Club dues are $35 per academic year. Pay cash to an officer, or through the website below. </li>
                <li>Sign up for practice or races! Links to practice and race sheets can be found on the <Link to="/Schedule">Schedule page.</Link></li>
            </ol>
        </div>

        <div class='paypal'>
            <h2>Pay Membership Dues</h2>
            <p>Club dues are $35 per academic year, with a small $2 transaction fee if you pay through the website.</p>
            
            {/* price can be changed under ./components/PayPal.js */}
            <PayPalScriptProvider 
                options={{
                    'client-id': 'Ae1kfybziyw-Uc__nejphkFuvm81zE5rdyLv2KgaHFjaZM2JISw9BAehY9Adn8jtf0JwurpcJMR5Wcgi', 
                    'currency': 'USD',
                    'intent': 'capture'
                        }}>
                <PayPal/>
            </PayPalScriptProvider>
        </div>

        <div class='instagram'>
            <h2>Follow us on Instagram</h2>
                <p><a class='button' href='https://www.instagram.com/appstate_clubxctrack/'>Follow Us</a></p>
                <iframe title='instagram' class='instagram' src="https://widget.taggbox.com/127495" width='100%' frameBorder='0'></iframe>     
                {/*https://app.taggbox.com/widget/walls/home UNDER ELI.ORIANS@GMAIL*/}
            </div>
        
        <div class='strava-summary'>
            <h2>Join our Strava Club</h2>
            <iframe title='strava-summary' allowtransparency frameborder='0' height='160' width='500px' scrolling='no' overflow='hidden' src='https://www.strava.com/clubs/552116/latest-rides/9f64a45cda2e8e81c61aa3ad4af060e9372043a8?show_rides=false' target='_blank' rel='noreferrer'></iframe>
        </div>

        <div class='strava-feed'>
            <iframe title='strava-feed' allowtransparency frameborder='0' height='500' width='100%' scrolling='no' overflow='hidden' src='https://www.strava.com/clubs/552116/latest-rides/9f64a45cda2e8e81c61aa3ad4af060e9372043a8?show_rides=true' target='_blank' rel='noreferrer'></iframe>
        </div>

        <div class='resources'>
            <h1>Other Resources</h1>
            <ul class='resources'>
                <li><a class='resources' href='https://drive.google.com/drive/folders/1RVJ1oUVhk8th2MOK0yAqurr7LcPA_azW?usp=sharing' target='_blank' rel='noreferrer'>Club Photo Drive</a></li>
                <li><a className='resources' href='https://docs.google.com/document/d/1X61mcZ-Qzb3UOtF9QNvy_FvNOf3Kknn0/edit?usp=sharing&ouid=104804195159131396145&rtpof=true&sd=true' target='_blank' rel='noreferrer'>Our Running Locations</a></li>  {/*Improve this by creating a list of strava or garmin routes*/}
            </ul>
        </div>
    </div>

    )
};

export default Join;