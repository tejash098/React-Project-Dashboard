import React from "react";
import "./Portfolio.css";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cynu7qv",     // Service ID
        "template_trv6j1g",    // Template ID
        e.target,              // Form reference
        "EAkd9QJ5prJnq6ycW"    // Public Key
      )
      .then(() => {
        alert("Message sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Message failed to send");
      });

    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="grid">
        <div className="contact-info">
          <p>For any inquiries or feedback, please contact at:</p>
          <a href="mailto:jaitej123@gmail.com">Email: jaitej123@gmail.com</a>
          <a href="tel:+919170576311">Phone: +91-9170576311</a>
          <p>Address: Bhabua, Kaimur, Bihar, 821101</p>
        </div>

        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <h2>Send Message</h2>
            <input type="text" placeholder="Name" name="from_name" required/>
            <input type="email" placeholder="Email" name="from_email" required/>
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
