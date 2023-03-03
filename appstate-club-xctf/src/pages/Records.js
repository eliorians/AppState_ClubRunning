import React from "react";
import background from '../images/needtochange.jpeg'

const Records  = () => {
    return (
        <div class = 'background-image 'style={{backgroundImage: `url(${background})`}}>
            <div class='records-wrapper'>
                <div class = 'records-top'>
                    <h1>Latest Recordings</h1>
                    <div class = 'latest-records'>
                        <iframe title = "records" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR9tXs_NmwLaS0QjaFrhc9c037Z6QmRN7KAJ5T6VpPS-2TO8szwNPbm9FBqOc3bdC2jG-w45Pm_2WgC/pubhtml?widget=true&amp;headers=false" width= "100%" height = "2200" overflow = "hidden" ></iframe>
                    </div>
                </div>
            {/*add a direction to where the emails would go}*/}
            {/*add picture to the top*/}
            </div>
        </div>
    )
};

export default Records;