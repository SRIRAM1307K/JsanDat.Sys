import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
import Slider from "./Components/Slider.jsx";
import Maincontent from "./Components/Maincontent.jsx";
import Boxsection from "./Components/Boxsection.jsx";
import Changesection from "./Components/Changesection.jsx";
import Links from "./Components/Links.jsx";
import Footer from "./Components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Navbar />
    <Content />
    <Slider />
    <Maincontent />
    <Boxsection />
    <Changesection />
    <Links />
    <Footer />
  </>
);
