import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const sanitizeInput = (str, maxLength = 300) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "").trim().substring(0, maxLength);
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

      await emailjs.send(
        "service_7kwxw77",
        "template_ac3h07e",
        {
          subject: sanitizedData.subject,
          timestamp,
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
        },
        "aOAZu9PPRrXo-Qnk2"
      );

      setStatus("Thank you for contacting us! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact-us" className="contact-form-wrapper">
      <style jsx>{`
        .contact-form-wrapper {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .contact-form-title {
          color: #7600bc;
          font-size: 2.25rem;
          margin-bottom: 1.25rem;
          text-align: center;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-family: "Trebuchet MS", Arial, sans-serif;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-error {
          color: red;
          font-size: 0.875rem;
          margin-top: -0.5rem;
          margin-bottom: 0.5rem;
        }

        .submit-btn {
          background-color: #7600bc;
          color: white;
          border: 2px solid transparent;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 1.125rem;
          cursor: pointer;
          display: block;
          margin: 20px auto 10px auto;
          transition: all 0.4s ease-in-out;
        }

        .submit-btn:hover {
          border-color: #5a0096;
          color: #7600bc;
          background-color: white;
        }

        .form-status {
          text-align: center;
          font-size: 1rem;
          margin-top: 0.5rem;
          color: ${status.includes("Failed") ? "red" : "green"};
        }

        @media (max-width: 600px) {
          .form-input,
          .form-textarea {
            font-size: 1rem;
          }
        }
      `}</style>

      <h2 className="contact-form-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="form-error">{errors.name}</p>}

        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="form-error">{errors.email}</p>}

        <input
          className="form-input"
          type="text"
          name="subject"
          placeholder="Subject/Title"
          value={form.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <p className="form-error">{errors.subject}</p>}

        <textarea
          className="form-textarea"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="form-error">{errors.message}</p>}

        <button type="submit" className="submit-btn">
          Send Message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}
