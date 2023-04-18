import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Pages.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'tempy', form.current, '5ND4JsCtJKSWsqO6m')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        form.current.reset()
    };
    return (
        <div class='contact-wrapper'>

            <div class = 'faq'>
                <h1 class='faq-header'>Frequently Asked Questions</h1>

                <h3 class='q'>How fast do I need to be to join?</h3>
                <p class='a'>There are no cuts in the club. We'll take you if you run a fifteen minute 5k or a fifteen minute mile.</p>

                <h3 class='q'>Can I join in the middle of the semester?</h3>
                <p class='a'>Absolutely! We are always accepting new members, just follow the steps on the <Link to="/Join">Get Involved page.</Link></p>

                <h3 class='q'>Do you have field events?</h3>
                <p class='a'>Yes, most of the track meets we attend have field events. Reach out to us to ask about specific events.</p>
            </div>

            <div class ='email'>
                <h1>Email Us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Please write your name here'/>
                    <input type="email" name="user_email"placeholder='Please write your email here' />
                    <textarea name="message" placeholder='Go ahead and type up and message that youd like for us to see!'/>
                    <center><input class = "button" type="submit" value="Send"/></center>
                </form>
            </div>
        </div>
    )
};

export default Contact;