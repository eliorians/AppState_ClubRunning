import React from 'react';
import './Pages.css';

const Contact = () => {
    return (
        <div class='contact-wrapper'>
            <div class = 'contact-top'>
                <h1>FAQ</h1>
                <ol class = 'frequently-asked'> 
                    <li>el q1</li>
                        <li>el a1</li>
                    <li>el q2</li>
                        <li>el a1</li>
                    <li>el q3</li>
                        <li>el a1</li>
                    <li>el q4</li>
                        <li>el a1</li>
                    <li>el q5</li>
                        <li>el a1</li>
                </ol>
            </div>
            <div class ='formbox'>
                <h1>Contact us!</h1>
                <form>
                    <label> Name: 
                        <input type="text" />
                    </label> 
                    <label> Email: 
                        <input type="text" />
                    </label>
                    <label> Message: 
                        <input type="text" />
                    </label>
                </form>
            </div>
            {/*add a direction to where the emails would go}*/}
            {/*add picture to the top*/}
        </div>
    )
};

export default Contact;