import React from "react";

const Schedule = () => {
    return (
        <div class='schedule-wrapper'>

            <div class='calendar'>
                <h3><a href='https://calendar.google.com/calendar/u/3?cid=YXBwc3RhdGVjbHVieGN0cmFja0BnbWFpbC5jb20'>Subscribe to our Google Calendar</a></h3>
            </div>

            <div class='practice-text'>
                <h2>Practice & Social Schedule</h2>
                <p>Signup for practice and social events with this sheet. Each sheet is a different week, so be sure to select the correct one. <a href='https://docs.google.com/spreadsheets/d/1wYgAsF7oTKeRjVKKrxVIs3S7ng8lQfiNRCADQbZ8EQM/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here</a> to view in Google Docs.</p>
            </div>
            <div class='practice'>
                <center><iframe title='practice' class='excel' height='1350' width='100%' src="https://docs.google.com/spreadsheets/d/1wYgAsF7oTKeRjVKKrxVIs3S7ng8lQfiNRCADQbZ8EQM/edit?usp=sharing?&rm=minimal&widget=true&headers=false" target='_blank' rel='noreferrer'></iframe></center>
            </div>


            <div class='xc-race-text'>
                <h2>Fall Race Signup (Cross Country)</h2>
                <p>Below is our fall race schedule, each sheet is a different race. You will need to fill out a NIRCA waiver once an officer has registered you. <a href='https://docs.google.com/spreadsheets/d/1-XvodeBq4d7Vq41FoOiox2a3it-MYjp8FjdATjO4Pgk/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here</a> to view in Google Docs.</p>
            </div>
            <div class='xc-race'>
                <center><iframe title='xc-race' class='excel' height='990' width='1100' src="https://docs.google.com/spreadsheets/d/1-XvodeBq4d7Vq41FoOiox2a3it-MYjp8FjdATjO4Pgk/edit?usp=sharing?&rm=minimal&widget=true&headers=false"></iframe></center>
            </div>


            <div class='track-race-text'>
                <h2>Spring Race Signup (Track)</h2>
                <p>Below is our spring race schedule, each sheet is a different race. Follow up with an officer after signing up. <a href='https://docs.google.com/spreadsheets/d/1Pdn4F8csvJFriQFSMZ6CXFiQaN6BXKtuT08MSrycqAI/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here</a> to view in Google Docs.</p>
            </div>
            <div class='track-race'>
                <center><iframe title='track-race' class='excel' height='1090' width='100%' src="https://docs.google.com/spreadsheets/d/1Pdn4F8csvJFriQFSMZ6CXFiQaN6BXKtuT08MSrycqAI/edit?usp=sharing?&rm=minimal&widget=true&headers=false"></iframe></center>
            </div>

        </div>
    );
};

export default Schedule;