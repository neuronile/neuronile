import React, { useState } from "react";
import axios from "axios";
import "../css/Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
    setError("");
  };

  const validateForm = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (message.trim().length < 10)
      return "Message should be at least 10 characters.";
    return null;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }
// http://localhost:5000/api/send-email
  try {
    const res = await axios.post("https://neuronile-backend.onrender.com/api/send-email", {
      name,
      email,
      message,
    }); // ✅ JSON payload
    if (res.data.success) {
      clearState();
      console.log("Email sent Successfully")
    } else {
      setError("Failed to send message. Try again later.");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    setError("Server error. Please try again later.");
  }
};

  return (
    <section className="contact-section" id="contact-us">
      <div className="contact-container">
        <div className="form-box">
          <h2 className="heading">Get In Touch</h2>

          {error && <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="info-box">
          <h2 style={{ fontFamily: "Poppins" }}>
            Get In Touch For <span className="highlight">Custom Solutions</span>
          </h2>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
          <h3 style={{ fontSize: "30px" }}>Contact Info</h3>
          <p>
            <i className="fa fa-phone"></i> +1 825 333 5276
          </p>
          <p>
            <i className="fa fa-envelope"></i> info@neuronile.com
          </p>
        </div>
      </div>
    </section>
  );
};
