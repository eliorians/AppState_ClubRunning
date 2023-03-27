import React from 'react';
import { useRef } from 'react';
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
                <h1>Frequently Asked Questions</h1>
                <h3>question</h3>
                <p>answer</p>

                <h3>question</h3>
                <p>answer</p>

                <h3>question</h3>
                <p>answer</p>
            </div>

            <div class ='email'>
                <h1>Email Us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
            {/*add a direction to where the emails would go}*/}
            {/*add picture to the top*/}
        </div>
    )
};

export default Contact;