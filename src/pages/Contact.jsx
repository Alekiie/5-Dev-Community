import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {SiMinutemailer} from 'react-icons/si'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
import Footer from '../components/Footer'

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_m4htt4i', 'template_p3hc7nj', form.current, '0kcme4IXINZQiLpki')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }
  return (
   <>
    <div className='container'>
        <h4 className='heading'>Talk to Us</h4>
      <div className='rows'>
        <div className='contact__options'>
          <div className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h3>Email Us</h3>
            <h4>info5devs@gmail.com</h4>
            <a href="mailto:info5devs@gmail.com" target='_blank'>Send Message</a>
          </div>
          <div className="contact__option">
            <BiSolidPhoneCall className='contact__option-icon'/>
            <h3>5 Devs</h3>
            <h4>Call Us</h4>
            <a href="tel:+254710861673" target='_blank'>0710861673</a>
          </div>
          <div className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp Us</h4>
              <h5>0710861673</h5>
              <a href="https://wa.me/+254710861673?text=Hello%205devs" target='_blank'>Send a message.</a>
          </div>
        </div>
        <div className='form__side'>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" id="email"  placeholder='Your Email' required />
            <input type="text" name="subject" id="subject" placeholder='Reason for Messaging' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn"><SiMinutemailer className='submit__icon'/>Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Contact