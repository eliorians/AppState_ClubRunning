import React from "react";
import "../components/Layout.module.scss";

const Home = () => {
    return (
        <div className='home'>
            <div className='content'>
                <h1>Welcome to </h1>
                <h2>Club Cross Country & Track!</h2>
            </div>
            <div className='casual'>
                <h1>For casual runners...</h1>
            </div>
            <div className='competitive'>
                <h1>For competitive runners...</h1>
            </div>
        </div>
    )
};

export default Home;