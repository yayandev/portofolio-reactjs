import React from "react";
import Navbar from "../components/Navbar";
import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutComponent />
        <Footer />
      </main>
    </>
  );
};

export default About;
