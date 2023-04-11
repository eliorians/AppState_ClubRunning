import React from "react";

const Schedule = () => {
    return (
        <div class='schedule-wrapper'>

            <div class='calendar'>
                <p><a class='button' href='https://calendar.google.com/calendar/u/3?cid=YXBwc3RhdGVjbHVieGN0cmFja0BnbWFpbC5jb20'>Subscribe to our Google Calendar</a></p>
            </div>

            <div class='practice-text'>
                <h2>Practice & Social Schedule</h2>
                <p>Signup for practice and social events with this sheet. Each sheet is a different week, so be sure to select the correct date.</p> 
                <center><p><a class='button' href='https://docs.google.com/spreadsheets/d/1wYgAsF7oTKeRjVKKrxVIs3S7ng8lQfiNRCADQbZ8EQM/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here to view in Google Docs</a></p></center>
            </div>
            
            <div class='practice'>
                <center><iframe title='practice' class='excel' height='1350' width='1735' src="https://docs.google.com/spreadsheets/d/1wYgAsF7oTKeRjVKKrxVIs3S7ng8lQfiNRCADQbZ8EQM/edit?usp=sharing?&rm=minimal&widget=true&headers=false" target='_blank' rel='noreferrer'></iframe></center>
            </div>

            <div class='xc-race-text'>
                <h2>Fall Race Signup (Cross Country)</h2>
                <p>Most of our races are hosted through the <a href='https://clubrunning.org/' target='_blank' rel='noreferrer'>National Intercollegiate Running Club Association (NIRCA)</a>. If it's your first time racing through NIRCA, you will receive an email to complete a waiver after an officer has registered you. Be sure to select the correct race at the bottom.</p>
                <center><p><a class='button' href='https://docs.google.com/spreadsheets/d/1-XvodeBq4d7Vq41FoOiox2a3it-MYjp8FjdATjO4Pgk/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here to view in Google Docs</a></p></center>
            </div>
            <div class='xc-race'>
                <center><iframe title='xc-race' class='excel' height='990' width='1130' src="https://docs.google.com/spreadsheets/d/1-XvodeBq4d7Vq41FoOiox2a3it-MYjp8FjdATjO4Pgk/edit?usp=sharing?&rm=minimal&widget=true&headers=false"></iframe></center>
            </div>

            <div class='track-race-text'>
                <h2>Spring Race Signup (Track)</h2>
                <p>Most of our races are hosted through the <a href='https://clubrunning.org/' target='_blank' rel='noreferrer'>National Intercollegiate Running Club Association (NIRCA)</a>. If it's your first time racing through NIRCA, you will receive an email to complete a waiver after an officer has registered you. Be sure to select the correct race at the bottom.</p>
                <center><p><a class='button' href='https://docs.google.com/spreadsheets/d/1Pdn4F8csvJFriQFSMZ6CXFiQaN6BXKtuT08MSrycqAI/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here to view in Google Docs</a></p></center>
            </div>
            <div class='track-race'>
                <center><iframe title='track-race' class='excel' height='1090' width='1700' src="https://docs.google.com/spreadsheets/d/1Pdn4F8csvJFriQFSMZ6CXFiQaN6BXKtuT08MSrycqAI/edit?usp=sharing?&rm=minimal&widget=true&headers=false"></iframe></center>
            </div>

        </div>
    );
};

export default Schedule;