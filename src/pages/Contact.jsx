import React from "react";
import Navbar from "../components/Navbar";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactComponent />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
