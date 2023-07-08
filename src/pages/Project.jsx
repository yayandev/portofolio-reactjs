import React from "react";
import Navbar from "../components/Navbar";
import ProjectComponent from "../components/ProjectComponent";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <>
      <Navbar />
      <main>
        <ProjectComponent />
        <Footer />
      </main>
    </>
  );
};

export default Project;
