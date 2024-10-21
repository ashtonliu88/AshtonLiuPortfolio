import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className = "input-box">
        <label>Full Name</label>
        <input type="text" className = "field" placeholder="Enter your name" required/>
      </div>
      <div className = "input-box">
        <label>Email Address</label>
        <input type="email" className = "field" placeholder="Enter your name" required/>
      </div>
      <div className = "input-box">
        <label>Message</label>
        <textarea name="" id="" className = "fieldMessage" placeholder="Enter your message" required></textarea>
      </div>
      <button type = "submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
