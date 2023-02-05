import React from "react";
import "../components/Layout.module.scss";
import "./Pages.css"

const Home = () => {
    return (
        <div class='home'>

            <div class='welcome'>
                <p><i>Boone, NC</i></p>
                <h1>Appalachian State</h1>
                <h1>Club Cross Country & Track</h1>

            </div>
            
            <div class='competitive'>
                <h2>Competitive Athletes</h2>
                <p>
                If you’re looking for a competitive group to train and race with, you’ve found it. 
                With the help of our workout coordinator, we provide you with a variety of workout options every week. 
                Also, as a club under the National Intercollegiate Running Club Association (NIRCA), our team is able to travel throughout the semester to compete against other running clubs. 
                If you meet the qualifications, you’ll be able to compete in NIRCA Regionals and even NIRCA Nationals! Further, we host our very own Mountaineer Invitational, inviting rival clubs to State Farm Fields to race it out.
                </p>
            </div>

            <div class='casual'>
                <h2>Casual Runners</h2>
                <p>
                Whether you’re trying to get back into shape or just starting to run for the first time, we want you to! 
                We accept runners of all levels and have no prerequisites to join. Also, there are no attendance requirements, come as often or as little as you want and get out what you put in. 
                Come explore Boone’s beautiful trails with us or meet new friends at our social events too.
                </p>
            </div>
        </div>
    )
};

export default Home;