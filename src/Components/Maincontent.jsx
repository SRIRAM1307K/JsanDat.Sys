import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import web from "../assets/Images/ZigZag/pexels-pixabay-270404.jpg";
import app from "../assets/Images/ZigZag/pexels-deyvi-romero-15310-89955.jpg";
import annotate from "../assets/Images/ZigZag/data-annotation-services.jpg";

const Maincontent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      key: "app",
      content: (
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row items-center gap-10 border-l-8 pl-6 border-[#663399]"
          style={{
            boxShadow: "0 0 20px rgba(102, 51, 153, 0.4)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <img
            src={app}
            alt="App Development"
            className="w-full sm:w-4/5 lg:w-2/5 rounded-xl object-cover transition-transform duration-500 hover:scale-105 "
            style={{
              boxShadow: "0 8px 24px rgba(102, 51, 153,0.7)",
            }}
          />
          <div className="w-full lg:w-1/2 text-center space-y-4">
            <h1 className="text-4xl font-semibold">App Development</h1>
            <p className="text-lg text-gray-300">
              The app development process includes creating installable
              applications and backend services, like API data access.
            </p>
            <button
              id="btn"
              className="mt-2 px-4 py-2 text-xl font-semibold border-2 border-[#663399] text-white hover:bg-[#663399] hover:text-[#663399] cursor-pointer transition rounded-md"
            >
              Learn More
            </button>
          </div>
        </div>
      ),
    },
    {
      key: "annotation",
      content: (
        <div
          data-aos="fade-up"
          className="flex flex-col-reverse lg:flex-row items-center gap-10 border-l-8 pl-6 border-[#663399]"
          style={{
            boxShadow: "0 0 20px rgba(102, 51, 153, 0.4)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <div className="w-full lg:w-1/2 text-center space-y-4">
            <h1 className="text-4xl font-semibold">Annotation Solutions</h1>
            <p className="text-lg text-gray-300">
              Categorize and label data for AI. Training data must be
              categorized and annotated for each use case.
            </p>
            <button
              id="btn"
              className="mt-2 px-4 py-2 text-xl font-semibold border-2 border-[#663399] text-white hover:bg-[#663399] transition rounded-md"
            >
              Learn More
            </button>
          </div>
          <img
            src={annotate}
            alt="Annotation Solutions"
            className="w-full sm:w-4/5 lg:w-2/5 rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            style={{
              boxShadow: "0 8px 24px rgba(102, 51, 153, 0.7)",
            }}
          />
        </div>
      ),
    },
    {
      key: "web",
      content: (
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row items-center gap-10 border-l-8 pl-6 border-[#663399]"
          style={{
            boxShadow: "0 0 20px rgba(102, 51, 153, 0.4)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <img
            src={web}
            alt="Web Development"
            className="w-full sm:w-4/5 lg:w-2/5 rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            style={{
              boxShadow: "0 8px 24px rgba(102, 51, 153, 0.7)",
            }}
          />
          <div className="w-full lg:w-1/2 text-center space-y-4">
            <h1 className="text-4xl font-semibold">Web Development</h1>
            <p className="text-lg text-gray-300">
              Static websites are served as-is. No runtime user-driven change
              unless redesigned by the admin.
            </p>
            <button
              id="btn"
              className="mt-2 px-4 py-2 text-xl font-semibold  border-2 border-[#663399] text-white hover:bg-[#663399] transition rounded-md"
            >
              Learn More
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="services"
      className="px-4 sm:px-6 lg:px-20 py-16 bg-black text-white"
    >
      <section className="space-y-24">
        {sections.map((section) => (
          <React.Fragment key={section.key}>{section.content}</React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default Maincontent;
