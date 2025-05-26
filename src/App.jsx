import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
import Maincontent from "./Components/Maincontent.jsx";
import Boxsection from "./Components/Boxsection.jsx";
import Changesection from "./Components/Changesection.jsx";
import Links from "./Components/Links.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Content />
              <Maincontent />
              <Boxsection />
              <Changesection />
              <Links />
              <Footer />
            </>
          }
        />

        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
