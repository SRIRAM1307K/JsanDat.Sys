import React, { useState } from "react";
import Footer from "./Footer";
// import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    companyEmail: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_public_key";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send email.");
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-[rebeccapurple] mt-5 flex justify-center items-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-10 w-full max-w-2xl space-y-6"
          style={{
            boxShadow: "0 0px 10px 4px #FE0000", // rebeccapurple shadow
          }}
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
                className="w-full p-2 rounded border border-[#FE0000]"
                style={{
                  boxShadow: "0 0 8px 0 #FE0000",
                }}
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
                className="w-full p-2 rounded border border-[#FE0000]"
                style={{
                  boxShadow: "0 0 8px 0 #FE0000",
                }}
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
              className="w-full p-2 rounded border border-[#FE0000]"
              style={{
                boxShadow: "0 0 8px 0 #FE0000",
              }}
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
              className="w-full p-2 rounded border border-[#FE0000]"
              style={{
                boxShadow: "0 0 8px 0 #FE0000",
              }}
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
              className="w-full p-2 rounded border border-[#FE0000]"
              style={{
                boxShadow: "0 0 8px 0 #FE0000",
              }}
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
              className="w-full p-2 rounded border border-[#FE0000]"
              style={{
                boxShadow: "0 0 8px 0 #FE0000",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[rebeccapurple] text-white font-semibold rounded hover:bg-purple-900 transition"
            style={{ boxShadow: "0 0 10px 0 #FE0000" }}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
