import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';

import Email from './resource/email.png';
import Instagram from './resource/insta.png';
import LinkedIn from './resource/linkedin.png';
import Location from './resource/location.png';
import Twitter from './resource/twitter.png';
import Call from './resource/phone.png';

function Contact(){
    return (
        <section>
            <Book />
        </section>
    );
}

function Book(){

    const serviceId = 'service_tp6pc9h'
    const templateId = 'template_m4btwsd'
    const userId = "user_k6ZD4r5STR7koSxdre7UR"
    const form = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                console.log(result.text);
                swal.fire(
                    'Message Sent',
                    'David will get back to you as soon as he can!',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
                swal.fire(
                    'Message Error',
                    error.text,
                    'error'
                )
            });
        e.target.reset();
    }


    return (
        <section className="book-now" id="book-now1">
            <div className="left">
                <div className="caption">
                    <div>
                        DON'T BE A STRANGER
                    </div>
                    <div>
                        JUST SAY HELLO.
                    </div>
                </div>
                <div className="text">
                    Thank you for your interest in my services. Please fill the form below or email me at <b>kinyanjuiprince20@gmail.com</b> and I will get back to you promptly regarding your request
                </div>
                <form action="" className="form" onSubmit={handleFormSubmit} ref={form}>
                    <div className="top">
                        <div className="input">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="user-name" id="" placeholder="Enter full name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user-email" id="" placeholder="Enter your email"/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="message">Message</label>
                        <textarea name="user-message" id="" cols="30" rows="10" placeholder="Write a message for me."></textarea>
                    </div>
                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </div>
            <div className="right">
                <div className="title">
                    contact information
                </div>
                <div className="contacts">
                    <div className="cont">
                        <img src={Location} alt="" />
                        <p>
                            Juja, Nairobi
                        </p>
                    </div>
                    <div className="cont">
                        <img src={Call} alt="" />
                        <p>
                            +254-790-923-577
                        </p>
                    </div>
                    <a href="mailto:kinyanjuiprince20@gmail.com" className="cont">
                        <img src={Email} alt="" />
                        <p>
                            kinyanjuiprince20@gmail.com
                        </p>
                    </a>
                </div>
                <div className="title">
                    find me on
                </div>
                <div className="social-media">
                    <a href="https://x.com/Kindavi38924183?t=S4bl0GDmO1Vx0oYSi9NQzQ&s=08" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-kinyanjui-44a870233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noreferrer" target="_blank">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="" />
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Contact;