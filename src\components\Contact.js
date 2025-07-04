import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p>Feel free to reach out to me for any inquiries or project discussions.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;