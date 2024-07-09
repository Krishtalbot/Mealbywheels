import React, { useRef } from "react";
import "./Contactpage.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wn0xfat", "template_vp24a6b", form.current, {
        publicKey: "k69J-HKnB8HmSVb7R",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <div className="contact-box">
        <div className="message">
          <div className="touch">
            <h1 className="touch-h1">Let's get in touch</h1>
            <p className="touch-p">
              Need assistance? We're here to help! Contact us with any questions
              or feedback. Our friendly team is ready to assist you. Let’s
              connect today!
            </p>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <div>
                  <label htmlFor="Name">Name</label>
                  <input type="text" id="Name" name="from_name" />
                </div>
                <div className="contact-email">
                  <label htmlFor="Email">Email</label>
                  <input type="email" id="Email" name="Email" />
                </div>
              </div>
              <label htmlFor="Subject">Subject</label>
              <input type="text" id="Subject" name="Subject" />
              <label htmlFor="Message">Message</label>
              <textarea
                className="message-box"
                type="text"
                id="Message"
                name="message"
              ></textarea>
              <button className="message-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="info">
          <div>
            <p>
              <strong>Phone Number</strong>
            </p>
            <p className="info-id">(510) 978-9191</p>
          </div>
          <div>
            <p>
              <strong>Email</strong>
            </p>
            <p className="info-id">mealbywheels@gmail.com</p>
          </div>
          <div>
            <p>
              <strong>Street Address</strong>
            </p>
            <p className="info-id">Bay Area, USA</p>
          </div>
          <div>
            <p>
              <strong>Website URL</strong>
            </p>
            <p className="info-id">www.mealbywheels.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
