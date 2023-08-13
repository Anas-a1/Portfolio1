import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anas.ee128@gmail.com</h5>
            <a href="mailto: anas.ee128@gmail.com" target='_blank'>Send a message</a>
           </article>
           <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Muhammad Anas</h5>
            <a href="https://m.me/?_rdc=1&_rdr" target='_blank'>Send a message</a>
           </article>
           <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923116791650</h5>
            <a href="https://api.whatsapp.com/send?phone+923116791650" target='_blank'>Send a message</a>
           </article>
        </div>
        {/* END OF CONTACT */}
        <form action="">
          <input type="text " name='name' placeholder='Your Full Name' required />
          <input type="email " name='email' placeholder='Your email' required />
          <textarea type="message " row='7' placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact