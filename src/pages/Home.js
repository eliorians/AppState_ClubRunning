import React from 'react';
import './Pages.css';
import { Link } from "react-router-dom";
import img1 from '../images/mens-team1.jpg';
import img2 from '../images/womens-team2.jpg';

const Home = () => {
    return (
        <div class='home-wrapper'>
            
            <div class='welcome'>
                <p><i>Boone, NC</i></p>
                <h1><b>Appalachian State</b></h1>
                <h1><b>Club Cross Country & Track</b></h1>
            </div>
            
            <div class='competitive-txt'>
                <h2>Competitive Athletes</h2>
                <p align='left'>
                If you’re looking for a competitive group to train and race with, you’ve found it. 
                During the fall semester we race cross country races, and track races are during the spring semester. With the help of our workout coordinator, we provide you with a variety of workout options every week.
                Also, as a club under the National Intercollegiate Running Club Association (NIRCA), our team is able to travel throughout the semester to compete against other running clubs. 
                If you meet the qualifications, you’ll be able to compete in NIRCA Regionals and even NIRCA Nationals! Further, we host our very own Mountaineer Invitational, inviting rival clubs to State Farm Fields to race it out.
                </p>
                <Link to="/Join" class='button'>How to join</Link>
            </div>

            <div class='competitive-img'>
                <img src={img1} alt='competitve_img'/>
            </div>

            <div class='casual-txt'>
                <h2>Casual Runners</h2>
                <p align='left'>
                Whether you’re trying to get back into shape or just starting to run for the first time, we want you to! 
                We accept runners of all levels and have no prerequisites to join. Also, there are no attendance requirements, come as often or as little as you want and get out what you put in. 
                Come explore Boone’s beautiful trails with us or meet new friends at our social events too.
                </p>
                <Link to="/Join" class='button'>Learn more</Link>
            </div>

            <div class='casual-img'>
                <img src = {img2} alt='casual_img'/>
            </div>
            
        </div>
    )
};

export default Home;