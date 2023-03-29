import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { ImMail4 } from 'react-icons/im';
import sharedSelectors from '../SharedStyles.module.css';
import selectors from './ContactMe.module.css';
import { contact } from '../../Data';

const ContactMe = () => (
  <section id="contact">
    <div>
      <div className={sharedSelectors.title}>
        <h1>CONTACT</h1>
      </div>
      <div className={selectors.contactDiv}>
        <div className={selectors.contactList}>
          <div className={selectors.address}>
            <address className={selectors.city}>{contact.address}</address>
            <address className={selectors.postalCode}>
              {contact.postalCode}
            </address>
            <address className={selectors.phone}>{contact.Phone}</address>
            <address className={selectors.email}>{contact.email}</address>
          </div>
          <div className={selectors.contactIcons}>
            <a href="https://www.linkedin.com/in/degisew-mengist">
              <AiFillLinkedin className={selectors.linkedin} />
            </a>
            <a href="https://www.github.com/degisew">
              <AiFillGithub className={selectors.github} />
            </a>
            <a href="https://www.twitter.com/@DJ_etiya">
              <AiFillTwitterCircle className={selectors.twitter} />
            </a>
            <a href="mailto:degisew.mengist21@gmail.com">
              <ImMail4 className={selectors.gmail} />
            </a>
          </div>
        </div>
        <form method="post" action="https://formspree.io/f/mayvgvny" id="form">
          <fieldset>
            <label htmlFor="name">
              Your Name:
              {' '}
              <input id="name" name="first-name" type="text" required />
            </label>
            <label htmlFor="email">
              Your Email:
              {' '}
              <input id="email" name="email" type="email" required />
            </label>
            <label htmlFor="message">
              Message:
              <textarea
                id="message"
                name="bio"
                rows="5"
                cols="30"
                placeholder="Your mesage here..."
              />
            </label>
          </fieldset>
          <input type="submit" value="Send" />
          <br />
        </form>
      </div>
    </div>
    <div className={selectors.mobileContactIcons}>
      <a href="https://www.linkedin.com/in/degisew-mengist">
        <AiFillLinkedin className={selectors.linkedin} />
      </a>
      <a href="https://www.github.com/degisew">
        <AiFillGithub className={selectors.github} />
      </a>
      <a href="https://www.twitter.com/@DJ_etiya">
        <AiFillTwitterCircle className={selectors.twitter} />
      </a>
      <a href="mailto:degisew.mengist21@gmail.com">
        <ImMail4 className={selectors.gmail} />
      </a>
    </div>
  </section>
);

export default ContactMe;
