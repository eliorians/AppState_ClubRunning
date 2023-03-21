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
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Name</h1 >
                    <input type="text" name="user_name" />
                    <h2>Email</h2>
                    <input type="email" name="user_email" />
                    <h3>Message</h3>
                    <textarea name="message" />
                    <input type="submit" value="Send"/>
                </form>
            </div>
            {/*add a direction to where the emails would go}*/}
            {/*add picture to the top*/}
        </div>
    )
};

export default Contact;