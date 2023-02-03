import React from "react";
import "../components/Layout.module.scss";
import "./Home.css"

const Home = () => {
    return (
        <div class='home'>

            <div class='welcome'>
                <h2>Welcome to Appalachain State</h2>
                <h1>Club Cross Country & Track!</h1>
            </div>

            <div class='casual'>
                <h1>Casual</h1>
                <p>content abt casual</p>
            </div>

            <div class='competitive'>
                <h1>Competitive</h1>
                <p>content abt competitive</p>
            </div>

        </div>
    )
};

export default Home;