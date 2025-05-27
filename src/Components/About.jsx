import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
// import aboutImage from "../assets/Images/about-image.jpg"; // Replace with your image path

export default function About() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto my-16 p-8 md:p-12 bg-white rounded-3xl flex flex-col md:flex-row items-center gap-10"
        style={{
          boxShadow: "0 0 10px 4px #FE0000", // rebeccapurple shadow
        }}
      >
        {/* Text Content */}
        <div className="flex-1 rounded-2xl">
          <h2
            className="text-4xl font-extrabold mb-6 text-[rebeccapurple]"
            style={{ textShadow: "0 0 10px rgba(102, 51, 153, 0.8)" }}
          >
            About Dat.Sys
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-4">
            Jsan Dat.Sys was founded in March of 2022 and is based in
            Kumbakonam, Tamil Nadu, India. We started small and have grown
            steadily by providing a variety of services to our customers.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mb-4">
            One of our major services includes annotations—image, video, lidar
            annotation, and segmentation. In addition, we develop and deliver
            websites for retail, e-commerce, and static websites tailored for
            small businesses.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            Our main goal is to deliver services with excellent quality and
            timely delivery.
          </p>

          <blockquote
            className="text-[rebeccapurple] text-xl font-semibold italic border-l-4 border-[#FE0000] pl-4"
            style={{ textShadow: "0 0 2px #FE0000" }}
          >
            “Great Power Comes from Great Source”
          </blockquote>
        </div>

        {/* Image */}
        {/* <div className="flex-1 max-w-md">
          <img
            //   src={aboutImage}
            alt="About Dat.Sys"
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
            style={{ boxShadow: "0 0 20px 4px rgba(102, 51, 153, 0.5)" }}
          />
        </div> */}
      </motion.section>
      <Footer />
    </div>
  );
}
