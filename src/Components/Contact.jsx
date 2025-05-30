import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    companyEmail: "",
    description: "",
  });

  useEffect(() => {
    emailjs.init("fLoWxFwvzzktng25R"); // ✅ Initialize your EmailJS user ID once
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_erli3cf", "template_9mqi83m", {
        to_email: "jsandatsys@datsys.in",
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        companyName: formData.companyName,
        companyEmail: formData.companyEmail,
        description: formData.description,
      })

      .then(() => {
        alert("✅ Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          country: "",
          companyName: "",
          companyEmail: "",
          description: "",
        });
      })
      .catch((err) => {
        console.error("❌ Failed to send email:", err);
        alert("Failed to send email. Check the console for details.");
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-[rebeccapurple] mt-5 flex justify-center items-center px-10 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-20 w-full max-w-2xl space-y-6 shadow-[0_0px_25px_8px_rebeccapurple]"
        >
          <h2 className="text-3xl font-bold text-center text-[rebeccapurple]">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
            >
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
              Company Name
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
              Company Email
            </label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[rebeccapurple] mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 rounded border border-[rebeccapurple] shadow-[0_0_8px_0_rebeccapurple]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[rebeccapurple] mb-4 text-white font-semibold rounded hover:bg-purple-900 transition shadow-[0_0_10px_0_rebeccapurple]"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
