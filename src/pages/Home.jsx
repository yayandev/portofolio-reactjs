import React from "react";
import Navbar from "../components/Navbar";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeComponent />
        <Footer />
      </main>
    </>
  );
};

export default Home;
