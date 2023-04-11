import React from "react";
import background from '../images/Mountains3.jpg'

const Records  = () => {
    return (
        <div class='records-wrapper'>
            <div class = 'background-image' style={{backgroundImage: `url(${background})`}}>
   
                <center><p class='records-button'><a class='button' href="https://docs.google.com/spreadsheets/d/1x7RUIj6KCTUKUYUShmq8UoEaAgyULV9Ewr9Iqh_H8p4/edit?usp=sharing"> Click here to view as Google Doc</a></p></center>
                
                <div class = 'records'>
                    <center><iframe class='excel' title='records' width='1150' height = '2190' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR9tXs_NmwLaS0QjaFrhc9c037Z6QmRN7KAJ5T6VpPS-2TO8szwNPbm9FBqOc3bdC2jG-w45Pm_2WgC/pubhtml?widget=true&amp;headers=false"></iframe></center>
                </div>
                
            </div>
        </div>
      );
    }

export default Records;