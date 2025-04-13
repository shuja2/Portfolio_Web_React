import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const sanitizeInput = (str, maxLength = 300) => {
  return str
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim()
    .substring(0, maxLength);
};

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const sanitizedData = {
      name: sanitizeInput(form.name, 50),
      subject: sanitizeInput(form.subject, 300),
      email: sanitizeInput(form.email, 100),
      message: sanitizeInput(form.message, 1000),
    };

    try {
      const timestamp = new Date().toLocaleString();
      // Send email via EmailJS
      await emailjs.send(
        "service_7kwxw77", // Replace with your EmailJS Service ID
        "template_ac3h07e", // Replace with your EmailJS Template ID
        {
          subject: sanitizedData.subject,
          timestamp: timestamp,
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
        },
        "aOAZu9PPRrXo-Qnk2" // Replace with your EmailJS Public Key
      );

      // Show thank-you message
      setStatus("Thank you for contacting us! Your message has been sent.");
      setForm({ name: "", email: "", message: "", subject: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact-us">
      <style jsx>{`
        #contact-us .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        #contact-us input,
        #contact-us textarea {
          font-family: "Trebuchet MS", Arial, sans-serif;
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        #contact-us textarea {
          resize: vertical;
          min-height: 120px;
        }
        #contact-us h2 {
          color: #7600bc;
          font-size: 36px;
          margin-bottom: 20px;
        }
        #contact-us button {
            background-color: #7600bc;
          color: white;
          border: solid 2px transparent;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 18px;
          cursor: pointer;
          display: block;
          margin: 20px auto;
          transition: all 0.6s ease-in-out;
        }
        #contact-us button:hover {
          border-color: #5a0096;
          color: #7600bc;
          background-color: white;
        }
        #contact-us .error {
          color: red;
          font-size: 14px;
          margin-top: -6px;
          margin-bottom: 6px;
        }
        #contact-us .status {
          text-align: center;
          color: ${status.includes("Failed") ? "red" : "green"};
          margin-top: 10px;
        }
        @media (max-width: 600px) {
          #contact-us input,
          #contact-us textarea {
            width: 100%;
          }
        }
      `}</style>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="text"
            placeholder="Subject/title"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
          <textarea
            id="message"
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
