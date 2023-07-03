import React from 'react'
import {SiMinutemailer} from 'react-icons/si'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import './style.css'

function Contact() {
  return (
   <>
    <div className='container'>
        <h4 className='heading'>Talk to Us</h4>
      <div className='rows'>
        <div className='contact__options'>
          <div className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h3>Email Us</h3>
            <h4>fivedevs5@gmail.com</h4>
            <a href="mailto:fivedevs5@gmail.com" target='_blank'>Send Message</a>
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
              <a href="https://api.whatsapp.com/send?phone=+254710861673" target='_blank'>Send a message.</a>
          </div>
        </div>
        <div className='form__side'>
        <form>
            <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" id="email"  placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn"><SiMinutemailer className='submit__icon'/><span>Send Message</span></button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact