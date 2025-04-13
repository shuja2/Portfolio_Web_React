import React, { useState } from "react";

const sanitizeInput = (str, maxLength = 300) => {
  return str
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim()
    .substring(0, maxLength);
};

export default function RecommendationForm({ addRecommendation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    recommendation: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.recommendation.trim()) {
      newErrors.recommendation = "Recommendation is required";
    }
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const sanitizedData = {
      id: Date.now(), // Unique ID for each recommendation
      name: sanitizeInput(form.name, 50),
      email: sanitizeInput(form.email, 100),
      recommendation: sanitizeInput(form.recommendation, 500),
      date: new Date().toISOString(),
    };

    try {
      // Retrieve existing recommendations
      const existing = JSON.parse(
        localStorage.getItem("recommendations") || "[]"
      );
      // Add new recommendation
      const updated = [...existing, sanitizedData];
      // Store in localStorage
      localStorage.setItem("recommendations", JSON.stringify(updated));
      // Update parent component
      addRecommendation(sanitizedData);
      setStatus("Recommendation added successfully!");
      setForm({ name: "", email: "", recommendation: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("LocalStorage error:", err);
      setStatus("Failed to save recommendation. Storage may be full.");
    }
  };

  return (
    <div id="re">
      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .form-container input,
        .form-container textarea {
          font-family: "Trebuchet MS", Arial, sans-serif;
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .form-container textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-container h2 {
          color: #7600bc;
          font-size: 36px;
          margin-bottom: 20px;
        }
        .form-container .submit-btn {
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
        .submit-btn:hover {
          border-color: #5a0096;
          color: #7600bc;
          background-color: white;
        }
        .error {
          color: red;
          font-size: 14px;
          margin-top: -6px;
          margin-bottom: 6px;
        }
        .status {
          text-align: center;
          color: green;
          margin-top: 10px;
        }
        @media (max-width: 600px) {
          input,
          textarea {
            width: 100%;
          }
        }
      `}</style>
      <div className="form-container">
        <h2>Leave a Recommendation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name (Optional)"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <textarea
            id="new_recommendation"
            placeholder="Your Recommendation"
            name="recommendation"
            value={form.recommendation}
            onChange={handleChange}
            required
          />
          {errors.recommendation && (
            <p className="error">{errors.recommendation}</p>
          )}
          <button type="submit" className="submit-btn">
            Submit
          </button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
